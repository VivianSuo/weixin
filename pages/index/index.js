// pages/index/index.js
const add = require('./add.js');
var global = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'Nihao',
    a:1,
    b:20,
    show:false,
    array:[
      {id:1,value:"ddd"},
      {id:3,value:"eee"},
      {id:2,value:"fff"},
      {id:4,value:"sss"}
    ],
    objectArray:[
      {id:1,unique:'un1'},
      {id:2,unique:'un2'},
      {id:3,unique:'un3'},
      {id:4,unique:'un4'},
      {id:5,unique:'un5'},
    ],
    numberArray:[1,3,4,5],
    item:{
      index:100,
      msg:'我想说',
      time:'2019-5-24'
    },
    log:'我是log',
    color:"#00f0ff",
    propa:"我是propa",
    propb:"我是propb"
  },
  switch:function(e){
    const len = this.data.objectArray.length;
    this.data.objectArray.forEach(()=>{
      var x = Math.floor(Math.random()*len);
      var y = Math.floor(Math.random()*len);
      [this.data.objectArray[x], this.data.objectArray[y]] = [this.data.objectArray[y], this.data.objectArray[x]];
      this.setData({
        objectArray:this.data.objectArray
      })
    })
  },
  addToFront:function(e){
    console.log(e);
    const len = this.data.objectArray.length;
    this.data.objectArray = [{id:len,unique:'unique'+len}].concat(this.data.objectArray);
    this.setData({
      objectArray:this.data.objectArray
    })
    add.sayHello()
  },
  addNumberFront:function(e){
    this.data.numberArray = [this.data.numberArray.length].concat(this.data.numberArray);
    this.setData({
      numberArray:this.data.numberArray
    })
    add.sayGoodbye()
    
    console.log(global.globalValue.name)
    wx.navigateTo({ url:"../shop/index?key=11$id=1",success(data){
      console.log(data)
    },fail(err){
      console.log(err)
    },complete(a){
      console.log(a)
    }})
  },
  get_emit(e){
    console.log(e)
    
    this.setData({
      propa:"我变了"+e.detail
    })
  },
  gang(){
    // selectComponent的参数是一个id需要加#
    this.selectComponent('#tag')._show();
  },
  maopao:function(e){
    console.log(e)
  },
  onShareAppMessage: function () {
    return {
      title: "自定义转发的标题",
      path: "/pages/shop/index"
    }
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