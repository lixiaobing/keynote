var MD5 = require("md5.js")
var AES = require("aes.js")

function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }

  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  var second = time

  return ([hour, minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}

function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}



var date = new Date()

function getTime() {
  return date.getTime()
}

function getTimeString() {

  return "" + getTime()
}


function saveData(data) {
  var exsit = false;
  var dataList = wx.getStorageSync('datalist');
  if (dataList === null || dataList === "") {
    console.log("dataList is null");
    dataList = [];
  }
  console.log(dataList);
  //遍历看数据是否已经存在
  for (var i = 0; i < dataList.length; i++) {
    if (dataList[i].id === data.id) {
      dataList[i] = data;
      exsit = true;
    }
  }
  if (exsit === false) {
    dataList.push(data);
  }
  wx.setStorageSync('datalist', dataList);
}

//读取数据
function getData() {
  var dataList = wx.getStorageSync('datalist1')
  console.log("getDatalist")
  console.log(dataList)
  if (dataList === null || dataList === "") {
    dataList = []
  }
  return dataList;
}

//获取主密码
function getMainPass() {
  var dataList = wx.getStorageSync('datalist')
  console.log("getDatalist")
  console.log(dataList)
  if (dataList === null || dataList === "") {
    dataList = []
  }
  return dataList;
}
/*
{
mainPassMd5:   //主密码


}
*/

function isNULL(value) {
  return value === null || value === undefined || value === '';
}


function encrypt(word, key) {
  return AES.Ctr.encrypt(word, key, 128);
}
function decrypt(word, key) {
  return AES.Ctr.decrypt(word, key, 128);
}


module.exports = {
  formatTime: formatTime,
  formatLocation: formatLocation,
  getTime: getTime,
  getTimeString: getTimeString,
  saveData: saveData,
  getData: getData,
  isNone: isNULL,
  md5: MD5.md5,
  encrypt: encrypt,
  decrypt: decrypt
}


// function formatTime(date) {
//   var year = date.getFullYear()
//   var month = date.getMonth() + 1
//   var day = date.getDate()

//   var hour = date.getHours()
//   var minute = date.getMinutes()
//   var second = date.getSeconds()


//   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

// function formatNumber(n) {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }
