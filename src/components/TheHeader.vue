<script lang='ts' setup>

</script>

<template>
  <div class="header h-15 flex items-center bg-black text-light-50">
    <!-- 网站Logo -->
    <router-link to="/" class="ml-6">
      This is a Logo!
    </router-link>
    <div class="flex-grow" />
    <!-- 导航栏 -->
    <nav class="navbar mr-6">
      <router-link to="/about" class="ml-2">
        关于
      </router-link>
      <router-link to="/login" class="ml-2">
        登录 | 注册
      </router-link>
    </nav>
  </div>
</template>

<style lang='scss' scoped>
.navbar a:hover,
.navbar a:active {
  color: #b7b2a9;
  /* 设置字体颜色 */
}
</style>
