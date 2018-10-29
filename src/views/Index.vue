<template>
  <div id="home">
    <Bheader></Bheader>
    <div class="homePage u_scrollBar" :class="$store.state.headShow?'top60':''">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Bheader from '@/components/Header'

  export default {
    name: 'home',
    components: {
      Bheader
    }
  }
</script>

<style>
  .homePage {
    height: 100vh;
    overflow: scroll;
  }

  .top60 {
    padding-top: 60px;
  }
</style>
