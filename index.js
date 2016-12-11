'use strict'

let sugarcoat = require('./lib/sugar-coat')

module.exports = require('egg')
module.exports.Application = sugarcoat.Application
module.exports.Agent = sugarcoat.Agent
module.exports.startCluster = sugarcoat.startCluster