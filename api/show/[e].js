export default function handler(req, res) {
  const {
    query: { e },
  } = req
  const fs=require('fs')
  var dt=fs.readFileSync('../config.json',{encoding:'utf-8'})
  console.log(`data:${dt[e]}`)
  var htmlstring=`<font color="red" size="20">答案：${dt[e]['data']}</font>提交人：${dt[e]['author']}`
  res.end(htmlstring)
}
