<template>
  <div>
    <!--<input type="text" v-model="inputplus" @input="abc">-->
    <el-tabs tab-position="left">
      <el-tab-pane label="个人信息">
        <el-form
          :model="userInfo"
          :rules="userInfoRule"
          ref="userinfo_box"
          label-width="120px"
          class="demo-ruleForm userinfo_box"
        >
          <el-form-item label="头像：" prop="avatar" style="height: 100px;line-height: 100px">
            <img :src="userInfo.avatar" alt="" class="userinfo_uptx">
          </el-form-item>
          <el-form-item label="名字：" prop="name">
            <el-input v-model="userInfo.name"></el-input>
            <div class="sadas"></div>
          </el-form-item>
          <el-form-item label="部门：" prop="department">
            <el-input v-model="userInfo.department"></el-input>
          </el-form-item>
          <el-form-item label="职位：" prop="job">
            <el-input v-model="userInfo.job"></el-input>
          </el-form-item>
          <el-form-item label="电话：" prop="telephone">
            <el-input v-model="userInfo.telephone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱：" prop="email">
            <el-input v-model="userInfo.email"></el-input>
          </el-form-item>
          <el-form-item label="生日：">
            <el-date-picker
              v-model="userInfo.brth"
              type="datetime"
              placeholder="选择日期时间"
              style="width: 280px;"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="updateUserInfo('userInfo_box')">提交更改</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="修改密码">
        <el-form
          :model="checkPass"
          status-icon
          :rules="passRules"
          ref="userinfo_password"
          label-width="100px"
          class="demo-ruleForm userinfo_box"
        >
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="checkPass.password" autoComplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPassword">
            <el-input type="password" v-model="checkPass.checkPassword" autoComplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="updatePassword('userinfo_password')">提交</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="公司信息"></el-tab-pane>
    </el-tabs>
    <!--<p>{{userInfo}}</p>-->
    <!--<div class="block">-->
      <!--<p>使用 scoped slot</p>-->
      <!--<el-tree-->
        <!--:data="data5"-->
        <!--show-checkbox-->
        <!--node-key="id"-->
        <!--default-expand-all-->
        <!--:expand-on-click-node="false"-->
      <!--&gt;-->
        <!--<span class="custom-tree-node" slot-scope="{ node, data }">-->
          <!--<span>{{ node.label }}</span>-->
          <!--<div class="flextable">-->
            <!--<span>123</span>-->
            <!--<el-input v-model="data.value"></el-input>-->
            <!--<span>2423</span>-->
            <!--<span>-->
              <!--<el-button type="text" size="mini" @click="() => append(data)">Append</el-button>-->
              <!--<el-button type="text" size="mini" @click="() => remove(node, data)">Delete</el-button>-->
            <!--</span>-->
          <!--</div>-->
        <!--</span>-->
      <!--</el-tree>-->
    <!--</div>-->
  </div>
</template>

<script>
  let id = 1000
  import { mapState } from 'vuex'
  import dataJson from './data.json'

  export default {
    name: 'userinfo',
    data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.checkPass.checkPassword !== '') {
            this.$refs.userinfo_password.validateField('checkPassword')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.checkPass.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      const data = [
        {
          id: 1,
          label: '一级 1',
          value: 1,
          children: [
            {
              id: 4,
              label: '二级 1-1',
              value: 1,
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1',
                  value: 1
                },
                {
                  id: 10,
                  label: '三级 1-1-2',
                  value: 1
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          value: 1,
          children: [
            {
              id: 5,
              label: '二级 2-1',
              value: 1
            },
            {
              id: 6,
              label: '二级 2-2',
              value: 1
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          value: 1,
          children: [
            {
              id: 7,
              label: '二级 3-1',
              value: 1
            },
            {
              id: 8,
              label: '二级 3-2',
              value: 1
            }
          ]
        }
      ]
      return {
        data5: JSON.parse(JSON.stringify(data)),
        userInfoRule: {
          avatar: [{required: true}],
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]
        },
        checkPass: {
          password: '',
          checkPassword: ''
        },
        passRules: {
          password: [{validator: validatePass, trigger: 'blur'}],
          checkPassword: [{validator: validatePass2, trigger: 'blur'}]
        },
        inputplus: 0
      }
    },
    created () {
    },
    methods: {
      updateUserInfo (formName) {
        var that = this
        that.$refs[formName].validate(valid => {
          if (valid) {
            return that.$store
              .dispatch('UpdateUserInfo', that.userInfo)
              .then(() => {
                console.log('1')
                that.$router.push({path: '/'})
              })
              .catch(() => {
                console.log('2')
              })
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      updatePassword (formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      append (data) {
        const newChild = {id: id++, label: 'testtest', children: []}
        if (!data.children) {
          this.$set(data, 'children', [])
        }
        console.log(this.data5)
        data.children.push(newChild)
      },

      remove (node, data) {
        const parent = node.parent
        const children = parent.data.children || parent.data
        const index = children.findIndex(d => d.id === data.id)
        children.splice(index, 1)
      },
      abc () {
        var reg = this.inputplus.match(/\d+\.?\d{0,2}/)
        var txt = ''
        if (reg != null) {
          txt = reg[0]
        }
        this.inputplus=txt
        console.log(this.inputplus)
      }
    },
    computed: {
      userInfo () {
        return this.$store.state.user.userInfo
      }
    }
  }

</script>

<style scoped>
  .userinfo_uptx {
    width: 82px;
    height: 82px;
  }

  .userinfo_box {
    width: 440px;
    padding: 20px;
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
