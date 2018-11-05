<template>
    <transition name="el-zoom-in-center">
        <div class="rightBar" v-show="isRightshow">
            <span @click="hideSide" class="hideSide">
                <i class="el-icon-close"></i>
            </span>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="未读信息" name="first">未读信息</el-tab-pane>
                <el-tab-pane label="待办事项" name="second">待办事项</el-tab-pane>
                <el-tab-pane label="已办事项" name="three">已办事项</el-tab-pane>
            </el-tabs>
        </div>
    </transition>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  computed: {
    isRightshow() {
      return this.$store.getters.isShowMethod;
    }
  },
  methods: {
    hideSide: function() {
      this.$store.dispatch("hideSideBar");
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped lang="scss">
.rightBar {
  position: fixed;
  right: 0;
  top: 60px;
  width: 300px;
  height: 100%;
  background: #ffffff;
  box-shadow: -5px 0px 10px #e0e0e0;
  padding: 20px 5px 5px;
}
.hideSide {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 20px;
  cursor: pointer;
}
.el-tabs__nav{
    width: 100%;
}
</style>
