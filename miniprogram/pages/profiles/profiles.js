// pages/profiles/profiles.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:"",
    username:"",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //登录之后获取openid进行数据库查询拿到具体信息进行渲染
    //优化以下
        //设置本地缓存
          // wx.setStorage({
          //   key:"openid",
          //   data:res.result.openid
          // })
       
     
  },
  toinfo:function(){
    wx.navigateTo({
      url: '../info/info',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */  
  aa(e){
    console.log(e);
    let a = e.detail.rawData
    a= JSON.parse(a)
    console.log(a);
    if(!this.data.img){
      this.setData({
        img:e.detail.userInfo.avatarUrl,
        username:a.nickName
      })
    }
   
  //  console.log(e);
  //  console.log(this.data.username);
  wx.cloud.callFunction({
    name:"adduser",
    data:{
      avatarUrl:this.data.img,
      username:this.data.username
    },
    success:function(res){
      console.log(res);
    }
  })
  
 },
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})