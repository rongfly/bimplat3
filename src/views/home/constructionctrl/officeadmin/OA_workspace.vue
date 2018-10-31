<template>
    <div>
        <div class="">
            <el-input placeholder="请输入内容" v-model="searchgongwen" class="menu_list1_search">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <el-button>高级搜索</el-button>
        </div>
    </div>
</template>
<script>
  export default {
    name:'menu_list1',
    data(){
      return{
        searchgongwen: '',
      }
    }
  }
</script>
<style>
.menu_list1_search{
    width: 200px;
}
</style>