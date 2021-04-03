const DOMITORIES = [
  {
    areaName: "斋区",
    buildings: ["紫薇斋","蓬莱客栈","红榴斋","山茶斋","海桐斋",
    "米兰斋","桃李斋", "凌霄斋","雨鹃斋","银晔斋",
    "风槐斋","木棉斋","红豆斋"],
  },
  {
    areaName: "难区",
    buildings: ["春笛","夏筝","秋瑟","冬筑"],
  },
  {
    areaName: "丽湖大学",
    buildings: ["风信子","山楂树","胡杨林"],
  },
  {
    areaName: "西南一区",
    buildings: ["留学生宿舍", "紫藤斋", "芸香阁", "丁香阁", "文杏阁",
    "海棠阁", "疏影阁", "乔木阁", "乔林阁", "乔森阁",
     "乔相阁", "乔梧阁", "云杉轩"],
  },
  {
    areaName: "西南二区",
    buildings: ["丹枫轩", "木犀阁", "苏铁轩", "石楠轩", "紫檀轩"],
  },
];
Component({
  data:{
    pickerRange:[DOMITORIES.map(v => v.areaName),DOMITORIES[0].buildings],
    range:DOMITORIES[0].areaName,
    address:DOMITORIES[0].buildings[12]
  },
  methods:{
    bindChange(e){
      const selectedIndex = e.detail.value;
      const domitories  = DOMITORIES[selectedIndex[0]]
      this.setData({
        range:domitories.areaName,
        address:domitories.buildings[selectedIndex[1]]
      })
      
      var myEventDetail = {address:this.data.range+"--"+this.data.address} // detail对象，提供给事件监听函数,传递给页面的值
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
     
    },
    bindMultiPickerColumnChange(e){
      const{column,value} = e.detail
      if(column  == 0){
        this.setData({
          'pickerRange[1]':DOMITORIES[value].buildings
        })
      }
    }
  }
})