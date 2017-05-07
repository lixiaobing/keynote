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
    this.setData({ item: item, id: value.id });
  },

  onClickEdit: function (e) {
    wx.redirectTo({
      url: '../edit/edit?id=' + this.data.id
    })


  },
  onClickRemove: function (e) {
    user.removeNote(this.data.id);

    var pages = getCurrentPages()
    // console.log(pages);
    if (pages.length > 0) {
      if (pages[0].reLoad) {
        pages[0].reLoad()
      }
    }

    wx.navigateBack()
  }

})
