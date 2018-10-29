<template>
    <div class="oview">
      <!--<iframe name="iframe1" src="http://10.25.100.224:8079/ProjectContent/MainContent/EmbeddedGis.aspx" style="width: 100%; height: 100%; border: 0; background: white;" ref="iframea"></iframe>-->
      <iframe name="iframe1" src="http://cesium.marsgis.cn/cesium-widget/index.html?config=config/demo-bim.json&tdsourcetag=s_pctim_aiomsg" style="width: 100%; height: 100%; border: 0; background: white;" ref="iframea"></iframe>
    </div>
</template>
<style>
  .oview{
    width: 100%;
    height: 99%;
  }
</style>
<script>
  export default {
    mounted () {
      var that = this
      that.iframeInit()
      window.onresize = () => {
        that.iframeInit()
      }
    },
    methods: {
      iframeInit () {
        const iframe = this.$refs.iframea
        const clientHeight = document.documentElement.clientHeight - 90
        iframe.style.height = `${clientHeight - 14}px`
        if (iframe.attachEvent) {
          iframe.attachEvent('onload', () => {
            // this.fullscreenLoading = false
          })
        } else {
          iframe.onload = () => {
            // this.fullscreenLoading = false
          }
        }
      },
    }
  }
</script>
