var util = require('../../util/util.js')
var user = getApp().getUser()
Page({
  data: {
    modalHidden: true
  },

  formBindsubmit: function (e) {
    var password = e.detail.value.password;
    if (util.isNone(password)) {
      this.setData({
        modalHidden: false
      })
    }else{
      
      user.setPassWord(util.md5(password));
      wx.navigateBack();
   
    }
  },
  modalBindaconfirm: function (e) {
    this.setData({
      modalHidden: true
    })
  },
  onLoad: function () {

  }
})




// wx.getStorageSync('logs') ||