var util = require("../../util/util.js")
var app = getApp()
var user = app.getUser()

Page({
  data: {
  },
  onLoad: function (value) {
    console.log("id:" + value.id);
    var item = user.getNote(value.id)
    console.log(item);
    this.setData({ item: item, id: id });
  },

  formBindsubmit: function (e) {
    wx.navigateBack();
  },
  onClickEdit: function (e) {
    wx.navigateTo({
      url: '../edit/edit?id=' + this.data.id
    })
  }

})
