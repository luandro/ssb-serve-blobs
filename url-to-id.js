const ip = require('ip')
const PORT = require('./port')
module.exports = function urlToId (url) {
  const myIp = ip.address()
  const blobRef = url.split(`http://${myIp || 'localhost'}:${PORT}/`)[1]
  return decodeURIComponent(blobRef)
}
