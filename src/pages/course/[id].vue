<script lang='ts' setup>
const route = useRoute()
const id = route.params.id
const url = ref('http://124.222.79.217:5000/gaw/G_1660640323927.E')
</script>

<template>
  <div class="stream-area">
    <!-- 左侧流 -->
    <div class="video-stream">
      <TheVideo :video-url="url" />
      courseId：{{ id }}
      <!-- <CourseDetail :course-detail=""/> -->
    </div>

    <!-- 右侧流 -->
    <div class="chat-stream">
      xxx
    </div>
  </div>
</template>

<style lang='scss' scoped>

</style>
