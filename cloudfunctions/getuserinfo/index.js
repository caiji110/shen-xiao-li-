// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let obj={}
  const db = cloud.database();
  await db.collection("userinfo").where({
    openid:event.opid
  }).get().then(res=>{
   obj = res.data[0]
  } )
 console.log(obj);
  return {
    user:obj
  }
}