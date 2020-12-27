export default function handler(req, res) {
  const {
    query: { e },
  } = req
  const fs=require('fs')
  var dt=fs.readFileSync('../config.json',{encoding:'utf-8'})
  var htmlstring=``
  res.end(`Post: ${e}`)
}
