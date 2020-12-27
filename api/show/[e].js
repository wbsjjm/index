export default function handler(req, res) {
  const {
    query: { e },
  } = req
  var htmlstring=``
  res.end(`Post: ${e}`)
}
