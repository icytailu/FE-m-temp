# 团队规范

原则：统一规范，提升效率，让写代码成为一种乐趣

- [项目运行](#项目运行)
- [编辑器规范](#vscode)
- [命名规范](#命名规范)
- [HTML 规范](#html规范)
- [CSS 规范](#css规范)
- [JavaScript 规范](#javascript规范)

## 项目运行

```sh
npm i

npm run dev

```

需要在 src 目录下添加`config.js` 内容与`config.example.js`一样

## VSCode

[下载地址](https://code.visualstudio.com/)

软件推荐

### Bracket Pair Colorizer

### Codelf

### Color Highlight

### ESLint

```js
{
 "editor.formatOnSave": true,
  // eslint格式化配置
  "eslint.enable": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ]
 }
```

### GitLens

### HTML Snippets

### IntelliJ IDEA Keybindings

快捷键

### javascript console utils

快捷键 `commond + shift + L`

### language-stylus

### Manta's Stylus Supremacy

### markdownlint

### Material Icon Theme

### Path Intellisense

### Prettier - Code formatter

### px to rem

快捷键 `alt + z`

```js
"px-to-rem.px-per-rem": 20
```

### TODO Highlight

```js
{
    "todohighlight.keywords": [
    "DEBUG:",
    "REVIEW:",
    {
      "text": "todo",
      "color": "#ffffff",
      "backgroundColor": "#FFBD2A"
    },
    {
      "text": "TODO",
      "color": "#ffffff",
      "backgroundColor": "#FFBD2A"
    }
  ]
}
```

### Trailing Spaces

去除多余空格

### Vetur

### 配置详情

```js
{
  "workbench.iconTheme": "material-icon-theme",
  "editor.tabSize": 2,
  "editor.fontSize": 17,
  "editor.fontWeight": "500",
  // 控制资源管理器是否应在删除文件到废纸篓时进行确认。
  "explorer.confirmDelete": false,
  // 控制在资源管理器内拖放移动文件或文件夹时是否进行确认。
  "explorer.confirmDragAndDrop": false,
  // git配置
  "gitlens.advanced.messages": {
    "suppressCommitHasNoPreviousCommitWarning": false,
    "suppressCommitNotFoundWarning": false,
    "suppressFileNotUnderSourceControlWarning": false,
    "suppressGitVersionWarning": false,
    "suppressLineUncommittedWarning": false,
    "suppressNoRepositoryWarning": false,
    "suppressResultsExplorerNotice": false,
    "suppressShowKeyBindingsNotice": true
  },
  "editor.formatOnSave": true,
  // eslint格式化配置
  "eslint.enable": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],

  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",

  "prettier.eslintIntegration": true,
  "stylusSupremacy.insertColons": false,
  "stylusSupremacy.insertBraces": false,
  "stylusSupremacy.insertSemicolons": false,

  "breadcrumbs.enabled": true,
  "workbench.editor.openPositioning": "left",
  "emmet.triggerExpansionOnTab": true,
  "css.lint.duplicateProperties": "warning",
  // 启用后，将在保存文件时剪裁尾随空格。
  "files.trimTrailingWhitespace": true,
  // 启用后，保存文件时将删除在最终新行后的所有新行。
  "files.trimFinalNewlines": true,
  "git.autofetch": true,
  "terminal.integrated.fontSize": 16,
  "px-to-rem.px-per-rem": 20,
  "git.confirmSync": false,
  "prettier.endOfLine": "lf",
  "prettier.semi": false,
  "prettier.bracketSpacing": false,
  "prettier.jsxBracketSameLine": true,
  "vetur.format.defaultFormatter.js": "prettier-eslint",
  "vetur.format.defaultFormatter.html": "prettier",
  "editor.renderLineHighlight": "all",
  "editor.glyphMargin": false,
  "editor.mouseWheelZoom": true,
  "editor.minimap.maxColumn": 40,
  "workbench.editor.labelFormat": "short",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "todohighlight.keywords": [
    "DEBUG:",
    "REVIEW:",
    {
      "text": "todo",
      "color": "#ffffff",
      "backgroundColor": "#FFBD2A"
    },
    {
      "text": "TODO",
      "color": "#ffffff",
      "backgroundColor": "#FFBD2A"
    }
  ],
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.fontFamily": "consolas,'YaHei Consolas Hybrid','Source Code Pro ',  Menlo,Monaco,'Courier New', monospace",
  "editor.lineHeight": 21,
  "vsicons.dontShowNewVersionMessage": true
}

```

[↑ 返回 Top](#团队规范)

## 命名规范

原则：统一规范，提升效率，让写代码成为一种乐趣

### 项目命名

使用连字符（ - ）进行命名格式为：技术（FE BE UI）- 项目名称 - 项目适配（默认移动版 mobile）

例如：`FE-capsule`、`FE-aic-pc`

### 文件夹命名

使用小写命名 多个单词使用连字符（ - ）连接

eg： `images`、`capsule-detail`

### 组件命名

- 紧密耦合的组件名
- 一般化描述的单词开头，以描述性的修饰词结尾。

eg：

用户相关：`userEdit` `userList`

首页相关：`homeSearch` `homeList`

### HTML 命名

使用小写命名 多个单词使用连字符（ - ）连接

eg：

```html
<my-component></my-component>
```

### CSS 命名

使用小写命名 多个单词使用连字符（ - ）连接

eg：`class='userinfo-wrap'`

### JavaScript 命名

小驼峰式命名

eg：`bannerList`

[↑ 返回 Top](#团队规范)

## HTML 规范

### 语法

缩进使用 tab （2 个空格）

嵌套的节点应该缩进

在属性上，使用双引号，不要使用单引号

属性名全小写，用中划线（-）做分隔符

格式化插件 `prettier`

### 初始模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
    />
    <meta name="description" content="" />
    <meta name="keywords" content="" />

    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />

    <title></title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

### 使用语义化标签

```html
<!-- good -->
<body>
  <header></header>
  <nav></nav>
  <section></section>
  <aside></aside>
  <footer></footer>
</body>
<!-- bad -->
<body>
  <div></div>
  <div></div>
  <div></div>
</body>
```

### 尽量少嵌套标签

```html
<!-- bad -->
<div v-for="(item, index) in list" :key="index">
  <van-swipe-cell>
    <van-button slot="right" />
  </van-swipe-cell>
</div>

<!-- good -->
<van-swipe-cell v-for="(item, index) in list" :key="index">
  <van-button slot="right" />
</van-swipe-cell>
```

### 纯数字输入框

使用 type="tel" 而不是 type="number"

```html
<input type="tel" />
```

### 元素嵌套规范，每个块状元素独立一行，内联元素可选

```html
<div>
  <h1></h1>
  <p></p>
</div>
<p><span></span><span></span></p>
```

### 注释规范

```html
<!-- 注释内容前后需要用空格隔开 -->

<!--不好的注释 -->
<!--不好的注释-->
```

[↑ 返回 Top](#团队规范)

## CSS 规范

### 语法

缩进使用 tab （2 个空格）
使用 stylus 编写 css

[十分钟掌握：stylus 中文文档](https://www.zhangxinxu.com/jq/stylus/)

### css 选择器尽量使用 class 避免直接使用标签形式

```css
/* good */
.avatar-box .avatar {
}
/* bad */
.avatar-box img {
}
```

[↑ 返回 Top](#团队规范)

## JavaScript 规范

### 变量

**常量用`const` 变量用`let`**

```js
// 这里用const 不用let  内存地址不变
const userInfo = {}
userInfo.name = "icy"
```

### 函数

#### 函数注释

```js
/**
 * 获取任务的名称
 * @param id {Number} 传入需要获取名称的人物id
 * @return {String} 返回的姓名
 */
function getTaskName(id) {
  const name = "test"
  return name
}
```

#### 函数参数 (理想情况下应不超过 2 个)

#### 移除重复的代码

#### 函数方法命名

_函数名应明确表明其功能_

`getUserInfo` 、`getBannerList` 、 `initPage`

get 获取 set 设置

add 增加 remove 删除

create 创建 destory 移除

start 启动 stop 停止

open 打开 close 关闭

read 读取 write 写入

begin 开始 end 结束

view 查看 browse 浏览

edit 编辑 modify 修改

select 选取 mark 标记

find 查找 search 搜索

connect 连接 disconnect 断开

send 发送 receive 接收

lock 锁定 unlock 解锁

load 加载

[↑ 返回 Top](#团队规范)
