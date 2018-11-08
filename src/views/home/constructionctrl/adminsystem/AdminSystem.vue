<template>
  <div>
    <div class="adminsystem">
      <el-tree :data="orglist" :props="defaultProps" @node-click="getOrgPhoneList" style="min-width: 220px"></el-tree>
      <div class="phoneList">
        <el-table
          :data="phoneList"
          style="width: 100%">
          <el-table-column
            fixed
            prop="name"
            label="姓名"
            width="180">
            <template slot-scope="scope">
              <div class="name_list">
                <img :src="scope.row.headImage" alt=""
                     class="name_list_avatar">
                <span class="name_list_cname">{{scope.row.name}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="job"
            label="职位"
            width="200">
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
    </div>
  </div>
</template>

<script>
  export default {
    name: 'adminsystem',
    data () {
      return {
        phoneList: [],
        orglist: [],
        defaultProps: {
          children: 'children',
          label: 'orgname'
        },
      }
    },
    created () {
      this.getphoneList()
      this.getOrgList()
    },
    methods: {
      getphoneList () {
        var that = this
        return that.request.getphoneList().then(function (response) {
            console.log(response)
            that.phoneList = response.content
          // that.phoneListTotal=that.phoneList.length
            console.log(that.phoneList.length)
          })
          .catch(function (error) {
            that.fetchError = error
          })
      },
      getOrgList () {
        var that = this
        return that.request.getOrgList().then(function (response) {
            that.orglist = [response.content]
          })
          .catch(function (error) {
            that.fetchError = error
          })
      },
      getOrgPhoneList(data){
        var that=this
        var organiztionId={id:data.id}
        console.log(data.id)
        return that.request.getOrgPhontList(organiztionId).then(function (response) {
            console.log(response)
            that.phoneList = response.content.userlist
          })
          .catch(function (error) {
            that.fetchError = error
          })
      }

    }
  }
</script>

<style scoped>
  .name_list {
    height: 40px;
    line-height: 40px;
    display: flex;
  }

  .name_list_avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .name_list_cname {
    margin-left: 10px;
    height: 40px;
    line-height: 40px;
  }

  .adminsystem {
    display: flex;
  }

  .orgtree {
    min-width: 300px;
  }
  .phoneList{
    width: 100%;
  }
</style>
