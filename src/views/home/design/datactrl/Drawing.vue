<template>
  <div>
    <el-table
      :data="files"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="文件名"
        width="120">
        <template slot-scope="scope">
          <svg class="icon fileType" aria-hidden="true">
            <use :xlink:href="scope.row.type|fileType"></use>
          </svg>
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="size"
        label="大小"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="update"
        label="上传日期"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="updatep"
        label="修改人员"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="explain"
        label="说明"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  const fileOptions = [{name: '文件0', id: 0 ,type: 0}, {name: '文件1', id: 1,type: 1}, {name: '文件2', id: 2,type: 2}, {name: '文件3', id: 3,type: 3}]
  export default {
    name: 'finishPaper',
    data () {
      return {
        files: fileOptions,
        fileList: []
      }
    },
    created () {
    },
    methods: {
      handleSelectionChange (val) {
        this.fileList = val
      }
    }
  }
</script>

<style scoped lang="scss">
.fileType{
  font-size: 18px;
}
</style>
