//index.js
//获取应用实例
const util = require('../../utils/util.js')
const PALETTE = require('../../config/palette.js')
const app = getApp()

Page({
  data: {
    animationData: {},
    COLOR: {},
    inputValue: '',
    tagArray: [],
    fromColor: '',
    toColor: '',
  },
  addTag: function (e){
    if(!e.detail.value.trim()){
      console.log('trim');
      return;
    }
    if (this.data.tagArray.length >=8){
      wx.showToast({
        title: '最多8个关键字',
        icon: 'none',
        duration: 1500
      })
      return ;
    }
    this.data.tagArray.push({
      text:e.detail.value,
      index: this.data.tagArray.length+1,
      color: this.data.COLOR[this.data.tagArray.length+1]
    });
    this.setData({
      tagArray: this.data.tagArray,
      inputValue: '',
      toColor: this.data.COLOR[this.data.tagArray.length].backgroundColor
    })


  },
  clear: function(){
    this.data.tagArray = [];
    this.setData({
      tagArray: this.data.tagArray,
      toColor: this.data.COLOR[0].backgroundColor
    })
  },
  destoryTag: function(e){
    let index = e.detail.index;
    console.log(index,this.data.tagArray[index]);
    for (var i = this.data.tagArray.length; i > index; i--) {
      var temp = this.data.tagArray[i - 1].color;
      this.data.tagArray[i - 1].color = this.data.tagArray[i - 2].color;
      this.data.tagArray[i - 2].color = temp;
      var tmp = this.data.tagArray[i-1].index;
      this.data.tagArray[i - 1].index = this.data.tagArray[i - 2].index;
      this.data.tagArray[i - 2].index = temp;
    }
    this.data.tagArray.splice(index-1,1);
    this.setData({
      tagArray: this.data.tagArray,
      toColor: this.data.COLOR[this.data.tagArray.length].backgroundColor
    })
  },
  query: function(){
    if(this.data.tagArray.length === 0){
      wx.showToast({
        title: '您未添加关键词哦',
        icon: 'none',
        duration: 1500
      })
      return;
    }
    
  },
  onLoad: function () {    
    this.data.COLOR = app.globalData.usedColor.palette;
    let bgColor = app.globalData.usedColor.palette[0].backgroundColor;
    this.data.fromColor = this.data.toColor = this.data.COLOR[0].backgroundColor;
    console.log(bgColor);
    this.setData({
      pageBackgroundColor: '#ffffff',
      fromColor: this.data.fromColor,
      toColor: this.data.toColor,
    });
  },

})
