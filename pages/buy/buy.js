// pages/buy/buy.js
Page({

  /**
   * 页面的初始数据
   */
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
    carts:[],
    show:true,
    select:true,
    selectAllStatus:true,
    totalPrice:"",
    num:0
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

  /*
    生命周期函数--监听页面显示
   */
  onShow: function () {
    //从缓存中获取添加到购物车的商品列表
    wx.setNavigationBarTitle({
      "title": "购物车"
    })
    var me=this;
    var sgoods = this.data.goods;
    var sdata = new Array();
    for (var i = 0; i < sgoods.length; i++) {
      var sname = sgoods[i].sname
      var res=wx.getStorageSync(sname);
      sdata.push(res);
    }
    for(var i=0;i<sdata.length;i++){
      if (sdata[i] == "" || typeof (sdata[i]) == "undefined"){
        sdata.splice(i,1);
        i=i-1;
      }
    }
    this.setData({
      carts:sdata
    })
  //如果购物车没商品，则显示购物车为空
    if (this.data.carts.length>0){
      this.setData({
        show: false
      })
    }
    this.getTotalPrice();
  },
  //计算总价
  getTotalPrice:function(){
    var me=this;
    var carts = me.data.carts;//购物车商品列表
    var total = 0;
      for (var i = 0; i < carts.length; i++) {//遍历所有商品，如果为选中状态 就结算
        if (carts[i].selected) {
          total += (carts[i].num) * (carts[i].price);
        }
      }
      console.log(total)
      me.setData({
        carts: carts,
        totalPrice: total.toFixed(2)
      })
   
  },
  // 控制商品的选中状态
  selectList:function(e){
    var me=this;
      var index = e.currentTarget.dataset.index;
      console.log(index)
      var carts=this.data.carts;//购物车商品列表
      var selected = carts[index].selected;//获取当前商品的选中状态
      carts[index].selected = !selected;//改变选中状态
      this.setData({
        carts: carts
      });
      this.getTotalPrice(); //重新弄计算价格
      for (var i = 0; i < carts.length; i++) {
        if(!carts[i].selected){
          this.setData({
            selectAllStatus:false
          });
        }
      }
  },
  //控制全选或全不选的状态
  selectAll:function(e){
    var selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus;
    var carts = this.data.carts;
    for (var i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;            // 改变所有商品状态
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();                               // 重新获取总价
  },
  //增减商品数量
  addCount:function(e){
    var index = e.currentTarget.dataset.index;
    var carts = this.data.carts;
    var num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  minusCount:function(e){
    var index = e.currentTarget.dataset.index;
    var carts = this.data.carts;
    var num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  // 删除商品
  deleteList:function(e){
    var index = e.currentTarget.dataset.index;
    var carts = this.data.carts;
    carts.splice(index, 1);              // 删除购物车列表里这个商品
    this.setData({
      carts: carts
    });
    if (!carts.length) {                  // 如果购物车为空
      wx.clearStorage()
      this.setData({
        show: true,
        totalPrice:0.00             // 修改标识为false，显示购物车为空页面
      });

    } else {                              // 如果不为空
      this.getTotalPrice();           // 重新计算总价格
    }   
  },
  onShareAppMessage: function () {
    return {
      title: '微信商城',
      desc: '转发给微信好友获得代金券！',
      path: '/page/user?id=123'
    }
  },
  pay:function(){
    var totalPrice =parseInt(this.data.totalPrice);
    if (totalPrice==0){
      wx.showToast({
        title: '您未选中商品',
        duration: 2000
      })
    }
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
      },
      'fail': function (res) {
        wx.showToast({
          title: '支付失败',
          icon: 'loading',
          duration: 1000
        })
        var carts = this.data.carts;
        console.log(carts)
        wx.setStorageSync("list", carts)
      }
    })
    
   
  }
})