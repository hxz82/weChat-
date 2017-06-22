//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    banners: [
      {
        "pic_url": "http://img09.yiguoimg.com/e/ad/2016/160825/585749448986042649_800x400.jpg",
      },
      {
        "pic_url": "http://img14.yiguoimg.com/e/ad/2016/161010/585749449889390922_800x400.jpg",
      },
      {
        "pic_url": "http://img11.yiguoimg.com/e/ad/2016/160927/585749449690947899_800x400.jpg",
      },
      {
        "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160923/585749449636290871_800x400.jpg",
      },
      {
        "pic_url": "http://img13.yiguoimg.com/e/ad/2016/160914/585749449480315182_800x400.jpg",
      }
    ],
    goods:[
      {
        "id": 1007,
        "photo": "../imgs/goods (7).jpg",
        "price": "15.8",
        "sname": "石榴",
        "dis": "山东石榴1盒（500g/盒）",
        "num": 1,
        selected: true
      },
      {
        "id": 1008,
        "photo": "../imgs/goods (8).jpg",
        "price": "25.9",
        "sname": "柠檬",
        "dis": "三亚新柠檬1盒（500g/盒）",
        "num": 1,
        selected: true
      },
      {
        "id": 1009,
        "photo": "../imgs/goods (9).jpg",
        "price": "15.6",
        "sname": "青柠",
        "dis": "广州青柠1盒（500g/盒）",
        "num": 1,
        selected: true
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('首页加载完成')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShareAppMessage: function () {
    return {
      title: '微信商城',
      desc: '转发给微信好友获得代金券！',
      path: '/page/user?id=123'
    }
  },
  onShow:function(){
    wx.setNavigationBarTitle({
      "title": "乐购商城"
    })
  }
})
