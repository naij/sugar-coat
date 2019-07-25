'use strict'

module.exports = {
  /**
   * 支持 nunjcuks view, 默认开启
   */
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  /**
   * 支持阿里云oss，默认开启
   */
  oss: {
    enable: true,
    package: 'egg-oss',
  },
  /**
   * 支持 redis, 默认开启
   */
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  /**
   * session 保存到redis, 默认开启
   */
  sessionRedis: {
    enable: true,
    package: 'egg-session-redis',
  }
}