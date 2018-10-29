<template>
  <div>
    <transition name="el-zoom-in-top">
      <div v-show="$store.state.headShow">
        <div class="bheader">
          <Logo/>
          <div class="login">
            <div class="mune">
              <router-link :to="tab.path" v-for="(tab,index) in tabs" :key="index">
                <div class="headerbox" @click="activeClick(index)" :class="{active:activePath===index}">{{tab.name}}
                </div>
              </router-link>
            </div>
            <router-link to="/userinfo">
              <img v-if="$store.state.user.userInfo.avatar" :src="$store.state.user.userInfo.avatar" alt="" class="avatar">
              <img v-else src="@/assets/img/avatar.png" alt="" class="avatar">
            </router-link>
            <div class="headerbox" @click="logout">
              退出
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import Logo from '@/components/Logo'

  export default {
    name: 'bheader',
    data () {
      return {
        activePath: '',
        tabs: [
          {
            path: '/',
            name: '项目主页'
          },
          {
            path: '/design',
            name: '设计管理'
          },
          {
            path: '/construction',
            name: '施工管理'
          }
        ]
      }
    },
    components: {
      Logo,
    },
    created () {
      var path = this.$route.path.split('/')[1]
      if (path == '') {
        this.activePath = 0
      } else if (path == 'design') {
        this.activePath = 1
      } else {
        this.activePath = 2
      }
    },
    methods: {
      activeClick (index) {
        this.activePath = index
        if (index == 2) {
          this.$store.state.linkList = [{icon: 'icon-xiangmuzonglan', link: '/construction', title: '项目总览'}]
        }
      },
      setCur: function (index) {
        // this.datas.map(function (v,i) {
        //   i==index? v.iscur=true: v.iscur=false;
        // });
        for (var i = 0; i < this.datas.length; i++) {
          if (index == this.datas[i].idcur) {
            this.datas[i].iscur = true
          } else {
            this.datas[i].iscur = false
          }
        }
      },
      logout () {
        this.$store.dispatch('FedLogOut').then(() => {
          location.reload()// In order to re-instantiate the vue-router object to avoid bugs
        })
      }
    }
  }
</script>
<style scoped>
  .login {
    font-size: 14px;
    color: #fff;
    display: flex;
  }

  .bheader {
    padding: 0 40px 0 20px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(45deg, #4b7dff, #05b4fb);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
  }

  div.cur {
    font-weight: bold;
  }

  .headerbox {
    height: 60px;
    /*border-radius: 50%;*/
    line-height: 40px;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    /*box-shadow: 0 5px 8px rgba(0,0,0,.125);*/
    color: #fff;
    font-size: 16px;
  }

  .headerbox:hover {
    font-weight: bold;
  }

  .user_message_header {
    width: 100%;
    height: 120px;
  }

  .el-badge__content {
    height: 14px;
    line-height: 14px;
    font-size: 12px;
  }

  .mune {
    display: flex;
  }

  .active {
    font-weight: bold
  }

  .avatar {
    width: 38px;
    height: 38px;
    margin: 8px;
    border-radius: 50%;
    box-shadow: 0 3px 5px rgba(0, 0, 0, .125);
  }
</style>
