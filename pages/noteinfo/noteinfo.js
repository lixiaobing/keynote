var util = require("../../util/util.js")

var app = getApp()
var user = app.getUser()

Page({
  data: {
    focus: false,
    inputValue: '',
    modalHidden: true,
  },
  onLoad:function(value){
    console.log("id:"+value.id);

     var item = user.getNote(value.id)
    console.log(item);
    this.setData({item:item});
  },
  formBindsubmit: function (e) {
      wx.navigateBack();
  },
  modalBindaconfirm: function (e) {
    this.setData({
      modalHidden: true
    })
  }
})



// {
//   id:
//   title:
//   account:
//   password:
//   note:
// }
