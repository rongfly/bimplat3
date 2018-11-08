<template>
    <cesium-viewer class="viewer" :animation="animation" :timeline="timeline" :camera="camera" @ready="ready">
    </cesium-viewer>
</template>
<script>
  export default {
    data () {
      return {
        animation: true,
        timeline: true,
        camera: {
          position: {
            longitude: 82.4766138805,//经度
            latitude: 43.8075855497,//维度
            height: 10000//高度
          },
          heading: 360,
          pitch: -90,
          roll: 0
        }
      }
    },
    methods: {
      ready (cesiumInstance) {
        console.log(cesiumInstance)
        // let imageryLayers = cesiumInstance.viewer.imageryLayers
        // let imagery = new cesiumInstance.Cesium.TiandituImageryProvider({
        // mapStyle : cesiumInstance.Cesium.TiandituMapsStyle.IMG_C
        // })
        // imageryLayers.addImageryProvider(imagery)
        // let labelImagery = new cesiumInstance.Cesium.TiandituImageryProvider({
        //   mapStyle : cesiumInstance.Cesium.TiandituMapsStyle.CIA_C
        // })
        // imageryLayers.addImageryProvider(labelImagery)
        // cesiumInstance.viewer.entities.add({
        //   id: '成都欢迎你',
        //   position: cesiumInstance.Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
        //   billboard: new cesiumInstance.Cesium.BillboardGraphics({
        //     image: 'https://zouyaoji.top/vue-cesium/favicon.png',
        //     scale: 0.1
        //   }),
        //   label: new cesiumInstance.Cesium.LabelGraphics ({
        //     text: 'Hello Word',
        //     font: '24px sans-serif',
        //     horizontalOrigin: 1,
        //     outlineColor: new cesiumInstance.Cesium.Color(0, 0, 0, 1),
        //     outlineWidth: 2,
        //     pixelOffset: new cesiumInstance.Cesium.Cartesian2(17, -5),
        //     style: cesiumInstance.Cesium.LabelStyle.FILL
        //   })
        // })
      }
    }
  }
</script>

<style>
    .viewer {
        width: 100%;
        height: 100vh;
    }
</style>