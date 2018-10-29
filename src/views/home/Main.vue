<template>
  <div class="desk">
    <div class="top_img">
      <img src="@/assets/img/banner.png" alt="">
    </div>
    <div class="step">
      <h1>G7611都香高速公路守望至红山段</h1>
      <hr>
      <div class="contain_one">
        <p>基本信息</p>
        <p style="color:#2a82e4;">查看项目详细信息</p>
      </div>
      <div class="contain_two">
        <div class="two_left">
          <h2>项目全长</h2>
          <p><span>10</span>公里</p>
        </div>
        <div class="two_middle">
          <h2>车道数</h2>
          <p>双向<span>6</span>车道</p>
        </div>
        <div class="two_right">
          <h2>桥隧比</h2>
          <p><span>64</span>%</p>
        </div>
        <div class="tojubao">
          <!--需要一个跳转链接-->
          <p>都香高速公路隐患直报系统</p>
        </div>
      </div>
    </div>
    <div class="step">
      <div class="contain_one">
        <p>建设信息</p>
      </div>
      <div class="cricle">
        <p>项目建设周期： <span>4年</span></p>
        <p>预计通车时间： <span>2022年12月</span></p>
        <div style="width: 400px;display: inline-block;margin-top: -10px;">
          <span style="font-size: 12px">Elapsed time</span>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="20" status="success"></el-progress>
        </div>
      </div>
      <div class="continue_time">
        <p>项目建设倒计时器</p>
        <p><span>3</span>年</p>
        <p><span>2</span>月</p>
      </div>
    </div>
    <div class="step">
      <div class="contain_one">
        <p>项目动态</p>
        <p style="color:#2a82e4;">更多</p>
      </div>
      <div class="li_list">
        <ul>
          <li>
            <p>G7611都香高速公路守望段工程科研项目咨询会召开</p>
            <p>2018-01-07</p>
          </li>
          <li>
            <p>G7611都香高速公路守望段工程科研项目咨询会召开</p>
            <p>2018-01-07</p>
          </li>
          <li>
            <p>G7611都香高速公路守望段工程科研项目咨询会召开</p>
            <p>2018-01-07</p>
          </li>
          <li>
            <p>G7611都香高速公路守望段工程科研项目咨询会召开</p>
            <p>2018-01-07</p>
          </li>
          <li>
            <p>G7611都香高速公路守望段工程科研项目咨询会召开</p>
            <p>2018-01-07</p>
          </li>
        </ul>
        <hr>
        <br>
        <p>版权所有（c）2006 中国公路工程咨询集团有限公司 京ICP备05006113号</p><br>
        <p style="margin-bottom: 200px;">技术支持：中国工程咨询集团有限公司  BIM技术中心</p>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  name:'index',
}
</script>
<style lang="scss" scoped>
  .li_list {
    ul{
      margin-bottom: 30px;
      li {
        padding: 0 20px;
        height: 50px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
      }
    }
    p {
      text-align: center;
    }
  }
  .continue_time {
    display: flex;
    margin-bottom: 50px;
    justify-content: space-between;
    p{
      span{
        font-size: 30px;
        font-weight: bold;
        margin: 0 15px;
      }
    }
    p:nth-child(1){
      width: 200px;
      height: 200px;
      text-align: center;
      line-height: 200px;
    }
    p:nth-child(2),p:nth-child(3){
      width: 200px;
      height: 200px;
      text-align: center;
      line-height: 200px;
      border: 1px solid #ccc;
      margin-right: 200px;
    }
  }
  .cricle {
    padding:0 20px;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    p {
      display: inline-block;
      span {
        color: #2a82e4;
      }
    }
  }
  .desk {
    width: 1200px;
    background-color: #fff;
    margin: 0 auto;
    .top_img {
      margin-bottom: 30px;
      img {
        width: 100%;
        height: 400px;
      }
    }
    .step {
      h1 {
        text-align: center;
        font-size: 24px;
        margin-bottom: 10px;
      }
      .contain_one {
        height: 50px;
        padding: 0 15px;
        background-color: #e5e5e5;
        line-height: 50px;
        margin-top:10px;
        display: flex;
        justify-content: space-between;
        p {
          cursor: pointer;
        }
      }
      .contain_two {
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
        position: relative;
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
        >.tojubao{
          width: 120px;
          height: 100px;
          padding: 5px;
          text-align: center;
          cursor: pointer;
          position: absolute;
          color: #fff;
          top: 50px;
          right:-160px;
          background-color: #d43030;
        }

      }
    }
  }


</style>
