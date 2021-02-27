// pages/tabbar/tabbar.js
Component({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    list:[
      {
        url:"/pages/index/index",
        icon:"wap-home-o",
        text:"首页"
      },
      {
        url:"/pages/checkIng/checkIng",
        icon:"clock-o",
        text:"正在签到"
      },
      {
        url:"/pages/users/users",
        icon:"user-circle-o",
        text:"我的"
      }
    ]
  },
  methods:{
    onchange:function(event){
      wx.switchTab({
        url: this.data.list[event.detail].url
      });
      this.setData({ active: event.detail });
    },
    init() {
      const page = getCurrentPages().pop();
      this.setData({
     　  active: this.data.list.findIndex(item => item.url === `/${page.route}`)
      });
     }
  },
  
})