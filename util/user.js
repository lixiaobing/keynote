var util = require('util.js')

var KEY_NOTE_NAME = "keyNoteName";

module.exports = exports = {};

var keyNoteData = {
    password: null,
    items: []
}

function clean() {
    keyNoteData.password = null;
    keyNoteData.items = [];
    saveData();
}

//获取名称
function getKeyNoteName() {
    var keyNoteName = wx.getStorageSync(KEY_NOTE_NAME);
    console.log("keyNoteName:" + keyNoteName);
    return keyNoteName
}
//保存
function setKeyNoteName(keyNoteName) {
    wx.setStorageSync(KEY_NOTE_NAME, "" + keyNoteName);
}
//是否存在
function isExistKeyNote() {
    var keyNoteName = getKeyNoteName();
    if (util.isNone(keyNoteName)) {
        return false;
    }
    return true;
}

//load data from storage 
function loadData() {
    var keyNoteName = getKeyNoteName();
    //没有历史记录
    if (util.isNone(keyNoteName)) {
        console.log("无记录");
        return;
    }
    var data = wx.getStorageSync(keyNoteName);
    if (util.isNone(data)) {
        console.log("keyNote " + keyNoteName + " no data exists ");
        clean();
    } else {
        keyNoteData = data;
    }
}

function saveData() {
    var keyNoteName = getKeyNoteName();
    //没有历史记录
    if (util.isNone(keyNoteName)) {
        console.log("keyNoteName is null");
        return;
    }
    //save
    wx.setStorageSync(keyNoteName, keyNoteData);
}


function getPassWord() {
    console.log("get password=" + keyNoteData.password);
    return keyNoteData.password;
}
function setPassWord(password) {
    console.log("set password=" + password);
    keyNoteData.password = password;
    saveData();
}

function getItems(password) {
    return keyNoteData.items;
}


//新增一条
function addNote(note) {
    keyNoteData.items.unshift(note);
    saveData();
}
//删除一条
function removeNote(id) {
    var item
    var items = keyNoteData.items;
    for (var index = 0; index < items.length; index++) {
        item = items[index]
        if (item.id == id) {
            items.splice(index, 1);
            break;
        }
    }
    saveData();
}
//修改
function updateNote(note) {
    var items = keyNoteData.items
    for (var index = 0; index < items.length; index++) {
        if (items[index].id == note.id) {
            items[index] = note
            break;
        }
    }
    saveData();
}


function encryNote(item) {

    return item
}

function decryptNote(item) {

    return item
}

function getNote(id){
    var item;
    var items = keyNoteData.items;
    for (var index = 0; index < items.length; index++) {
        item = items[index]
        if (item.id == id) {
    
            return item;
        }
    }
    return null;
}


exports.setKeyNoteName = setKeyNoteName;
exports.getKeyNoteName = getKeyNoteName;
exports.setPassWord = setPassWord;
exports.getPassWord = getPassWord;
exports.getItems = getItems;
exports.loadData = loadData;
exports.addNote = addNote
exports.removeNote = removeNote
exports.updateNote = updateNote

exports.getNote = getNote

//本地的所有keynotename 要做记录，不然多账户切换，并且数据没有同步到远程的话可能会导致出数据丢失