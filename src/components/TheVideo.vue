<script setup lang="ts">
const props = defineProps({
  videoUrl: {
    type: String,
    required: true,
  },
})
const { videoUrl } = toRefs(props)
</script>

<template>
  <video
    class="video-js vjs-default-skin anim"
    width="640"
    height="440"
    controls
    preload="auto"
    poster="https://ts3.cn.mm.bing.net/th?id=OVP.PWJ78Rt4AlHhvD4PSZrLlgEsCo&w=268&h=150&c=7&rs=1&qlt=90&o=5&dpr=1.25&pid=2.1"
    data-setup="{ &quot;aspectRatio&quot;:&quot;940:620&quot;, &quot;playbackRates&quot;: [0.5, 1, 1.5, 2] }"
  >
    <!-- http://124.222.79.217:5000/gaw/G_1660640323927.E -->
    <source
      :src="videoUrl"
      type="video/mp4"
    >
  </video>
</template>

<style lang="scss" scoped>
video {
  width: 100%;
  min-height: 414px;
  border-radius: 20px;
}
</style>
