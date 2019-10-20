const ip = require('ip')
const PORT = require('./port')
module.exports = function idToUrl (blobId) {
  const myIp = ip.address()
  const blobRef = encodeURIComponent(blobId)
  return `http://${myIp || 'localhost'}:${PORT}/${blobRef}`
}
