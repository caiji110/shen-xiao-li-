// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database()
  let orderarray = []
await db.collection('userinfo').aggregate()
  .lookup({
    from: 'orderinfo',
    localField: 'doingorder',
    foreignField: 'onlyid',
    as: 'orderList',
  })
  .end()
  .then(res => 
    {
    orderarray.push(...res.list[0].orderList)
  })
  .catch(err => console.error(err))
  return {
    itemarray:orderarray,
  }
}