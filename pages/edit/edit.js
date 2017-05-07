var util = require("../../util/util.js")
var app  = getApp()
var user = app.getUser()
var saveData = util.saveData
Page({
  data: {
    focus: false,
    inputValue: '',
    modalHidden: true,
  },
  onLoad: function (value) {
    console.log("id:" + value.id);
    var item = user.getNote(value.id)
    console.log(item);
    this.setData({ item: item, id: value.id });
  },


  formBindsubmit: function (e) {
    console.log(e.detail.value.title);
    console.log(e.detail.value.account);
    console.log(e.detail.value.password);
    console.log(e.detail.value.note);

    if (e.detail.value.title.length == 0 || e.detail.value.account.length == 0) {
      // this.setData({
      //   tip:'提示：用户名和密码不能为空！',
      //   userName:'',
      //   psw:''
      // })
      this.setData({
        modalHidden: false
      });

    } else {

      
      this.data.item.title   = e.detail.value.title,
      this.data.item.account = e.detail.value.account,
      this.data.item.password= e.detail.value.password,
      this.data.item.note    = e.detail.value.note
      user.updateNote(this.data.item)

      var pages = getCurrentPages()
      console.log(pages)
      if (pages.length > 0) {
        if (pages[0].reLoad){
          pages[0].reLoad()
        }
      }

      wx.navigateBack()



    }

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
