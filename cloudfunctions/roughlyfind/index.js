// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let orderitem = []
  const db = cloud.database();
  const _ = db.command;
  console.log(event.address,event.canteen);
 await   db.collection("orderinfo").where({
    address:db.RegExp({ 
     regexp:'.*' + event.address,
     options:'i'
    }),
    canteen:db.RegExp({ 
      regexp:'.*' + event.canteen,
      options:'i'
     })
  }).get().then(
    res => {
      orderitem = res.data.concat()
      console.log(res.data);
      console.log(orderitem);
    }
  )

  return {
    orderitem:orderitem
  }
}