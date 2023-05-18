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
  <div class="header anim" style="--delay: 0s">
    素材
  </div>

  <material-carousel-component />

  <material-recommend-com />
</template>

<style lang='scss' scoped>
.header {
  font-size: 30px;
  color: #fff;
  font-weight: 700;
  padding-bottom: 20px;
  position: sticky;
  top: 0;
  left: 0;
  background: linear-gradient(
    to bottom,
    #1f1d2b 0%,
    #1f1d2b 78%,
    rgb(31 29 43 / 0%) 100%
  );
  z-index: 11;
}
</style>
