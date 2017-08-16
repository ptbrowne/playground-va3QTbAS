'use strict'

// This is a default simple connector made to show you some common libs which can be used
// This connector fetches some cat images from the qwant api (which is more open than the google one)
const {BaseKonnector, saveFiles, request} = require('cozy-konnector-libs')

const rq = request()

module.exports = new BaseKonnector(fields => {
  return rq({
    uri: 'https://api.qwant.com/api/search/images',
    qs: {
      q: 'chatons', // change the search keyword if you want
      count: 10
    }
  })
  .then(body => {
    let result = []
    if (body && body.data && body.data.result && body.data.result.items) {
      result = body.data.result.items.map((item, index) => ({ fileurl: item.media }))
    }
    return result
  })
  .then(entries => saveFiles(entries, fields.folderPath))
  // saves the informations about resulting images to display it after
  .then(result => {
    require('fs').writeFileSync('result.js', `window.result = ${JSON.stringify(result)}`)
    return result
  })
  // displays the list of results in the tech.io page
  .then(result => console.log('TECHIO> open -s /project/target index.html'))
})
