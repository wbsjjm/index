export default function handler(req, res) {
  const {
	query: { e },
  } = req
  var t=require("fs")
  function randomNum(minNum,maxNum){
	switch(arguments.length){
	  case 1:
		  return parseInt(Math.random()*minNum+1,10);
	  case 2:
		  return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
	  default:
		  return 0;
	}
  }
  var m=t.readFileSync('../config.json',{encoding:'utf-8'})
  var tt=JSON.parse(e)
  var nm=JSON.parse(m)
  nm[randomNum(0,99999999)]={
	data:tt['data'],
	author:tt['author'],
  }
  t.writeFileSync('../config.json',JSON.stringify(nm))
  res.end(`Post: ${e}`)
}
