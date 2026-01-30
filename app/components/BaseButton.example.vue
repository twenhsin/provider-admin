<script setup lang="ts">
import BaseButton from './BaseButton.vue'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>

<template>
  <div class="p-600 bg-bg-page min-h-screen">
    <div class="max-w-4xl mx-auto space-y-600">
      <!-- Solid Variant -->
      <section class="space-y-300">
        <h2 class="text-h2 font-bold text-text-default">Solid Button</h2>

        <div class="flex gap-md items-center">
          <BaseButton variant="solid" @click="handleClick">
            Default
          </BaseButton>

          <BaseButton variant="solid" disabled>
            Disabled
          </BaseButton>
        </div>

        <p class="text-body-s text-text-secondary">
          Hover 和 Active 狀態會自動應用
        </p>
      </section>

      <!-- Outline Variant -->
      <section class="space-y-300">
        <h2 class="text-h2 font-bold text-text-default">Outline Button</h2>

        <div class="flex gap-md items-center">
          <BaseButton variant="outline" @click="handleClick">
            Default
          </BaseButton>

          <BaseButton variant="outline" disabled>
            Disabled
          </BaseButton>
        </div>

        <p class="text-body-s text-text-secondary">
          Hover 時邊框會變色，Active 時有背景色
        </p>
      </section>

      <!-- All States Demo -->
      <section class="space-y-300">
        <h2 class="text-h2 font-bold text-text-default">所有狀態展示</h2>

        <div class="grid grid-cols-2 gap-lg">
          <!-- Solid -->
          <div class="space-y-md">
            <h3 class="text-h3 font-medium text-text-default">Solid</h3>
            <div class="space-y-sm">
              <BaseButton variant="solid">Normal</BaseButton>
              <BaseButton variant="solid" disabled>Disabled</BaseButton>
            </div>
          </div>

          <!-- Outline -->
          <div class="space-y-md">
            <h3 class="text-h3 font-medium text-text-default">Outline</h3>
            <div class="space-y-sm">
              <BaseButton variant="outline">Normal</BaseButton>
              <BaseButton variant="outline" disabled>Disabled</BaseButton>
            </div>
          </div>
        </div>
      </section>

      <!-- With Icons Demo -->
      <section class="space-y-300">
        <h2 class="text-h2 font-bold text-text-default">含圖標範例</h2>

        <div class="flex gap-md items-center">
          <BaseButton variant="solid" @click="handleClick">
            <span class="flex items-center gap-sm">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              新增
            </span>
          </BaseButton>

          <BaseButton variant="outline" @click="handleClick">
            <span class="flex items-center gap-sm">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              取消
            </span>
          </BaseButton>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.space-y-sm > * + * {
  margin-top: var(--spacing-100);
}
</style>
