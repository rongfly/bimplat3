<template>
  <div>
    <div class="regist-bg">
      <img src="@/assets/img/left.png" alt="" class="regist-img">
      <el-form
        :model="userInfo"
        status-icon
        :rules="userRules"
        ref="userInfo"
        label-width="100px"
        class="registForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="userInfo.username" autoComplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="userInfo.pass" autoComplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="userInfo.checkPass" autoComplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="login-button" @click="submitForm('userInfo')">
            提交
          </div>
        </el-form-item>
        <div style="text-align:center">已有账户?
          <router-link to="/">
            <span class="logins">请登录</span>
          </router-link>
        </div>
      </el-form>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'regist',
    data () {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'))
        } else {
          if (this.userInfo.username !== '') {
            setTimeout(function () {
              console.log(1)
              callback(new Error('用户名已存在'))
              // callback();
            }, 3000)
          }
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.userInfo.checkPass !== '') {
            this.$refs.userInfo.validateField('checkPass')
          }
          callback()
        }
      }
      var validateCheckpass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.userInfo.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        userInfo: {
          username: '',
          pass: '',
          checkPass: ''
        },
        userRules: {
          username: [{validator: validateName, trigger: 'blur'}],
          pass: [{validator: validatePass, trigger: 'blur'}],
          checkPass: [{validator: validateCheckpass, trigger: 'blur'}]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>
<style>
  .regist-bg {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .regist-img {
    /* position: absolute; */
    flex: 2;
  }

  .registForm {
    flex: 1;
    margin: 10%;
  }

  .logins {
    color: #409EFF;
    text-decoration: underline #409EFF;
  }
</style>
