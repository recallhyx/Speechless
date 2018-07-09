const color = require('./color.js')
const COLOR_PALETTE = [
  {
    colorName: 'red',
    palette: [
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFEBEE'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFCDD2'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#EF9A9A'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#E57373'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#EF5350'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#F44336'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#E53935'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#D32F2F'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#C62828'
      },
    ]
  },
  {
    colorName: 'pink',
    palette: [
      {
        frontColor: color.BLACK,
        backgroundColor: '#FCE4EC'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#F8BBD0'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#F48FB1'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#F06292'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#EC407A'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#E91E63'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#D81B60'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#C2185B'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#AD1457'
      },
    ]
  },
  {
    colorName: 'purple',
    palette: [
      {
        frontColor: color.BLACK,
        backgroundColor: '#F3E5F5'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#E1BEE7'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#CE93D8'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#BA68C8'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#AB47BC'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#9C27B0'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#8E24AA'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#7B1FA2'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#6A1B9A'
      },
    ]
  }, 
  {
    colorName: 'deepPurple',
    palette: [
      {
        frontColor: color.BLACK,
        backgroundColor: '#EDE7F6'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#D1C4E9'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#B39DDB'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#9575CD'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#7E57C2'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#673AB7'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#5E35B1'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#512DA8'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#4527A0'
      },
    ]
  }, 
  {
    colorName: 'indigo',
    palette: [
      {
        frontColor: color.BLACK,
        backgroundColor: '#E8EAF6'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#C5CAE9'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#9FA8DA'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#7986CB'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#5C6BC0'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#3F51B5'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#3949AB'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#303F9F'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#283593'
      },
    ]
  }, 
  {
    colorName: 'blue',
    palette: [
      {
        frontColor: color.BLACK,
        backgroundColor: '#E3F2FD'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#BBDEFB'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#90CAF9'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#64B5F6'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#42A5F5'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#2196F3'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#1E88E5'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#1976D2'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#1565C0'
      },
    ]
  }, 
  {
    colorName: 'lightBlue',
    palette: [
      {
        frontColor: color.BLACK,
        backgroundColor: '#E1F5FE'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#B3E5FC'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#81D4FA'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#4FC3F7'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#29B6F6'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#03A9F4'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#039BE5'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#0288D1'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#0277BD'
      },
    ]
  }, 
  {
    colorName: 'cyan',
    palette: [
      {
        frontColor: color.BLACK,
        backgroundColor: '#E0F7FA'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#B2EBF2'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#80DEEA'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#4DD0E1'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#26C6DA'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#00BCD4'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#00ACC1'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#0097A7'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#00838F'
      },
    ]
  }, 
  {
    colorName: 'teal',
    palette: [
      {
        frontColor: color.BLACK,
        backgroundColor: '#E0F2F1'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#B2DFDB'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#80CBC4'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#4DB6AC'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#26A69A'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#009688'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#00897B'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#00796B'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#00695C'
      },
    ]
  }, 
  {
    colorName: 'yellow',
    palette: [
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFFDE7'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFF9C4'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFF59D'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFF176'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFEE58'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFEB3B'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FDD835'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FBC02D'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#F9A825'
      },
    ]
  },
  {
    colorName: 'amber',
    palette: [
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFF8E1'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFECB3'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFE082'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFD54F'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFCA28'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFC107'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFB300'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFA000'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FF8F00'
      },
    ]
  },
  {
    colorName: 'orange',
    palette: [
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFF3E0'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFE0B2'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFCC80'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFB74D'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFA726'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FF9800'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FB8C00'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#F57C00'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#EF6C00'
      },
    ]
  },
  {
    colorName: 'deepOrange',
    palette: [
      {
        frontColor: color.BLACK,
        backgroundColor: '#FBE9E7'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFCCBC'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FFAB91'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FF8A65'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#FF7043'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#FF5722'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#F4511E'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#E64A19'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#D84315'
      },
    ]
  },
  {
    colorName: 'brown',
    palette: [
      {
        frontColor: color.BLACK,
        backgroundColor: '#EFEBE9'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#D7CCC8'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#BCAAA4'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#A1887F'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#8D6E63'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#795548'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#6D4C41'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#5D4037'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#4E342E'
      },
    ]
  },
  {
    colorName: 'grey',
    palette: [
      {
        frontColor: color.BLACK,
        backgroundColor: '#FAFAFA'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#F5F5F5'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#EEEEEE'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#E0E0E0'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#BDBDBD'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#9E9E9E'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#757575'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#616161'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#424242'
      },
    ]
  }, 
  {
    colorName: 'blueGrey',
    palette: [
      {
        frontColor: color.BLACK,
        backgroundColor: '#ECEFF1'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#CFD8DC'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#B0BEC5'
      },
      {
        frontColor: color.BLACK,
        backgroundColor: '#90A4AE'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#78909C'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#607D8B'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#546E7A'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#455A64'
      },
      {
        frontColor: color.WHITE,
        backgroundColor: '#37474F'
      },
    ]
  }
]
module.exports.COLOR_PALETTE = COLOR_PALETTE;