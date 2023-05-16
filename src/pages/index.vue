<script setup lang="ts">

</script>

<template>
  <div class="container">
    <header class="header">
      <!-- 网站Logo -->
      <a href="#" class="logo">
        This is a Logo!
      </a>
      <!-- 导航栏 -->
      <nav class="navbar">
        <a href="#" class="item" style="--i:1">Home</a>
        <a href="#" class="item" style="--i:2">About</a>
        <a href="#" class="item" style="--i:3">Skills</a>
        <a href="#" class="item" style="--i:4">Me</a>
        <router-link to="/about">
          关于
        </router-link>
        <router-link to="/login">
          登录 | 注册
        </router-link>
      </nav>
    </header>

    <!-- 主页部分 -->
    <section class="home">
      <!-- 主页内容 -->
      <div class="home-content">
        <!-- 主页标题 -->
        <h3>Hello,It's Me</h3>
        <h1>Welcome To Know Me!</h1>
        <!-- 主页小标题 -->
        <h3>
          个人介绍
          <!-- 小标题下的文本 -->
          <span class="text" />
        </h3>
        <!-- 主页正文 -->
        <p>越努力，越幸运！！！Lucky!</p>
        <!-- 主页按钮 -->
        <a href="#" class="btn">Learn More</a>
      </div>
      <!-- 主页图片 -->
      <div class="home-img">
        <img src="https://img.wxcha.com/m00/54/ed/69d26be4a4ac700e27c2d9cf85472b8c.jpg" alt="">
      </div>
    </section>
  </div>
</template>

<style scoped>
@import '~/asset/scss/home.scss';
</style>

<route lang="yaml">
meta:
  layout: home
</route>
