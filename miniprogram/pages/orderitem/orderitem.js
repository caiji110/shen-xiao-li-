// miniprogram/pages/orderitem/orderitem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   ordergather:undefined,
   value:"",
   orderitem:undefined
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     wx.cloud.callFunction({
       name:"findallorder",
     }).then(res => {
       this.setData({
         ordergather:res.result.ordergather
       })
       //console.log(this.data.ordergather);
      // console.log(res.result.ordergather); 
     })
  },
  // onSearch(){
  //   console.log(this.data.value);
  // }
  onCancel(){
  
      this.setData({
        orderitem:undefined
      })
      setTimeout(()=>{
        wx.redirectTo({
          url: '../orderitem/orderitem',
        })
      },0)
  },
  onSearch:function(e){
    // console.log(e.detail);
    // console.log(this.data.value);
    const message = e.detail.split('+');
    console.log(message);
    console.log(message[0],message[1]);
    //取出食堂和地址进行搜索
    wx.cloud.callFunction({
      name:"roughlyfind",
      data:{
        address:message[1],
        canteen:message[0]
      },
      success: (res) => {
      
         this.setData({
          orderitem: res.result.orderitem
         })
         console.log(this.data.orderitem);
      },
       fail: (res) => {
         console.log(res);
       },  
    })
  }
})