<template>
    <div class="OA">
        <!--<iframe src="http://59.108.62.217/home.html" frameborder="0" class="office-admin" ref="iframe"-->
        <!--name="ifm" id="ifm"></iframe>-->
        <!--<iframe src="http://123.56.7.142/?m=login" frameborder="0" class="office-admin" ref="iframe"-->
        <!--name="ifm" id="ifm"></iframe>-->
        <!--<el-button style="padding: 0"><a href="http://59.108.62.217/home.html" style="padding: 12px 20px;display: block" target="_blank">点击跳转OA</a></el-button>-->
        <div class="OA_aside">
            <el-menu
                    default-active=""
                    class="el-menu-vertical-demo OA_aside"
                    @open="handleOpen"
                    @close="handleClose"
                    @select="handleSelect">
                <el-menu-item index="">
                    <i class="iconfont icon-gongwenchaxun"></i>
                    <span slot="title">公文查询</span>
                </el-menu-item>
                <el-menu-item index="menu_list2">
                    <i class="iconfont icon-zhuanfawen"></i>
                    <span slot="title">发文管理</span>
                </el-menu-item>
                <el-menu-item index="menu_list3">
                    <i class="iconfont icon-shouwen"></i>
                    <span slot="title">收文管理</span>
                </el-menu-item>
                <el-menu-item index="menu_list4">
                    <i class="iconfont icon-qingjia"></i>
                    <span slot="title">请假销假</span>
                </el-menu-item>
                <el-menu-item index="menu_list5">
                    <i class="iconfont icon-baoxiao"></i>
                    <span slot="title">财务报销</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="OA-view">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        usename: '',
        passwd: '',
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
        if (e.origin === 'http://123.56.7.142') {
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
        var data = '{"usename":"adminsystem","passwd":"admin123"}'
        document.querySelector('#ifm').contentWindow.postMessage(data, 'http://123.56.7.142')
      },
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        console.log(key);
        var path='/construction/officeadmin/'+key
        this.$router.push({path: path});
      }
    },
  }
</script>
<style scoped lang="scss">
    /*.office-admin {*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*border: 0;*/
    /*overflow: hidden;*/
    /*box-sizing: border-box;*/
    /*}*/
    .OA {
        width: 100%;
        height: 100%;
        display: flex;
        padding: 5px;
    }

    .OA_aside {
        width: 200px;
        min-width: 200px;
        height: 100%;
    }
    .OA-view{
        width: 100%;
        margin-left: 5px;
    }
</style>
