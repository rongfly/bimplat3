<template>
  <div class="box">
    <div class="top_tittle">
      <h5 class="mune-title">设计资料管理</h5>
      <el-button>下载</el-button>
      <div class="search-box">
        <el-input
          :placeholder="condition|searchType"
          prefix-icon="el-icon-search"
          v-model="searchinfo">
        </el-input>
      </div>
      <el-dropdown trigger="click" @command="handleCommand" style="float: right;height: 40px;line-height: 40px;width: 130px;">
        <span class="el-dropdown-link">
          {{condition|searchName}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :command="item.value" v-for="item in condition1" :key="item.value">{{item.label}}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="mune">
      <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect" router
               style="text-align:center;width:150px">
        <el-menu-item :index="v.path" v-for="(v,index) in design" :key="index">{{v.label}}</el-menu-item>
      </el-menu>
    </div>
    <div class="children-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: this.$route.path,
        design: [
          {label: '设计图纸', path: '/design/achimanagement'},
          {label: '技术手册', path: '/design/achimanagement/manual'},
          {label: '国家标准', path: '/design/achimanagement/2'},
          {label: '地方标准', path: '/design/achimanagement/3'},
          {label: '三维模型', path: '/design/achimanagement/4'}
        ],
        condition1: [
          {label: '按文件名搜索', value: 0},
          {label: '按文件名搜索1', value: 1},
          {label: '按文件名搜索2', value: 2}
        ],
        condition: 0,
        searchinfo: '',
        command: ''
      }
    },
    methods: {
      handleCommand (command) {
        this.condition = command
      },
      conditionSelect () {
        console.log(this.condition)
      },
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped lang="scss">
  .box {
    position: relative;
  }

  .mune {
    position: absolute;
    left: 0;
    top: 62px;
    width: 150px;
  }

  .children-view {
    padding-left: 150px;
  }

  .mune-title {
    width: 150px;
    min-width: 150px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    margin-right: 20px;
    display: inline-block;
  }

  .top_tittle {
    height: 62px;
    padding: 10px 20px 10px 0;
    justify-content: space-between;
    border-bottom: 2px solid #ccc;
  }

  .search-box {
    width: 200px;
    display: inline-block;
    float: right;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
