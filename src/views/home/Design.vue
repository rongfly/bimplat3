<template>
<div class="list_tittle">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
    <el-menu-item :index="v.path" v-for="(v,index) in design" :key="index">{{v.label}}</el-menu-item>
  </el-menu>
  <div class="line">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: "design",
  data() {
    return {
      design: [
        { label: "设计协同系统", path: "/design" },
        { label: "BIM建模及应用", path: "/design/designmodel" },
        { label: "智能辅助设计", path: "/design/aidimensional" },
        { label: "公路项目安全性评价", path: "/design/safetyevaluation" },
        // { label: "BIM编码体系", path: "/design/codingsystem" },
        { label: "设计成果管理", path: "/design/achimanagement" }
      ],
      activeIndex: this.$route.path
    };
  },
  created() {
    var path=this.$route.path.split("/")
    var path2=path[2]?`/${path[2]}`:''
    this.activeIndex=`/${path[1]}`+path2
  },
  updated(){
    var path=this.$route.path.split("/")
    var path2=path[2]?`/${path[2]}`:''
    this.activeIndex=`/${path[1]}`+path2
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="scss">
.list_tittle {
  width: 100%;
  ul {
    display: flex;
    justify-content: space-around;
  }
}

a.router-link-exact-active {
  border-bottom: 2px solid #359fff;
  li {
    color: #359fff;
  }
}
.el-tabs__item {
  height: 100px;
}
  .line{
    width: 1200px;
    margin: 0 auto;
  }
</style>
