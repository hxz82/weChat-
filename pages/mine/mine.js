Page({
  data: {
    userInfo:"",
    show:false
  },
  onShow: function () {
        var me=this;
        wx.getUserInfo({
          success: function (res) {
            var userInfo = res.userInfo;
            me.setData({
              userInfo: userInfo
            })
          }
        })
        
        wx.setNavigationBarTitle({
          "title": "我的"
        })
     



  },
  onShareAppMessage: function () {
    return {
      title: '微信商城',
      desc: '转发给微信好友获得代金券！',
      path: '/page/user?id=123'
    }
  },
  er:function(){
      this.setData({
        show:true
      })
  },
  back:function(){
    console.log("back")
    this.setData({
      show: false
    })
  }
  
})