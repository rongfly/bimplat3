<template>
    <div class="tags-view-container">
        <scroll-pane class='tags-view-wrapper' ref='scrollPane'>
            <el-tag
                    ref='tag'
                    class="tags-view-item"
                    v-for="tag in Array.from(visitedViews)"
                    :key="tag.path"
                    closable
                    :disable-transitions="false"
                    @close="closeSelectedTag(tag)"
                    :class="$route.path==tag.path?'active':''">
                <router-link :to="tag.path" @contextmenu.prevent.native="openMenu(tag,$event)">
                    <i class="iconfont icon-xuanzhong" v-if="$route.path==tag.path"></i>
                    {{tag.title}}
                </router-link>
            </el-tag>

            <!--<router-link ref='tag' class="tags-view-item" :class="isActive(tag)?'active':''"-->
            <!--v-for="tag in Array.from(visitedViews)"-->
            <!--:to="tag.path" :key="tag.path" @contextmenu.prevent.native="openMenu(tag,$event)">-->
            <!--&lt;!&ndash;<transition name="el-zoom-in-center">&ndash;&gt;-->
            <!--{{tag.title}}-->
            <!--<span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'></span>-->
            <!--&lt;!&ndash;</transition>&ndash;&gt;-->
            <!--</router-link>-->
        </scroll-pane>
        <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
            <li @click="closeSelectedTag(selectedTag)">关闭当前页</li>
            <li @click="closeOthersTags">关闭其他页</li>
            <li @click="closeAllTags">关闭所有页</li>
        </ul>
        <el-button type="primary" class="head-button" @click="checkHead">
            <i style="font-size: 25px;color: #05b4fb" class="iconfont icon-shouqi" v-if="$store.state.headShow"></i>
            <i style="font-size: 25px;color: #05b4fb" class="iconfont icon-xiala" v-else></i>
            <!--<i style="display: inline-block;" class="iconfont" :class="['icon-icon-arrow-bottom2',$store.state.headShow?'icon_rotate_active':'icon_rotate_leave']"></i>-->
        </el-button>
    </div>
</template>

<script>
  import ScrollPane from '@/components/ScrollPane'

  export default {
    components: {ScrollPane},
    data () {
      return {
        visible: false,
        top: 0,
        left: 0,
        selectedTag: {}
      }
    },
    updated () {
      console.log(this.visitedViews)
    },
    computed: {
      visitedViews () {
        return this.$store.state.tagsView.visitedViews
      }
    },
    watch: {
      $route () {
        this.addViewTags()
        this.moveToCurrentTag()
      },
      visible (value) {
        if (value) {
          document.body.addEventListener('click', this.closeMenu)
        } else {
          document.body.removeEventListener('click', this.closeMenu)
        }
      }
    },
    mounted () {
      this.addViewTags()
    },
    methods: {
      // generateTitle, // generateTitle by vue-i18n
      generateRoute () {
        if (this.$route.name) {
          return this.$route
        }
        return false
      },
      isActive (route) {
        return route.path === this.$route.path || route.name === this.$route.name
      },
      addViewTags () {
        const route = this.generateRoute()
        if (!route) {
          return false
        }
        this.$store.dispatch('addVisitedViews', route)
      },
      moveToCurrentTag () {
        const tags = this.$refs.tag
        this.$nextTick(() => {
          for (const tag of tags) {
            if (tag.to === this.$route.path) {
              this.$refs.scrollPane.moveToTarget(tag.$el)
              break
            }
          }
        })
      },
      closeSelectedTag (view) {
        this.$store.dispatch('delVisitedViews', view).then((views) => {
          if (this.isActive(view)) {
            const latestView = views.slice(-1)[0]
            if (latestView) {
              this.$router.push(latestView.path)
            } else {
              this.$router.push('/')
            }
          }
        })
      },
      closeOthersTags () {
        this.$router.push(this.selectedTag.path)
        this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
          this.moveToCurrentTag()
        })
      },
      closeAllTags () {
        this.$store.dispatch('delAllViews')
        this.$router.push('/')
      },
      openMenu (tag, e) {
        this.visible = true
        this.selectedTag = tag
        this.left = e.clientX
        this.top = e.clientY
      },
      closeMenu () {
        this.visible = false
      },
      checkHead () {
        this.$store.state.headShow = !this.$store.state.headShow
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .tags-view-container {
        .tags-view-wrapper {
            background: #fff;
            height: 34px;
            border-bottom: 1px solid #d8dce5;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
        }
        .contextmenu {
            margin: 0;
            background: #fff;
            z-index: 2;
            position: fixed;
            list-style-type: none;
            padding: 5px 0;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 400;
            color: #333;
            box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
            li {
                margin: 0;
                padding: 7px 16px;
                cursor: pointer;
                &:hover {
                    background: #eee;
                }
            }
        }
    }

    .tags-view-item {
        height: 25px;
        line-height: 25px;
        margin-left: 5px;
        margin-top: 4px;
        cursor: pointer;
        background: #fff;
    }

    .el-tag.active {
        background: rgba(64, 158, 255, .3);;
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
