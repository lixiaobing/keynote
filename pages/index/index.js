//index.js
var util = require('../../util/util.js')
var config = require('../../config.js')
var self = null;
var app = getApp()
var user = app.getUser()

function testAes() {
  var text = util.encrypt("wo shi yi ge dachuiaaaaaa ", "1111111111");
  console.log('text=' + text);
  text = util.decrypt(text, "1111111111");
  console.log('text=' + text);
}

//授权登陆
function auth() {
  console.log(config.authURL);
  wx.login({
    success: function (res) {
      console.log(res)
      if (res.code) {
         console.log("发起网络请求");
        //发起网络请求
        wx.request({
          url: config.authURL,
          data: {
            code: res.code
          },

          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            console.log("auth success", res.data)
            var openid = res.data.openid;
            var keyNoteName = user.getKeyNoteName();
            console.log("openid", openid);
            console.log("keyNoteName", keyNoteName);
            if (keyNoteName !== openid && !util.isNone(openid)) {
              user.setKeyNoteName(res.data.openid)
              user.loadData()
              self.setData({ list: user.getItems() })
            }
          }
        }
        )

      } else {
        console.log('获取用户登录态失败！' + res.errMsg)
      }
    }
  });

}

Page({
  data: {
    motto: 'Hello World',
    list: []
  },
  onclick: function (event) {
    console.log("....................")
    var id = event.currentTarget.id;
    console.log(id);
    wx.navigateTo({
      url: '../noteinfo/noteinfo?id=' + id
    })
  },
  eventAddKey: function () {

    console.log(".........eventAddKey..........."+user.getKeyNoteName())
    //是否已经登陆
    if (!util.isNone(user.getKeyNoteName())) {
      //是否设置主密码
      if (util.isNone(user.getPassWord())) {
        //提示设置主密码
        wx.navigateTo({
          url: '../mainkey/mainkey'
        })
      } else {
        wx.navigateTo({
          url: '../addkey/addkey'
        })
      }
    }else{
       console.log(".........eventAddKey.xxx..........")
    }

  },
  reLoad: function () {
    self.setData({ list: user.getItems() })
  },

  onLoad: function () {
    console.log('onLoad')
    self = this
    //载入历史数据
    user.loadData()
    self.setData({ list: user.getItems() })

    wx.getNetworkType({
      success: function (res) {
        if (res.networkType === 'none') {
          console.log("没有网络")
        } else {
          auth()
        }
      }
    })
  },
  onShareAppMessage: function () {

  }
})
