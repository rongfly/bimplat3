<template>
  <div id="app">
        <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: PingFang SC,'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  margin: 0;
}
*{
  font-family: PingFang SC;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a{
  color: inherit;
  text-decoration: none;
}
.pswp{
  z-index: 3000!important;
}

</style>
