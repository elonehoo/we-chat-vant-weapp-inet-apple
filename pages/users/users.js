// pages/users/users.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      headPortrait:'https://i.im5i.com/2021/01/07/8faaeb3a004940f2bd6db24a6e281631c59c11ceeec32a4d.jpg',
      nickName:"晓寻遥"
    },
    operationList:[
      {
        "name":"同意签到",
        "number":5
      },
      {
        "name":"正在签到",
        "number":10
      },
      {
        "name":"本月排名",
        "number":0
      },
      {
        "name":"修改用户数据",
        "number":0
      }
    ],
    loginState:true
  },

  userClick(){
    console.log("点击个人信息")
  },

  loginClick(){
    console.log("登陆操作")
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
    if(typeof this.getTabBar === 'function' && this.getTabBar()){
      this.getTabBar().setData({active:2})
    }
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