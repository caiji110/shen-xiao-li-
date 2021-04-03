// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database();
  let arry = []
  //接过的单不在进行展示
 await db.collection("orderinfo").where({
    orderstatus:"未接单"
  }).get().then(res => {
    arry.push(...res.data)
    // arry.concat为啥这个不行
    // console.log(res.data);
    // console.log(arry);
  })

  return {
    ordergather:arry
  } 
}