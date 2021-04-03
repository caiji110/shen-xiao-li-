// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
//该函数用于把订单内容插入数据库
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
   const db = cloud.database();
  // console.log(event.address);
  await db.collection("orderinfo").add({
     data:{
      openid: wxContext.OPENID, //订单发起者的openid
       canteen:event.ressult.canteen,//送餐食堂
       food1:event.ressult.food1,//第一选择的菜品
       food2:event.ressult.food2,//第二选择菜品
       food3:event.ressult.food3,//第三选择菜品
       salary:event.ressult.salary,//报酬
       phone:event.ressult.iphone,//手机号
       wxnum:event.ressult.wxnum,//微信号
       address:event.address,//目的地
       endtime:event.ressult.endtime,//订单截止时间
       servicetime:event.servicetime,//送达时间
       onlyid: (Math.random()).toString().slice(2),//订单编号
       orderstatus:'未接单',//订单的状态
       helpopenid:"",//订单配送者的openid
       roomnum:event.ressult.roomnum //宿舍门号
     }
   }).then(res => console.log(res)).catch(res =>console.log(res))
  return {
    "ok":"ok"
  }
}