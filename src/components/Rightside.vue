<template>
    <transition name="el-zoom-in-center">
        <div class="rightBar" v-show="isRightshow">
            <span @click="hideSide" class="hideSide">
                <i class="el-icon-close"></i>
            </span>

        </div>
    </transition>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    isRightshow() {
      return this.$store.getters.isShowMethod;
    }
  },
  methods: {
    hideSide: function() {
      this.$store.dispatch("hideSideBar");
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
  box-shadow: 5px 0px 10px #e0e0e0 inset;
  padding: 20px 5px 5px
}
.hideSide{
    position: absolute;
    right: 0;
    top: 0;
    font-size: 20px;
    cursor: pointer;
}
</style>
