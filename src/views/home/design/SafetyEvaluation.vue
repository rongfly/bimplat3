<template>
  <div>
    <h1>公路项目安全性评价</h1><br><br>
    <p style="font-size: 20px">中咨集团在公路项目安全性评价上具有丰富的经验，主编/参编了多个安全性评价相关标准，在此基础上，
      开发了《中咨公路项目安全性评价系统》，在本项目中进行了应用，取得了较好的效果。</p>
    <div class="bentle_video">
      <h3>云南都香高速公路安全性评价</h3>
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
    name: "safetyevaluation",
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
  ul>li {
    list-style: none;
  }
  h1 {
    font-size: 26px;
    font-weight: normal;
  }
</style>
