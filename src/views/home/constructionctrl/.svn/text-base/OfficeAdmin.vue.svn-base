<template>
  <div>
    <keep-alive>
      <iframe src="http://59.108.62.217/home.html" frameborder="0" class="office-admin" ref="iframe"
              name="ifm" id="ifm"></iframe>
    </keep-alive>
    <!--<el-button style="padding: 0"><a href="http://59.108.62.217/home.html" style="padding: 12px 20px;display: block" target="_blank">点击跳转OA</a></el-button>-->
  </div>
</template>
<script>
  export default {
    data () {
      return {
        usename: '',
        passwd: ''
      }
    },
    mounted () {
      var that = this
      that.iframeInit()
      window.onresize = () => {
        that.iframeInit()
      }
      window.addEventListener('message', e => {
        // 这里一定要对来源做校验
        if (e.origin === 'http://localhost:8080') {
          var data = JSON.parse(e.data)
          that.usename = data.usename
          that.passwd = data.passwd
          that.sendMsg1()
          // e.source可以是回信的对象，其实就是http://localhost:9099窗口对象(window)的引用
          // e.origin可以作为targetOrigin
          // e.source.postMessage(
          //   `我是[http://10.25.51.138/bimpt/]，我知道了兄弟，这就是你想知道的结果：${
          //     document.getElementById('app')
          //       ? '有id为app的Dom'
          //       : '没有id为app的Dom'
          //     }`,
          //   e.origin
          // )
        }
      })
    },
    methods: {
      iframeInit () {
        const iframe = this.$refs.iframe
        const clientHeight = document.documentElement.clientHeight - 90
        iframe.style.height = `${clientHeight - 14}px`
        if (iframe.attachEvent) {
          iframe.attachEvent('onload', () => {
            this.sendMsg()
          })
        } else {
          iframe.onload = () => {
            this.sendMsg()
          }
        }
      },
      sendMsg () {
        var data='{"usename":"adminsystem","passwd":"admin123"}'
        document.querySelector('#ifm').contentWindow.postMessage(data, 'http://10.25.51.138/bimpt/')
      },
      sendMsg1 () {
        var data1='{"usename":"adminsystem","passwd":"admin123"}'
        var data = JSON.parse(data1)
        console.log(data)
        console.log(this.usename+'-'+this.passwd)
        console.log('登陆去咯')
      }
    },
  }
</script>
<style>
  .office-admin {
    width: 100%;
    height: 100%;
    border: 0;
    overflow: hidden;
    box-sizing: border-box;
  }
</style>
