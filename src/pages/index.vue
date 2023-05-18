<script lang='ts' setup>

</script>

<template>
  <div class="anim header" style="--delay: 0s">
    发现
  </div>
  <index-blog />
  <index-video />
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
