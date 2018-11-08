<template>
  <div class="messagelist">
    <el-container style="height:100%;">
      <el-aside style="width:auto;background: #545c64" class="u_scrollBar">
        <Aside></Aside>
      </el-aside>
      <el-main class="u_scrollBar">
          <TagsView></TagsView>
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
  import Aside from '@/components/Aside'
  import TagsView from './TagsView'
  import { valueObj } from '@/utils'

  export default {
    data () {
      return {
      }
    },
    created () {
    },
    methods: {
    },
    components: {
      Aside,
      TagsView
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

</style>

