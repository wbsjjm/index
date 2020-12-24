export default function handler(req, res) {
  const {
    query: { e },
  } = req

  res.end(`Post: ${e}`)
}
