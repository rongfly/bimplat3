<template>
    <div ref="gantt"></div>
</template>
 
<script>
import "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/locale/locale_cn.js";
export default {
  name: "gantt",
  props: {
    tasks: {
      type: Object,
      default() {
        return { data: [], links: [] };
      }
    }
  },

  mounted: function() {
    console.log(gantt.config);
    gantt.init(this.$refs.gantt);
    gantt.parse(this.$props.tasks);
  },
  methods:{
      showdata() {
      gantt.refreshData();
      console.log(this.tasks);
    }
  }
};
</script>
 
<style>
@import "~dhtmlx-gantt/codebase/dhtmlxgantt.css";
</style>
