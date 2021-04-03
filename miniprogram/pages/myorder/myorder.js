Page({
  data: {
    active: 0,
    index:0,
    delivering:[]
  },
  onLoad(){
    //根据Openid查询用户的doingorder
    wx.cloud.callFunction({
      name:"finddoingorder",
      success:(res) =>{
        this.setData({
          delivering:this.data.delivering.concat(res.result.itemarray)
        })
      }
    })

  },
  onChange(e) {
   console.log(e);
   this.setData({
     index:e.detail.index
   })
  },
});