<script setup lang="ts">
// Header 組件 - 簡單佔位
</script>

<template>
  <header class="bg-bg-elevated border-b border-border-default">
    <div class="max-w-7xl mx-auto px-600 py-400">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-md">
          <h1 class="text-h3 font-bold text-text-default">
            Provider Admin
          </h1>
        </div>

        <nav class="flex items-center gap-md">
          <NuxtLink
            to="/"
            class="text-body-m text-text-secondary hover:text-text-default transition-colors"
          >
            首頁
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
