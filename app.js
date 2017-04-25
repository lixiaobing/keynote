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
  data: {
  },
})


/*
一基础功能
1.主列表
2.设置主密码
3.新增
5.查看
6.修改
二高级功能
1.同步到远程
2.从远程同步到本地
3.多账户/账户切换
*/