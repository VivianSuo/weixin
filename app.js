App({
  onLaunch:function(options){
    console.log(this.globalValue.userInfo);
    console.log('onLaunch',options)
  },
  onShow: function (options){
    console.log(this.globalValue.name);
    console.log('onShow', options)
  },
  onHide:function(){
    console.log('进入后台中。。。')
  },
  globalValue:{
    name:'app',
    userInfo:"product"
  }
})