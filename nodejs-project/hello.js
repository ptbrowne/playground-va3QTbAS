'use strict'

const {BaseKonnector, log} = require('cozy-konnector-libs')

module.exports = new BaseKonnector(function init () {
  log('info', 'Hello World!')
})
