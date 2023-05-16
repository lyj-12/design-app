<script lang='ts' setup>
import { getHotMaterials } from '~/api/material'

const page = {
  pageNum: 1,
  pageSize: 20,
}
function init() {
  const res = getHotMaterials(page)
  console.log(res)
}
init()
</script>

<template>
  <div> material </div>
</template>

<style lang='scss' scoped>

</style>
