// pages/detail/detail.js
Page({
  data: {
    goods: [
      {
        "id": 1001,
        "photo": "../imgs/goods (1).jpg",
        "price": "22.3",
        "sname": "椰子",
        "dis": "三亚椰子2个（204g/个）",
        "num": 1,
        selected: true
      },
      {
        "id": 1002,
        "photo": "../imgs/goods (2).jpg",
        "price": "11.8",
        "sname": "杨梅",
        "dis": "云南杨梅1盒（500g/盒）",
        "num": 1,
        selected: true
      },
      {
        "id": 1003,
        "photo": "../imgs/goods (3).jpg",
        "price": "32.2",
        "sname": "奇异果",
        "dis": "新西兰奇异果1盒（500g/盒）",
        "num": 1,
        selected: true
      },
      {
        "id": 1004,
        "photo": "../imgs/goods (4).jpg",
        "price": "25.0",
        "sname": "芒果",
        "dis": "泰国香芒1盒（500g/盒）",
        "num": 1,
        selected: true
      },
      {
        "id": 1005,
        "photo": "../imgs/goods (5).jpg",
        "price": "18.8",
        "sname": "荔枝",
        "dis": "广州荔枝1盒（500g/盒）",
        "num": 1,
        selected: true
      },
      {
        "id": 1006,
        "photo": "../imgs/goods (6).jpg",
        "price": "36.6",
        "sname": "樱桃",
        "dis": "山东大樱桃1盒（500g/盒）",
        "num": 1,
        selected: true
      },
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
      },
      {
        "id": 1010,
        "photo": "../imgs/goods (10).jpg",
        "price": "22.5",
        "sname": "菠萝",
        "dis": "台北菠萝1盒（500g/盒）",
        "num": 1,
        selected: true
      },
      {
        "id": 1011,
        "photo": "../imgs/goods (11).jpg",
        "price": "44.5",
        "sname": "蓝莓",
        "dis": "山东蓝莓1盒（500g/盒）",
        "num": 1,
        selected: true
      },
      {
        "id": 1012,
        "photo": "../imgs/goods (12).jpg",
        "price": "43.8",
        "sname": "火龙果",
        "dis": "三亚火龙果1盒（500g/盒）",
        "num": 1,
        selected: true
      }
    ],
    good:[],
    gwcgood:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sid = options.id
    var sgoods=this.data.goods;
    for(var i=0;i<sgoods.length;i++){
      if(sgoods[i].id==sid){
        var arr=[];
        arr.push(sgoods[i]);
        this.setData({
          good:arr
        })
      }
    }
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
  
  },
  // 减少数量
  reduce:function(){
    var newgood = this.data.good;
    var num = newgood[0].num;
    if(num>1){
      num-=1;
      newgood[0].num = num
      // console.log(newgood.num)
      this.setData({
        good: newgood
      })
    }
  },
  // 增加数量
  add:function(){
    var newgood=this.data.good;
    var num = newgood[0].num;
      num += 1;
      newgood[0].num = num
      this.setData({
        good:newgood
      })
  },
  // 商品加入购物车
  jiaru:function(e){
    var me = this;
    var arr=this.data.good[0];
    var sname=this.data.good[0].sname;
     wx.setStorage({
       key: sname,
       data:arr,
     })
     wx.showToast({
       title: '成功加入购物车',
       icon: 'success',
       duration: 2000
     })
  },
  onShareAppMessage: function () {
    return {
      title: '微信商城',
      desc: '转发给微信好友获得代金券！',
      path: '/page/user?id=123'
    }
  }
})