// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
   const db = cloud.database();
   let userdata =[]
   //判断用户是否存在
    await db.collection("userinfo").where({
     _openid: wxContext.OPENID
   }).get().then( res => {
     userdata.push(...res.data)
   }
   )
  
  console.log(userdata);
  //用户不存在
if(!userdata[0]){
  console.log('22222');
  await db.collection("userinfo").add({
    data:{
      _openid: wxContext.OPENID,
      avatarUrl:event.avatarUrl,
      username:event.username,
      doingorder:[],
      done:false
   }
    }).then(res => console.log(res))
}
  
  return {
     ok:"ok"
  }
}