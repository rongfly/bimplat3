<template>
  <div>
    <!--<iframe src="http://10.25.100.224:8079/HCProgress/ConstructionProgress.aspx" frameborder="0" class="office-admin" ref="iframe"-->
    <!--name="ifm" id="ifm"></iframe>-->
    <div class="main-plus">
      <div class="left-plus">
        tree
        <el-tree class="teamtree"
                 :props="defaultProps"
                 :load="loadElement"
                 lazy
                 empty-text="数据为空"
                 :expand-on-click-node="false"
                 :highlight-current="true"
                 @node-click="handleNodeClick">
        </el-tree>
      </div>
      <div class="right-plus">
        <div class="right-top">
          <div class="right-map">
            map
          </div>
          <div class="right-list">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="一致性 Consistency" name="1">
                <div id="safechart_line" style="width: 300px;height: 200px;"></div>
                <div id="safechart_pie" style="width: 300px;height: 200px;"></div>
              </el-collapse-item>
              <el-collapse-item title="反馈 Feedback" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
              </el-collapse-item>
              <el-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
              </el-collapse-item>
              <el-collapse-item title="可控 Controllability" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
        <div class="right-bottom">
          进度模拟
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import echarts from 'echarts'

  export default {
    name: 'ratemanage',
    data () {
      return {
        activeName: '1',
        option1: {
          title: {
            text: '安全问题走势图'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['已解决', '总共']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '已解决',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '总共',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              data: [220, 182, 191, 234, 290, 330, 310]
            }
          ]
        },
        option2: {
          backgroundColor: '#fff',

          title: {
            text: '完成情况',
            left: 'center',
            top: 20,
            textStyle: {
              color: '#ccc'
            }
          },

          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },

          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 274, name: '联盟广告'},
                {value: 235, name: '视频广告'},
                {value: 400, name: '搜索引擎'}
              ].sort(function (a, b) {
                return a.value - b.value
              }),
              roseType: 'radius',
              label: {
                normal: {
                  textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                normal: {
                  color: '#c23531',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200
              }
            }
          ]
        },
        defaultProps: {
          label: 'o_projecttaskdesc',
          children: 'o_projecttaskno',
        },
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.drawChart('safechart_line', this.option1)
        this.drawChart('safechart_pie', this.option2)
      })
    },
    methods: {
      drawChart (id, data) {
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption(data)
      },
      getChart () {
        var that = this
        const query = {
          endTime: that.endTime,
          startTime: that.startTime,
          status: that.status
        }
        return that.request.getChart(query).then(function (response) {
            console.log(response.content)
          })
          .catch(function (error) {
            that.fetchError = error
          })
      },
      loadElement (node, resolve) {
        var that = this
        if (node.level === 0) {
          var data = {nodeid: 0}
          return that.request.getsubList(data).then(function (response) {
              console.log(response)
              return resolve(response.content)
            })
            .catch(function (error) {
              that.fetchError = error
            })
          // var defulf = {o_projecttaskdesc: '德上高速', o_projecttaskno: 0}
          // that.handleNodeClick(defulf)
          // return resolve([defulf])
        }
        if (node.level >= 1) {
          var data = {nodeid: node.data.o_projecttaskno}
          return that.request.getsubList(data).then(function (response) {
              console.log(response)
              return resolve(response.content)
            })
            .catch(function (error) {
              that.fetchError = error
            })
        }
        // iframeInit () {
        //   const iframe = this.$refs.iframe
        //   const clientHeight = document.documentElement.clientHeight - 90
        //   iframe.style.height = `${clientHeight - 14}px`
        //   // if (iframe.attachEvent) {
        //   //   iframe.attachEvent('onload', () => {
        //   //     this.sendMsg()
        //   //   })
        //   // } else {
        //   //   iframe.onload = () => {
        //   //     this.sendMsg()
        //   //   }
        //   // }
        // },
      },
      handleNodeClick (data) {
        console.log(data)
        var that = this
        if (data.o_projecttaskno != 0) {
          var prm = {nodeid: data.o_projecttaskno}
          that.request.getDetailByid(prm).then(function (response) {
              console.log(response)
              that.elementdetail = response.content
              that.elementdetail.img = response.content.qrcode.QR_IMG
            })
            .catch(function (error) {
              that.fetchError = error
            })
        }
        else {
          var that = this
          var prm = {content: data.o_projecttaskno}
          that.request.getQrcode(prm).then(function (response) {
              console.log(response)
              that.elementdetail.o_projecttaskdesc = data.o_projecttaskdesc
              that.elementdetail.img = response.content.QR_IMG
            })
            .catch(function (error) {
              that.fetchError = error
            })
        }
      },

    },

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

  .main-plus {
    display: flex;
  }

  .left-plus {
    flex: 1;
  }

  .right-plus {
    flex: 5;
  }

  .right-top {
    display: flex;
  }

  .right-map {
    flex: 5;
  }

  .right-list {
    min-width: 300px;
    flex: 1;
  }
</style>
