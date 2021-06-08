/***************************************************
 * Created by nanyuantingfeng on 2020/3/1 10:10. *
 * Modified by pangwu86 on 2021/6/8 23:53. *
 ***************************************************/
var mdurl = require("mdurl");

function isNeedDecode(url, config) {
  config = config || "*";

  if (config === "*") {
    return true;
  }

  if (config === "./" || config === ".") {
    return !/^(\w+?:\/)?\//.test(url);
  }

  if (config instanceof RegExp) {
    return config.test(url);
  }

  config = [].concat(config);
  return config.some((a) => url.startsWith(a));
}

function decodeURL(url, config) {
  url = isNeedDecode(url, config) ? mdurl.decode(url) : url;
  return /^(\w+?:\/)?\.?\//.test(url) ? url : "./" + url;
}

module.exports = function (md, config) {
  var defaultRender = md.renderer.rules.image;
  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    var token = tokens[idx];
    var srcIndex = token.attrIndex("src");
    var url = token.attrs[srcIndex][1];
    var url2 = decodeURL(url, config);
    tokens[idx].attrs[srcIndex][1] = url2;
    return defaultRender(tokens, idx, options, env, self);
  };
};
