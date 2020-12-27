export default function handler(req, res) {
  const {
    query: { e },
  } = req
  var t=require("fs")
  t.writeFileSync('../config.json','ssssss')
  res.end(`Post: ${e}`)
}
