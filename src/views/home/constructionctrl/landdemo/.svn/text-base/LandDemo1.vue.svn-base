<template>
  <div>
    <div class="tree">
      <div class="tree-aside">
        <el-select v-model="value" placeholder="请选择" style="width: 100%;margin-bottom: 20px" @change="change(value)">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" class="box-shadow"></el-tree>
      </div>
      <div class="tree-list">
        <div class="tree-list-do">
          <div>
            <el-input placeholder="请输入内容" v-model="input3" style="width: 300px">
              <template slot="prepend">检查点：</template>
            </el-input>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </div>
          <div>
            <el-button type="primary" icon="el-icon-plus">添加清单</el-button>
            <el-button type="primary" icon="el-icon-upload">导入</el-button>
          </div>
        </div>
        <el-table
          :data="tableData"
          style="width: 100%"
          class="box-shadow">
          <el-table-column
            label="日期"
            width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="姓名"
            width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="地址">
            <template slot-scope="scope">
              <p style="margin-left: 10px">{{ scope.row.address }}</p>
            </template>
          </el-table-column>
          <el-table-column
            label="级别"
            width="160">
            <template slot-scope="scope">
              <el-rate
                v-model="scope.row.level"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, tableData)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        data: [
          {
            label: '一级 1',
            children: [
              {
                label: '二级 1-1',
                children: [
                  {
                    label: '三级 1-1-1'
                  }
                ]
              }
            ]
          },
          {
            label: '一级 2',
            children: [
              {
                label: '二级 2-1',
                children: [
                  {
                    label: '三级 2-1-1'
                  }
                ]
              },
              {
                label: '二级 2-2',
                children: [
                  {
                    label: '三级 2-2-1'
                  }
                ]
              }
            ]
          },
          {
            label: '一级 3',
            children: [
              {
                label: '二级 3-1',
                children: [
                  {
                    label: '三级 3-1-1'
                  }
                ]
              }, {
                label: '二级 3-2',
                children: [
                  {
                    label: '三级 3-2-1',
                    val: 222
                  }
                ]
              }
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label',
          val: 'val'
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          level: 1,
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          level: 2,
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          level: 3,
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          level: 4.5,
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        options: [{
          value: 0,
          label: '黄金糕'
        }, {
          value: 1,
          label: '双皮奶'
        }, {
          value: 2,
          label: '蚵仔煎'
        }, {
          value: 3,
          label: '龙须面'
        }, {
          value: 4,
          label: '北京烤鸭'
        }],
        value: '',
        input3: 12
      }
    },
    methods: {
      change(value){
        console.log(value)
      },
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, rows) {
        console.log(index, rows)
        rows.splice(index, 1)
      },
      handleNodeClick (data) {
        console.log(data)
      },
    }
  }
</script>
<style lang="scss" scoped>
  .tree {
    display: flex;
    .tree-aside {
      width: 220px;
      margin: 5px;
      min-width: 220px;
      height: 100%;
    }
    .tree-list {
      width: calc(100% - 230px);
      margin: 5px;
      .tree-list-do {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        flex-wrap: wrap;
      }
    }
  }

  .box-shadow {
    box-shadow: 0 0 2px 1px #DFF4FC;
  }
</style>
