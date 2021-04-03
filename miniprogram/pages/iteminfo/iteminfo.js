// miniprogram/pages/iteminfo/iteminfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   item:{},
   id:'',
   opid:"",
   message:"",
   forbid:false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     const onlyid = options.onlyid
     this.setData({
       id:onlyid
     })
       wx.cloud.callFunction({
         name:"finditeminfo",
         data:{
           onlyid:onlyid
         }
       }).then(res => {
         this.setData({
           item:res.result.obj
         })
        if(this.data.item.orderstatus === '已接单'){
          this.setData({
            forbid:true
          })
        }
       })
       //获取本地缓存的openid
       wx.getStorage({
        key: 'openid',
        success :(res)=> {
          this.setData({
            opid:res.data
          })
        },
        fail:function(res){
          console.log(res);
        }
      })
  },
  toorderinfo:function(){
    // 获取在登录后本地缓存的openid

   //添加订单信息到用户集合
   //有没有简化的方法。。代码太烂了。
   //把订单的编号传递给云函数，再由云函数判断该用户是否有接订单的资格
   //嵌套了两次异步，代码难看
   new Promise((resolve,reject) => {
    wx.cloud.callFunction({
      name:"addorderTouser",
      data:{
        opid:this.data.opid,
        id:this.data.id
      }
    }).then(  res =>{
     //  根据调用云函数的返回结果设置提示消息根据提示消息的结果决定是否跳转
        this.setData({
         message:res.result.message
       });
        resolve()
      }
     )
   }).then(() => {
    if(this.data.message == "ok"){
      wx.navigateTo({
        url: '../orderstatus/orderstatus?onlyid='+this.data.id,
      })
    }
    else{
      wx.showToast({
        title:this.data.message,
        icon: 'none',
        duration: 2000
      })
    }
    })
  }
})