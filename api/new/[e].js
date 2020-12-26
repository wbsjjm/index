export default function handler(req, res) {
  const {
    query: { e },
  } = req
  var t=require("fs")
  t.writeFileSync
  res.end(`Post: ${e}`)
}
