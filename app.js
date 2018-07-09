//app.js
const PALETTE = require('/config/palette.js')
App({
  globalData: {
    usedColor: {}
  },
  onLaunch: function () {
    const randomNum = parseInt(Math.random() * PALETTE.COLOR_PALETTE.length)
    this.globalData.usedColor = PALETTE.COLOR_PALETTE[randomNum];
    console.log(wx.canIUse('setBackgroundColor'));
    wx.setBackgroundColor(this.globalData.usedColor.palette[0])
    console.log(this.globalData.usedColor);
  },

})