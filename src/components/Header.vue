<template>
    <div>
        <transition name="el-zoom-in-top">
            <div v-show="$store.state.headShow">
                <div class="bheader">
                    <Logo/>
                    <div class="block">
                        <el-color-picker
                                v-model="themecolor"
                                size="mini"
                                @active-change="activeChange"
                                @change="change"
                        ></el-color-picker>
                    </div>
                    <div class="login">
                        <div class="mune">
                            <router-link :to="tab.path" v-for="(tab,index) in tabs" :key="index">
                                <div
                                        class="headerbox"
                                        @click="activeClick(index)"
                                        :class="{active:activePath===index}"
                                >{{tab.name}}
                                </div>
                            </router-link>
                        </div>
                        <div class="user_oper_region">
                            <div class="right-radius" @click="showSide">
                                <el-badge :value="bellNum" :hidden="isbell">
                                    <i class="iconfont icon-tishi" style="font-size:20px;margin: 0 auto"></i>
                                </el-badge>
                            </div>
                            <div class="right-radius">
                                <router-link to="/roles">
                                    <i class="iconfont icon-quanxianshezhi"
                                       style="font-size:20px;margin: 0 auto;line-height: 38px"></i>
                                </router-link>
                            </div>
                        </div>
                        <el-dropdown>
                            <img
                                :src="$store.state.user.userInfo.headImage"
                                alt=""
                                class="avatar right-radius"
                            >
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <router-link to="/userinfo">
                                        个人信息
                                    </router-link>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <div @click="logout">退出</div>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>

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
        bellNum: 0,
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
        ],
        themecolor: '#409EFF',
        activeColor: ''
      }
    },
    components: {
      Logo
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
          this.$store.state.linkList = [
            {
              icon: 'icon-xiangmuzonglan',
              link: '/construction',
              title: '项目总览'
            }
          ]
        }
      },
      logout () {
        this.$store.dispatch('LogOut').then(() => {
          location.reload() // In order to re-instantiate the vue-router object to avoid bugs
        })
      },
      activeChange (val) {
        this.activeColor = val
      },
      change (val) {
        this.themecolor = val
      },
      showSide () {
        this.$store.dispatch('showSideBar')
      },
    },
    computed: {
      isbell () {
        return this.bellNum ? false : true
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
        font-weight: bold;
    }

    .right-radius {
        font-size: 22px;
        text-align: center;
        cursor: pointer;
        width: 38px;
        height: 38px;
        background-color: #fff;
        border-radius: 19px;
        color: #4ba3d9;
        margin: 12px 8px 0;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .125);
        transition: all .25s linear;
    }

    .right-radius:hover {
        box-shadow: 0 5px 8px rgba(0, 0, 0, .3);
    }

    .user_oper_region {
        display: flex;
    }
</style>
