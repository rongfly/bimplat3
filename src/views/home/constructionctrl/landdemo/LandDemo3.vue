<template>
  <div>
    <iframe src="http://10.25.100.224:8079/HCCableLedger/CableLedgers.aspx" frameborder="0" class="office-admin" ref="iframe"
            name="ifm" id="ifm"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'landdemo2',
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
