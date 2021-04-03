// components/item/item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     propdata:{
       type:Object,
       observer: function (newVal, oldVal){
        this.setData({
          item:newVal
        })
     }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    item:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    todetail(e){
      // console.log(e);
      // console.log(e.currentTarget.dataset.onlyid);
      wx.navigateTo({
        url: '../../pages/iteminfo/iteminfo?onlyid='+e.currentTarget.dataset.onlyid
      })
    }
  }
})
