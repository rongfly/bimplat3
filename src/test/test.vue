<template>
    <div class="container">
        <div class="right-container">
            <div class="gantt-selected-info">
                <div v-if="selectedTask">
                    <h2>{{selectedTask.text}}</h2>
                    <span><b>ID: </b>{{selectedTask.id}}</span><br/>
                    <span><b>Progress: </b>{{selectedTask.progress|toPercent}}%</span><br/>
                    <span><b>Start Date: </b>{{selectedTask.start_date|niceDate}}</span><br/>
                    <span><b>End Date: </b>{{selectedTask.end_date|niceDate}}</span><br/>
                </div>
                <div v-else class="select-task-prompt">
                    <h2>Click any task</h2>
                </div>
            </div>
            <ul class="gantt-messages">
                <li class="gantt-message" v-for="message in messages">{{message}}</li>
            </ul>
            <el-button @click="showTask">查看</el-button>
        </div>
        <gantt class="left-container" :tasks="tasks" @task-updated="logTaskUpdate" @link-updated="logLinkUpdate" @task-selected="selectTask"></gantt>
    </div>
</template>

<script>
import Gantt from "./Gantt.vue";

export default {
  name: "test",
  components: { Gantt },
  data() {
    return {
      tasks: {
        data: [
          {
            duration: 2,
            start_date: "1-10-2018",
            id: 1,
            progress: 0.2,
            text: "白沙快速出口路",
            open: true
          },
          {
            parent: 1,
            duration: 2,
            start_date: "1-10-2018",
            id: 2,
            progress: 0.3,
            text: "一分部",
            open: true
          },
          {
            parent: 1,
            duration: 3,
            start_date: "1-10-2018",
            id: 9,
            progress: 0.3,
            text: "二分部",
            open: true
          },
          {
            parent: 1,
            duration: 3,
            start_date: "1-10-2018",
            id: 18,
            progress: 0.3,
            text: "三分部",
            open: true
          },
          {
            parent: 1,
            duration: 2,
            start_date: "1-10-2018",
            id: 20,
            progress: 0.3,
            text: "四分部",
            open: true
          },
          {
            parent: 2,
            duration: 2,
            start_date: "1-10-2018",
            id: 3,
            progress: 0.3,
            text: "路基工程",
            open: false
          },
          {
            parent: 2,
            duration: 4,
            start_date: "1-10-2018",
            id: 4,
            progress: 0.3,
            text: "桥梁工程",
            open: true
          },
          {
            parent: 2,
            duration: 4,
            start_date: "1-10-2018",
            id: 6,
            progress: 0.3,
            text: "隧道工程",
            open: true
          },
          {
            parent: 2,
            duration: 4,
            start_date: "1-10-2018",
            id: 8,
            progress: 0.3,
            text: "涵洞工程",
            open: false
          },
          {
            parent: 4,
            duration: 4,
            start_date: "1-10-2018",
            id: 5,
            progress: 0.3,
            text: "那京河大桥",
            open: false
          },
          {
            parent: 9,
            duration: 4,
            start_date: "1-10-2018",
            id: 10,
            progress: 0.6,
            text: "路基工程",
            open: false
          },
          {
            parent: 9,
            duration: 9,
            start_date: "1-10-2018",
            id: 11,
            progress: 0.6,
            text: "桥梁工程",
            open: true
          },
          {
            parent: 9,
            duration: 9,
            start_date: "1-10-2018",
            id: 14,
            progress: 0.6,
            text: "隧道工程",
            open: true
          },
          {
            parent: 9,
            duration: 9,
            start_date: "1-10-2018",
            id: 17,
            progress: 0.6,
            text: "涵洞工程",
            open: false
          },
          {
            parent: 11,
            duration: 5,
            start_date: "1-10-2018",
            id: 12,
            progress: 0.6,
            text: "新安一号桥",
            open: false
          },
          {
            parent: 11,
            duration: 5,
            start_date: "1-10-2018",
            id: 13,
            progress: 0.6,
            text: "牙柄二号桥",
            open: false
          },
          {
            parent: 9,
            duration: 6,
            start_date: "1-10-2018",
            id: 15,
            progress: 0.6,
            text: "白石山隧道出口",
            open: false
          },
          {
            parent: 9,
            duration: 5,
            start_date: "1-10-2018",
            id: 16,
            progress: 0.6,
            text: "新安隧道",
            open: false
          },
          {
            parent: 18,
            duration: 5,
            start_date: "1-10-2018",
            id: 19,
            progress: 0.6,
            text: "路面工程",
            open: false
          },
          {
            parent: 20,
            duration: 2,
            start_date: "1-10-2018",
            id: 21,
            progress: 0.6,
            text: "交安工程",
            open: false
          },
          {
            parent: 20,
            duration: 2,
            start_date: "1-10-2018",
            id: 22,
            progress: 0.6,
            text: "机电工程",
            open: false
          },
          {
            parent: 20,
            duration: 2,
            start_date: "1-10-2018",
            id: 23,
            progress: 0.6,
            text: "环境绿化工程",
            open: false
          }
        ],
        links: [{ id: 1, source: 4, target: 2, type: "3" }]
      },
      selectedTask: null,
      messages: []
    };
  },
  filters: {
    toPercent (val) {
      if(!val) return '0'
      return Math.round((+val) * 100)
    },
    niceDate (obj){
      return `${obj.getFullYear()} / ${obj.getMonth() + 1} / ${obj.getDate()}`
    }
  },
  methods: {
    showTask(){
      console.log(this.tasks)
    },
    selectTask (task) {
      console.log(task)
      this.selectedTask = task
    },

    addMessage (message) {
      console.log(message)
      this.messages.unshift(message)
      if(this.messages.length > 40) {
        this.messages.pop()
      }
    },
    logTaskUpdate (id, mode, task) {
      console.log(task)
      // this.tasks.data.push(task)
      let text = (task && task.text ? ` (${task.text})`: '')
      let message = `Task ${mode}: ${id} ${text}`
      this.addMessage(message)
    },
    logLinkUpdate (id, mode, link) {
      // this.tasks.links.push(link)
      console.log(this.tasks)
      let message = `Link ${mode}: ${id}`
      if(link){
        console.log(link)
        message += ` ( source: ${link.source}, target: ${link.target} )`
      }
      this.addMessage(message)
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
}
.left-container {
  height: 100%;
}
</style>
