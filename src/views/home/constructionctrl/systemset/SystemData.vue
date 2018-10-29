<template>
  <div>
    <el-table
      :data="phoneList"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">
            <img :src="scope.row.headImage" alt="" class="avatar">
            <span>{{scope.row.name}}</span>
          </span>
        </template>
        <img :src="phoneList.headImage" alt="" class="avatar">
      </el-table-column>
      <el-table-column
        prop="job"
        label="职位"
        width="180">
      </el-table-column>
      <el-table-column
        prop="orgname"
        label="部门">
      </el-table-column>
      <el-table-column
        prop="telephone"
        label="电话">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'systemdata',
    data () {
      return {
        phoneList: [],
      }
    },
    created () {
      this.getphoneList()
    },
    methods: {
      getphoneList () {
        var that = this
        return that.request.getphoneList().then(function (response) {
            console.log(response)
            that.phoneList = response.list
          })
          .catch(function (error) {
            that.fetchError = error
          })
      }
    }
  }
</script>

<style scoped>
  .office-admin {
    width: 100%;
    height: 100%;
    border: 0;
    overflow: hidden;
    box-sizing: border-box;
  }
</style>
