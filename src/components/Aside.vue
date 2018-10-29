<template>
  <div class="aside">
    <transition name="el-fade-in-linear">
      <div class="aside_title" v-show="!isCollapse" :class="this.$store.state.headShow?'':'active'">
        施工管理
      </div>
    </transition>
    <div @click="checkFlage" class="aside_flage">
      <span v-if="isCollapse" class="iconfont">&#xe648;</span>
      <span v-else class="iconfont">&#xe652;</span>
    </div>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          :default-active="route"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          :collapse="isCollapse"
          :unique-opened="true"
          @select="handleSelect"
          active-text-color="#ffd04b">
          <div v-for="(n,i) in menu" :key="i">
            <!--有路由的爷爷-->
            <router-link :to="n.link" v-if="n.link">
              <el-menu-item :index="n.link" @click="selectLink(n)">
                <i class="iconfont" :class="n.icon"></i>
                <span slot="title">{{n.title}}</span>
              </el-menu-item>
            </router-link>
            <!--没路由的爷爷，但是有爸爸-->
            <el-submenu :index="''+i" v-else>
              <template slot="title">
                <i class="iconfont" :class="n.icon"></i>
                <span slot="title" v-if="!isCollapse">{{n.title}}</span>
              </template>
              <el-menu-item-group>
                <!--循环爸爸-->
                <div v-for="(m,j) in n.children_node" :key="j">
                  <!--有路由的爸爸-->
                  <router-link :to="m.link" v-if="m.link">
                    <el-menu-item :index="m.link" @click="selectLink(m)">
                      <i class="iconfont" :class="m.icon"></i>
                      {{m.title}}
                    </el-menu-item>
                  </router-link>
                  <!--没路由的爸爸-->
                  <el-submenu :index="''+i+'-'+j" v-else>
                    <span slot="title">{{m.title}}</span>
                    <div v-for="(p,k) in m.children_node" :key="k">
                      <router-link :to="p.link" v-if="p.link">
                        <el-menu-item :index="p.link" @click="selectLink(p)">
                          <i class="iconfont" :class="p.icon"></i>
                          {{p.title}}
                        </el-menu-item>
                      </router-link>
                    </div>
                  </el-submenu>
                </div>
              </el-menu-item-group>
            </el-submenu>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import menu from '@/assets/json/data'
  import { arrayQC } from '@/utils'

  export default {
    data () {
      return {
        isCollapse: false,
        menu: menu.data
      }
    },
    methods: {
      checkFlage () {
        this.isCollapse = !this.isCollapse
        let a = document.querySelectorAll('.el-submenu__icon-arrow')
        a.forEach(v => (v.style.display = 'none'))
        console.log(a)
      },
      handleOpen (key, keyPath) {
        console.log(key + '------' + keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key + '------' + keyPath)
      },
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      selectLink (n) {
        console.log(n)
        // this.$store.state.linkList.push(n)
        console.log(arrayQC(this.$store.state.linkList, n))
        // this.$store.state.linkList=arrayQC(this.$store.state.linkList,n)
        // this.$store.state.linkList.push(n)
      }
    },
    computed: {
      route () {
        return this.$route.path
      }
    },
  }
</script>
<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .aside {
    position: relative;
    padding-top: 60px;
  }

  .el-menu {
    border-right: none;
  }

  .aside_flage {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #409eff;
    cursor: pointer;
    text-align: center;
    line-height: 30px;
    position: absolute;
    right: 20px;
    top: 15px;
    color: #fff;
  }

  .aside_flage:hover {
    background: #66b1ff;
  }

  .el-icon-arrow-right {
    display: none;
  }

  .aside_title {
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 60px;
    padding-left: 40px;
    line-height: 60px
  }

  .aside_title.active {
    background: rgba(64, 158, 255, .3);;
  }
</style>
