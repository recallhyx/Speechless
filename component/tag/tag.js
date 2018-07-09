Component({
  properties: {
    color: {
      type: Object,
    },
    text: {
      type: String,
    },
    index: {
      type: Number,
    }
  },
  methods: {
    destory(){
      this.triggerEvent('destory',{index:this.properties.index})
    },
  },
})