<template>
  <div>
    <h1>设计协同系统</h1><br><br>
    <p style="font-size: 20px">本项目基于中咨集团自主二次开发的设计协同系统进行了二维和三维设计，通过在统一的设计协同系统工作，使得设计人员很方便地进行资料互提、资料云端存储、历史版本记录、校审过程管理等，减少了沟通成本、提高了设计效率和质量。</p>
    <div class="time_box clearfix">
      <div class="login_times">
        <p>平均登录次数</p>
        <h4>85</h4>
      </div>
      <div class="upload_times">
        <p>平均提交文件次数</p>
        <h4>66.3</h4>
      </div>
      <div class="document_count">
        <p>平均文件数量</p>
        <h4>1006</h4>
      </div>
      <div class="document_large">
        <p>平均文件大小(MB)</p>
        <h4>2.6</h4>
      </div>
      <span>
        <el-button>日</el-button>
        <el-button>周</el-button>
        <el-button>月</el-button>
        <el-button>季</el-button>
      </span>
      <div id="myChart" :style="{width: '1100px', height: '400px'}"></div>
    </div>
    <p style="margin-top: 30px; font-size:18px ;">截止到 2018 年 7 月 20 日，设计协同平台中本项目主要信息：</p>
    <div class="contain_two">
      <div class="two_left">
        <h2>文件总数</h2>
        <p><span>10</span>个</p>
      </div>
      <div class="two_middle">
        <h2>文件总大小</h2>
        <p><span>6</span>GB</p>
      </div>
      <div class="two_right">
        <h5>文件详细信息</h5>
        <table>
          <tr>
            <td>文件类型</td>
            <td>数量</td>
            <td>大小</td>
          </tr>
          <tr>
            <td>图纸</td>
            <td>500</td>
            <td>0.8G</td>
          </tr>
          <tr>
            <td>文本</td>
            <td>500</td>
            <td>0.18G</td>
          </tr>
          <tr>
            <td>表格</td>
            <td>500</td>
            <td>6.8G</td>
          </tr>
          <tr>
            <td>模型</td>
            <td>500</td>
            <td>2.8G</td>
          </tr>
        </table>
        <h5 style="font-weight: normal;color: #3aca60;margin-left: 50%;cursor:pointer;">更多</h5>
      </div>
    </div>
    <h1>中咨设计协同系统介绍</h1><br><br>
  </div>
</template>

<script>
  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/line')
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  export default {
    name:'',
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        // myChart.setOption({
        //   lineStyle: {
        //     color: 'yellowgreen'
        //   },
        //   // title: {text: 'ECharts 入门示例'},
        //   tooltip: {},
        //   xAxis: {
        //     data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月","9月","10月","11月","12月"]
        //   },
        //   yAxis: {},
        //   series: [{
        //     name: '销量',
        //     type: 'line',
        //     data: [5, 20, 36, 10, 10, 20,30,45,25,36,42,26]
        //   }]
        // });
        myChart.setOption({
          title: {text: '2017年11月登录次数统计图'},
          textStyle:{

          },
          toolbox: {
            show : true,
            feature : {
              magicType : {show: true, type: ['line', 'bar']},
            }
          },
          calculable : true,
          tooltip : {
            trigger: 'axis',
            formatter: "Temperature : <br/>{b} : {c}"
          },
          lineStyle: {
            color: 'yellowgreen'
          },
          xAxis : [
            {
              type : 'category',
              axisLine : {onZero: false},
              // axisLabel : {
              //   formatter: '{value} '
              // },
              boundaryGap : false,
              data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              // name : '时间',
              // nameLocation:'middle',
              // nameGap : 40
            }
          ],
          yAxis : [
            {
              type : 'value',
              // axisLabel : {
              //   formatter: '{value}'
              // },
              // name : '货量/票',
              // nameLocation:'middle',
              // nameGap : 100
            }
          ],
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        });

      }
    }
  }

</script>

<style scoped lang="scss">
  .clearfix:after {
    content: " ";
    display: block;;
    line-height: 0;
    height: 0;
    visibility: hidden;
    clear: both;
  }
  .contain_two {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    >div{
      border: 1px solid #cdc;
      width: 260px;
      height: 280px;
      text-align: center;
      >h2 {
        font-weight: normal;
        margin-top: 30px;
      }
      >p {
        margin-top: 20px;
        >span {
          font-size: 30px;
          margin:0 15px;
        }
      }
    }
    >div.two_right {
      width: 460px;
      height: 280px;
      padding: 20px;
      text-align: left;
      table{
        tr{
          td{
            height: 40px;
            line-height: 40px;
          }
          td:nth-child(1){
            width: 200px;
          }
          td:nth-child(2){
            width: 100px;
          }
        }
      }
    }

  }
.time_box {
  border: 1px solid #ccc;
  margin-top: 50px;
  border-radius: 10px;
  >div {
    float: left;
    width: 180px;
    margin:15px;
    height: 80px;
    padding:20px ;
    border-radius: 4px;
    text-align: left;
    border: 1px solid #ccc;
  }
  >span{
    float: right;
    display: inline-block;
    margin-top: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 90px;
    button {
      margin: 0;
    }
  }
}
  h1 {
    font-size: 26px;
    font-weight: normal;
  }
</style>
