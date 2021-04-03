 const TIMEARRY = [
   {hours:[10,11,12,16,17,18]},
   {minutes:[15,30,25]}
  ]

Component({
  data: {
    // years: years,
    // year: date.getFullYear(),
    pickerTime:[TIMEARRY[0].hours,TIMEARRY[1].minutes],
     index:[0,0],
     h:10,
     m:15
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindChange: function (e) {
      const selectIndex = e.detail.value  
      const hours = TIMEARRY[0].hours[selectIndex[0]]
      const minutes = TIMEARRY[1].minutes[selectIndex[1]]
      this.setData({
        h:hours,
        m:minutes
      })
      var myEventDetail = {servicetime:this.data.h+"点"+":"+this.data.m+"分"} // detail对象，提供给事件监听函数,传递给页面的值
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
  }
}
})
