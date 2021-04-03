// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
//该云函数用于通过订单编号查询订单
exports.main = async (event, context) => {
  let obj = {}
 const db = cloud.database()
 console.log(event.onlyid);
 await db.collection("orderinfo").where({
   onlyid:event.onlyid
 }).get().then(res => {
   obj = res.data[0]
   console.log(res);
   console.log(res.data[0]);
 })
  return {
   obj:obj
  }
}