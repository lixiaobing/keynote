//logs.js
var util = require('../../util/util.js')
Page({
  data: {
    logs: ["sad","bb"],
    array:["aa","bb","cc","aa","bb","cc"],
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'},
    objectArray: [
       {id: 5, unique: 'unique_5'},
      {id: 4, unique: 'unique_4'},
      {id: 3, unique: 'unique_3'},
      {id: 2, unique: 'unique_2'},
      {id: 1, unique: 'unique_1'},
      {id: 0, unique: 'unique_0'},
    ],
    numberArray: [1, 2, 3, 4]
  },
    addToFront: function(e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{id: length, unique: 'unique_' + length}].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function(e){
    this.data.numberArray = [ this.data.numberArray.length + 1 ].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  onLoad: function () {
    this.setData({
      logs: ["sad","bb","vv"].map(
        function (log) {
          console.log(log)
          return {title:"标题",accout:"神奇大象"}
          // return util.formatTime(new Date(log))
      })
    })
  }
})




// wx.getStorageSync('logs') ||