<script setup lang="ts">
// Footer 組件 - 簡單佔位
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-bg-elevated border-t border-border-default mt-auto">
    <div class="max-w-7xl mx-auto px-600 py-600">
      <div class="text-center text-body-s text-text-secondary">
        <p>&copy; {{ currentYear }} Provider Admin. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
