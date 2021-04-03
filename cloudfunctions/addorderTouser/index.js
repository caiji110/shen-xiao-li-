// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = context
  const db = cloud.database();
  const _ = db.command;
  let exist = true; //用于判断用户是否登录注册过
  let _userid = "";//用于查询正在配送订单的长度
  let _orderid = "";//用于修改订单的状态
  let len ;//正在配送的订单长度
  let status;//存放该订单的状态
  //查询该订单是否被接
  await db.collection("orderinfo").where({
      onlyid:event.id
 }).get().then(res => {
   status = res.data[0].orderstatus;
   _orderid = res.data[0]._id
 }).catch(error => console.log(error))
  if(status == '已接单'){
  return {
    message:'对不起你来晚了'
  }
}
  //对用户信息进行操作
  await db.collection("userinfo").where({
    _openid: event.opid
    }).get().then(res => {  
      console.log(res.data.length);
      if(res.data.length==0){
        //用户不存在，返回注册信息
        exist = false;
        return 0;
      }
      len = res.data[0].doingorder.length
      _userid = res.data[0]._id
     // console.log(res);
    }).catch(res => console.log(res))
   //返回提示信息让用户注册
   if(exist == false){
    return {
      message:"您还未登录请前往个人信息注册"
    }
   }
     
    //限制接单数量。
  if(len>=2){
      return {
        message:"已经达到最大接收订单数量"
      }
    }
    //通过上方的验证可以截取该订单
    if(status == '未接单'){
      await db.collection("orderinfo").doc(_orderid).update({
        data:{
         orderstatus:'已接单'
        }
      }).then(res => console.log(res)).catch( res => console.log(res))
   }
  await db.collection("userinfo").doc(_userid).update({
   data:{ 
     doingorder:_.push(event.id),
   }
 }).then(res=> {console.log(res);})
   .catch(res => console.log(res))
  return {
     message:"ok",
  }
}