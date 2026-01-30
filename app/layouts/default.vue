<!-- layouts/default.vue -->
<template>
  <div>
    <!-- 引入 Header 組件 -->
    <Header></Header>

    <!-- 頁面內容 -->
    <main>
      <slot></slot>
    </main>

    <!-- 引入 Footer 組件 -->
    <Footer></Footer>
  </div>
</template>
  <script setup>
  // 引入 header 和 footer 組件
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  </script>