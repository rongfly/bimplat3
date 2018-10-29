<template>
  <div class="messagelist">
    <el-container style="height:100%;">
      <el-aside style="width:auto;background: #545c64" class="u_scrollBar">
        <Aside></Aside>
      </el-aside>
      <el-main class="u_scrollBar">
        <div class="min-title">
          <div class="min-title-box" @wheel.prevent="handleScroll" ref="scrollContainer">
            <div class="min-title-inner" ref="scrollWrapper" :style="{left: left + 'px'}">
              <el-tag
                :key="index"
                v-for="(tag,index) in $store.state.linkList"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)"
                :class="$route.path==tag.link?'active':''">
                <router-link :to="tag.link">
                  <i class="iconfont icon-xuanzhong" v-if="$route.path==tag.link"></i>
                  {{tag.title}}
                </router-link>
              </el-tag>
            </div>
          </div>
          <el-button type="primary" class="head-button" @click="checkHead">
            <i style="font-size: 25px;color: #05b4fb" class="iconfont icon-shouqi" v-if="$store.state.headShow"></i>
            <i style="font-size: 25px;color: #05b4fb" class="iconfont icon-xiala" v-else></i>
            <!--<i style="display: inline-block;" class="iconfont" :class="['icon-icon-arrow-bottom2',$store.state.headShow?'icon_rotate_active':'icon_rotate_leave']"></i>-->
          </el-button>
        </div>
        <div style="width: 100%;height: 100%;padding: 36px 5px 5px;">
          <!--<keep-alive>-->
            <router-view></router-view>
          <!--</keep-alive>-->
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import menu from '@/assets/json/data'
  import Aside from '@/components/Aside'
  import { valueObj } from '@/utils'

  export default {
    data () {
      return {
        inputVisible: false,
        inputValue: '',
        left: 0
      }
    },
    created () {
      console.log(menu.data)
      this.$store.state.linkList = [valueObj(this.$route.path, menu.data)]
      console.log(this.$route.path)
      console.log(this.$store.state.linkList)
    },
    methods: {
      handleScroll (e) {
        console.log(e)
        const eventDelta = e.wheelDelta || -e.deltaY * 3
        const $container = this.$refs.scrollContainer
        const $containerWidth = $container.offsetWidth
        const $wrapper = this.$refs.scrollWrapper
        const $wrapperWidth = $wrapper.offsetWidth
        if (eventDelta > 0) {
          this.left = Math.min(0, this.left + eventDelta)
        } else {
          if ($containerWidth - 15 < $wrapperWidth) {
            if (this.left < -($wrapperWidth - $containerWidth + 15)) {
              this.left = this.left
            } else {
              this.left = Math.max(this.left + eventDelta, $containerWidth - $wrapperWidth - 15)
            }
          } else {
            this.left = 0
          }
        }
      },
      checkHead () {
        this.$store.state.headShow = !this.$store.state.headShow
      },
      handleClose (tag) {
        console.log(tag)
        this.$store.state.linkList.splice(this.$store.state.linkList.indexOf(tag), 1)
        if (tag.link == this.$route.path) {
          if (this.$store.state.linkList.length == 0) {
            this.$store.state.linkList.push({icon: 'icon-xiangmuzonglan', link: '/construction', title: '项目总览'})
          }
          this.$router.push({path: this.$store.state.linkList[this.$store.state.linkList.length - 1].link})
        }
      },
    },
    components: {
      Aside
    },
  }
</script>

<style lang="scss" scoped>
  .messagelist {
    width: 100%;
    height: 100%;
  }

  .el-main {
    padding: 0;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .el-tag {
    height: 25px;
    line-height: 25px;
    margin-left: 5px;
    cursor: pointer;
    background: #fff;
  }

  .el-tag.active {
    background: rgba(64, 158, 255, .3);;
  }

  .min-title {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    border-bottom: 1px solid #d8dce5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 36px;
    padding-right: 30px;
    .min-title-box {
      padding: 5px;
      height: 36px;
      white-space: nowrap;
      overflow: hidden;
      position: relative;
      .min-title-inner {
        position: absolute;
      }
    }
  }

  .head-button {
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0;
    border: none;
    padding: 0;
    background: transparent;
  }
</style>

