# markdown-it-disable-url-encode

> 本项目修改自 [nanyuantingfeng/markdown-it-disable-url-encode](https://github.com/nanyuantingfeng/markdown-it-disable-url-encode)

#### Getting Started

```shell
npm install --save-dev @pangwu86/markdown-it-disable-url-encode
```


#### Usage

```js 
  const md = require("markdown-it")();  
  md.use(require("@pangwu86/markdown-it-disable-url-encode"), "./")
  // md.use(require("@pangwu86/markdown-it-disable-url-encode"), "*")
  // md.use(require("@pangwu86/markdown-it-disable-url-encode"), ".")
  // md.use(require("@pangwu86/markdown-it-disable-url-encode"), [...])
  // md.use(require("@pangwu86/markdown-it-disable-url-encode"), /.../)        


  const html = md.render("![image.png](图片/image.png)")
  // <p><img src="./图片/image.png" alt="image.png" /></p> 
 
  // without markdown-it-disable-url-encode plugin :
  // <p><img src="%E5%9B%BE%E7%89%87/image.png" alt="image.png" /></p>  
```

#### API

config rules: 
0. `undefined` : use `rule 1` 
1. `"*"` :  all paths will be decode 

2. `"."`  :  relative paths only 

3. `"./"` :  relative paths only , just like `"."`

4. `string` :  as `string[]` to apply `rule 5`

5. `string[]` :  will be apply  `[].some()`  as result  for  detect if it needs to be decoded   

6. `REGEXP` :  will be apply  `/^/.test()` as result  for  detect if it needs to be decoded  


