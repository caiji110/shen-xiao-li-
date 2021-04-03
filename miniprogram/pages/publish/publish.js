// miniprogram/pages/publish/publish.js
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    add:false,
    obj:{},
    food2:'空',
    food3:'空',
    iphone:'',
    salary:'',
    address:"斋区--红豆斋",
    servicetime:"10点：15分",
    food1:"",
    roomnum:""
  },
  orderdata(e){
    const iphoneid = this.data.iphone
    // if(!iphoneid||!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(iphoneid))){
    //   Toast('请输入正确的手机号码 ~');
    //   return 1;
    // }
    if(!this.data.salary){
      Toast("请输入报酬")
      return 1;
    }
    if(!this.data.address){
      Toast("请输入地址")
      return 1
    }
    if(!this.data.servicetime){
      Toast("请输入送达时间")
      return 1
    }
    if(!this.data.food1){
     Toast("请输入菜品")
     return 1
    }
     console.log(e.detail.value);
    //console.log(e.detail.result);
    wx.cloud.callFunction({
      name:"orderinfo",
      data:{
          ressult:e.detail.value,
          servicetime:this.data.servicetime,
          address:this.data.address
      }
    })
  },
  changetime(e){
    console.log(e);
        this.setData({
          servicetime:e.detail.servicetime
        })
  },
  changeaddress(e){
       console.log(e);
    this.setData({
      address:e.detail.address
    })
  },
  tohome:function(){
    const iphoneid = this.data.iphone

      //  if(!iphoneid||!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(iphoneid))){
      //    Toast('请输入正确的手机号码 ~');
      //    return 1;
      //  }
       if(!this.data.salary){
         Toast("请输入报酬")
         return 1;
       }
       if(!this.data.address){
         Toast("请输入地址")
         return 1
       }
       if(!this.data.servicetime){
         Toast("请输入送达时间")
         return 1
       }
       if(!this.data.food1){
        Toast("请输入菜品")
        return 1
       }
    // // console.log(this.data.password);
    // //放到异步任务里面，不要立马执行，否则if判断将无效果
     setTimeout(()=>{
       wx.navigateTo({
         url: '../userorder/userorder',
       })
     },0)

  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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