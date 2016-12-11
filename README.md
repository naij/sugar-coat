sugar-coat
=========

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/sugar-coat.svg?style=flat-square
[npm-url]: https://npmjs.org/package/sugar-coat
[download-image]: https://img.shields.io/npm/dm/sugar-coat.svg?style=flat-square
[download-url]: https://npmjs.org/package/sugar-coat

基于 [egg](http://github.com/eggjs/egg) 的 Node.js web 框架。

## 配置

sugar-coat 支持不同环境加载不同的配置，在 `${baseDir}/config` 目录下，有以下配置文件：

```
├── config.default.js  # 默认配置
├── config.local.js    # 本地开发配置，在本地开发的时候会和 default 配置合并（覆盖）
├── config.daily.js    # 日常配置，在日常的时候会和 default 配置合并（覆盖）
├── config.pre.js      # 预发配置，在预发的时候会和 default 配置合并（覆盖），注意，如果没有此文件，则在预发下使用 prod 的配置
└── config.prod.js     # 生产配置，在生产环境的时候会和 default 配置合并（覆盖）
```
