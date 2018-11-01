<template>
  <div id="home">
    <Bheader></Bheader>
    <div class="homePage u_scrollBar" :class="$store.state.headShow?'top60':''">
      <router-view/>
      <Rightside></Rightside>
    </div>
  </div>
</template>

<script>
import Bheader from "@/components/Header";
import Rightside from "@/components/Rightside";

export default {
  name: "home",
  components: {
    Bheader,
    Rightside
  }
};
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
