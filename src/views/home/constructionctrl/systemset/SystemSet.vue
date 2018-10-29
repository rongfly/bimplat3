<template>
  <div>
    <!--<iframe src="http://10.25.100.224:8079/Default.aspx" frameborder="0" class="office-admin" ref="iframe"-->
            <!--name="ifm" id="ifm"></iframe>-->
    <el-tree
      :data="data5"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <div class="flextable">
          <span>123</span>
          <span>{{data.value}}</span>
          <span>2423</span>
          <span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(data)">
            Append
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
        </div>
      </span>
    </el-tree>
  </div>
</template>

<script>
  let id = 1000;
  export default {
    name: 'systemset',
    data(){
      const data = [
        {
          id: 1,
          label: "一级 1",
          value: 1,
          children: [
            {
              id: 4,
              label: "二级 1-1",
              value: 1,
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                  value: 1
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                  value: 1
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          value: 1,
          children: [
            {
              id: 5,
              label: "二级 2-1",
              value: 1
            },
            {
              id: 6,
              label: "二级 2-2",
              value: 1
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          value: 1,
          children: [
            {
              id: 7,
              label: "二级 3-1",
              value: 1
            },
            {
              id: 8,
              label: "二级 3-2",
              value: 1
            }
          ]
        }
      ];
      return{
        data5: JSON.parse(JSON.stringify(data)),
      }
    },
    mounted () {
      var that = this
      that.iframeInit()
      window.onresize = () => {
        that.iframeInit()
      }
    },
    methods: {

      iframeInit () {
        const iframe = this.$refs.iframe
        const clientHeight = document.documentElement.clientHeight - 90
        iframe.style.height = `${clientHeight - 14}px`
        // if (iframe.attachEvent) {
        //   iframe.attachEvent('onload', () => {
        //     this.sendMsg()
        //   })
        // } else {
        //   iframe.onload = () => {
        //     this.sendMsg()
        //   }
        // }
      },

      append(data) {
        const newChild = { id: id++, label: "testtest", children: [] };
        if (!data.children) {
          this.$set(data, "children", []);
        }
        console.log(this.data5);
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
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
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
  .flextable {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    left: 200px;
  }
</style>
