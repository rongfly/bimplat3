<template>
  <div>
    <h1>BIM建模</h1><br><br>
    <p style="font-size: 20px">本项目采用Bentley BIM建模软件进行了三维建模，并进行了设计和施工阶段的应用。</p>
    <div class="list_bentle">
      <ul>
        <li><span>建模精度</span><span>LOD300 构件级</span></li>
        <li><span>建模软件</span><span>Bentley OpenRoad Desinger</span></li>
        <li><span>模型文件总数</span><span>128个</span></li>
        <li><span>模型文件总大小</span><span>2.4个G</span></li>
        <li><span>路基路面模型总长度</span><span>204Km</span></li>
        <li><span>桥梁模型统计</span><span>64个</span></li>
        <li><span>隧道模型统计</span><span>32个</span></li>
        <li><span>互通式立体交叉模型统计</span><span>25个</span></li>
        <li><span>交通工程模型统计</span><span>25个</span></li>
        <li><span>附属物及其他模型统计</span><span>25个</span></li>
      </ul>
    </div>
    <div class="bentle_video">
      <h3>项目全线三维模型道路漫游</h3>
        <div class="item">
          <div class="player">
            <video-player class="vjs-custom-skin"
                          :options="playerOptions"
                          :playsinline="true"
                          @ready="playerReadied($event)"></video-player>
          </div>
        </div>
    </div>
    <div class="bentle_video">
      <h3>方案比选</h3>
      <img src="@/assets/img/banner.png" alt="">
    </div>
    <div class="bentle_video">
      <h3>基于BIM的公路项目安全性评价</h3>
      <img src="@/assets/img/banner.png" alt="">
    </div>
    <div class="bentle_video" style="margin-bottom: 300px;">
      <h3>施工模拟</h3>
      <img src="@/assets/img/banner.png" alt="">
    </div>
  </div>
</template>

<script>
  import videojs from 'video.js'
  export default {
    name: "designModel",
    data() {
      return {
        playerOptions: {
          height: '360',
          width:'1200',
          playbackRates: [0.7, 1, 1.3, 1.5, 1.7],
          sources: [{
            type: "video/mp4",
            src: "http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_L"
          }],
          poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-3.jpg",
        }
      }
    },
    methods: {
      playerReadied(player) {
        const track = new videojs.AudioTrack({
          id: 'my-spanish-audio-track',
          kind: 'translation',
          label: 'Spanish',
          language: 'es'
        })
        player.audioTracks().addTrack(track)
        // Get the current player's AudioTrackList object.
        const audioTrackList = player.audioTracks()
        // Listen to the "change" event.
        audioTrackList.addEventListener('change', function() {
          // Log the currently enabled AudioTrack label.
          for (let i = 0; i < audioTrackList.length; i++) {
            const track = audioTrackList[i]
            if (track.enabled) {
              videojs.log(track.label)
              return
            }
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .bentle_video {
    margin-top: 50px;
    margin-bottom: 50px;
    h3 {
      height: 80px;
      text-align: center;
      line-height: 80px;
      font-weight: normal;
      background-color: #e5e5e5;
    }
    >img{
      width: 1200px;
      height: 400px;
    }
  }
  .list_bentle {
    margin-top: 50px;
    ul{
      li{
        height: 50px;
        line-height: 50px;
        border: 1px solid #ccc;
        margin: -1px;
        span {
          display: inline-block;
        }
        span:nth-child(1){
          width: 200px;
          text-align: center;
          color: #fff;
          border: 1px solid #ccc;
          background-color: #43cf7c;
        }
        span:nth-child(2){
          width: 800px;
          text-align: center;
        }
      }
    }
  }
  ul>li {
    list-style: none;
  }
  h1 {
    font-size: 26px;
    font-weight: normal;
  }
</style>