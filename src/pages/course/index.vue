<script lang='ts' setup>
import { getCourseList } from '~/api/course'

const courseList = ref([])
const page = {
  pageNum: 1,
  pageSize: 20,
}
function init() {
  const res = getCourseList(page)
  console.log(res)
  console.log(JSON.stringify(res))
  courseList.value = res.result
}
onMounted(() => {
  init()
})
</script>

<template>
  <div>
    课程
    {{ courseList }}
  </div>
</template>

<style lang='scss' scoped>

</style>
