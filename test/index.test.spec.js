/***************************************************
 * Created by nanyuantingfeng on 2020/3/1 10:14. *
 ***************************************************/
function cases(config) {
  const md = require("markdown-it")();

  beforeAll(() => {
    md.use(require("../index"), config);
  });

  it("should render with config", () => {
    expect(md.render("![image.png](example/image.png)")).toMatchSnapshot();
    expect(md.render("![image.png](./example/image.png)")).toMatchSnapshot();
    expect(md.render("![image.png](/example/image.png)")).toMatchSnapshot();
    expect(
      md.render("![image.png](//example.ccc/image.png)")
    ).toMatchSnapshot();

    expect(md.render("![image.png](图片/image.png)")).toMatchSnapshot();
    expect(md.render("![image.png](./图片/image.png)")).toMatchSnapshot();
    expect(md.render("![image.png](/图片/image.png)")).toMatchSnapshot();
    expect(md.render("![image.png](//图片.ccc/image.png)")).toMatchSnapshot();

    expect(
      md.render("![image.png](http://a.b.c/图片/image.png)")
    ).toMatchSnapshot();

    expect(
      md.render("![image.png](https://a.b.c/图片/image.png)")
    ).toMatchSnapshot();

    expect(
      md.render("![image.png](mailto://a.b.c/图片/image.png)")
    ).toMatchSnapshot();

    expect(
      md.render("![image.png](ftp://a.b.c/图片/image.png)")
    ).toMatchSnapshot();

    expect(
      md.render("![image.png](sftp://a.b.c/图片/image.png)")
    ).toMatchSnapshot();

    expect(md.render("![image.png](./a.b.c/图片/image.png)")).toMatchSnapshot();
    expect(md.render("![image.png](/a.b.c/图片/image.png)")).toMatchSnapshot();
    expect(md.render("![image.png](//a.b.c/图片/image.png)")).toMatchSnapshot();
  });
}

describe("scope all( * )", () => {
  cases("*");
  cases();
});

describe("scope REG( /^$/ )", () => {
  cases(/^(https:|ftp:)/);
});

describe("scope array( [...] )", () => {
  cases(["https://", "http://", "//", "/"]);
  cases("sftp://");
});

describe("scope relative( ./ or . )", () => {
  cases("./");
  cases(".");
});
