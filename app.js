const user = require('./util/user.js')

App({
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  getUser: function(){
    return user;
  },
  globalData: {
    hasLogin: false,
    openid: null
  },
})
