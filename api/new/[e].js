export default function handler(req, res) {
  const {
    query: { e },
  } = req
  var t=require("fs")
  t.writeFileSync('../e.json','ssssss')
  res.end(`Post: ${e}`)
}
