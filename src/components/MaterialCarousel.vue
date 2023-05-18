<template>
  <div class="block text-center">
    <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item" />
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
.el-carousel {
  &__container {
    height: 200px;
  }

  &__item {
    background-position: 25%;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;

    &:nth-child(n) {
      background-image: url(~/asset/img/material/material_bg_ban_1.jpg);
      background-size: cover;
    }

    &:nth-child(2n) {
      background-image: url(~/asset/img/material/material_bg_ban_2.jpg);
      background-size: cover;
    }

    &:nth-child(3n) {
      background-image: url(~/asset/img/material/material_bg_ban_3.jpg);
      background-size: cover;
    }

    &:nth-child(4n) {
      background-image: url(~/asset/img/material/material_bg_ban_4.jpg);
      background-size: cover;
    }
  }
}
</style>
