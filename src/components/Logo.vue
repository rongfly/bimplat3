<template>
  <div>
    <router-link to="/">
      <div class="logo_box">
        <img src="@/assets/img/logo-fff.png" alt="" class="logo">
        <h3>基于BIM的设计施工精益管理平台</h3>  <p>云南都香高速公路项目</p>
      </div>
    </router-link>
  </div>
</template>
<script>
    export default{
        data(){
            return{
            }
        }
    }
</script>
<style scoped>
  .logo_box{
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .logo{
    width: 50px;
    height:50px;
  }
  h3{
    display: inline-block;
    line-height:20px;
    height:20px;
    font-size:18px;
    color: #fff;
    margin-left:20px;
  }
  p {
    display: inline-block;
    line-height:20px;
    height:20px;
    font-size:16px;
    color: #fff;
    margin-left:20px;
  }
</style>
