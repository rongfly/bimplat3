<template>
  <div class="big-login">
    <div class="login">
      <div class="login-title">
        <img src="@/assets/img/logo.png" alt="">
        <div class="title">基于BIM的设计施工精益管理平台</div>
      </div>
      <div class="login-left">
        <img src="@/assets/img/left.png" alt="" style="width: 100%;display: block; min-width: 500px;">
      </div>
      <div class="login-right">
        <div class="login-inter">
          <p>用户登录</p>
          <div class="login-form" ref="ruleForm">
            <div class="login-form-label">
              <label for="username">用户名</label>
              <i class="el-input-check"></i>
              <input type="text" id="username" v-model="username" v-ckSpan="{required: true,regex:'username'}"
                     autocomplete="off">
              <span class="input_error"></span>
            </div>
            <div class="login-form-label">
              <label for="password">密码</label>
              <i class="iconfont el-input-check icon-icon-eye-close" @click="showPwd" v-if="showpw"></i>
              <i class="iconfont el-input-check icon-icon-eye-open" @click="showPwd" v-else></i>
              <input :type="passwordType" id="password" v-model="password">
            </div>
            <div class="login-button" @click="login()">登录</div>
          </div>
        </div>
      </div>
      <p class="copy-right">版权所有 中国公路工程咨询集团有限公司</p>
    </div>
    <footer></footer>
  </div>
</template>
<script>

  export default {
    name: 'login',
    data () {
      return {
        username: 'lzz',
        password: 'admin123',
        passwordType:'password',
        showpw:false,
      }
    },
    methods: {
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
          this.showpw=true
        } else {
          this.passwordType = 'password'
          this.showpw=false
        }
      },
      login () {
        const that = this
        let data = {
          username: that.username,
          password: that.password
        }
        // return that.request.login(data)
        return that.$store.dispatch('LoginByUsername', data).then(() => {
          console.log("login.vue")
          that.$router.push({path: '/'})
        }).catch(() => {
          console.log("login.error")
        })
      }
    },
    mounted () {
      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    },
  }
</script>
<style scoped lang="scss">
  .login {
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 90px 0;
    /*background-image: url("../assets/img/bg.png");*/
    /*background-size: 100% 100%;*/
    .login-title {
      position: absolute;
      height: 64px;
      min-height: 64px;
      line-height: 64px;
      top: 23px;
      left: 33px;
      display: flex;
      img {
        width: 64px;
        height: 64px;
      }
      .title {
        height: 64px;
        line-height: 64px;
        padding-left: 10px;
        font-size: 26px;
        color: #63b9ff;
      }
    }
    .login-left {
      flex: 1;
      background: #3aa7ff;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
    }
    .login-right {
      flex: 1;
      background: #3aa7ff;
      position: relative;
      display: flex;
      align-items: center;
    }
  }
  .login-inter:hover{
    transform: translate(0, -5px);
    box-shadow: 0 0px 15px 0 #666;
  }
  .login-inter {
    transition: all 0.3s;
    width: 30%;
    min-width: 350px;
    margin-left: 34%;
    background: rgba(255, 255, 255, 0.9);
    padding: 50px;
    box-shadow: 0 0px 15px 0 #999;
    border-radius: 5px;
    cursor: pointer;
    p {
      font-size: 30px;
      color: #666;
      text-align: center;
    }
    .login-form {
      margin-top: 62px;
      .login-form-label {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        position: relative;
        label {
          font-size: 20px;
          color: #999;
        }
        input {
          background: transparent;
          border: none;
          outline: none;
          border-bottom: 2px solid #bdbdbd;
          height: 30px;
        }
        input:focus {
          border-bottom: 2px solid #3aa7ff;
        }
        .el-input-check {
          position: absolute;
          right: 5px;
          bottom: 7px;
          transition: all .3s;
          color: transparent;
        }
        .icon-icon-eye-close,.icon-icon-eye-open{
          color: #909399;
        }
      }
    }
  }

  .demo-ruleForm {
    position: absolute;
    width: 300px;
    top: 0;
    left: 0;
  }

  .copy-right {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    line-height: 90px;
    font-size: 18px;
  }
</style>
