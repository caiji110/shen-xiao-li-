// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database()
  let obj = {}
 await db.collection('orderinfo').where({
    openid: wxContext.OPENID
  }).get().then(res=>{
    console.log(res);
   // console.log(res.data[res.data.length-1]);
   obj = res.data[res.data.length-1]
  })

  return {
    iteminfo:obj
  }
}