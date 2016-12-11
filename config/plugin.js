'use strict'

module.exports = {
  /**
   * 支持 nunjcuks view, 默认开启
   */
  view: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  /**
   * 支持阿里云oss，默认不开启
   */
  oss: {
    enable: false,
    package: 'egg-oss',
  },
}