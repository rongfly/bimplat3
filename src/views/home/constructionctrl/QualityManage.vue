<template>
  <div>
    <iframe src="http://10.25.100.224:8079/HCQuality/Acceptance/Acceptance.aspx" frameborder="0" class="office-admin" ref="iframe"
            name="ifm" id="ifm"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'qualitymanage',
    mounted () {
      var that = this
      that.iframeInit()
      window.onresize = () => {
        that.iframeInit()
      }
    },
    methods: {
      iframeInit () {
        const iframe = this.$refs.iframe
        const clientHeight = document.documentElement.clientHeight - 90
        iframe.style.height = `${clientHeight - 14}px`
        // if (iframe.attachEvent) {
        //   iframe.attachEvent('onload', () => {
        //     this.sendMsg()
        //   })
        // } else {
        //   iframe.onload = () => {
        //     this.sendMsg()
        //   }
        // }
      },
    }
  }
</script>

<style scoped>
  .office-admin {
    width: 100%;
    height: 100%;
    border: 0;
    overflow: hidden;
    box-sizing: border-box;
  }
</style>
