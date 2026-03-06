<template>
  <div class="min-h-screen bg-bg-page">
    <!-- Header Component -->
    <Header
      brand-name="Game Admin"
      user-name="張小明"
      user-role="系統管理員"
      :notification-count="3"
      @notification-click="handleNotificationClick"
      @user-click="handleUserClick"
    />

    <!-- Main Content -->
    <div class="p-wrap">
      <div class="max-w-4xl mx-auto">
      <!-- 標題 -->
      <div class="mb-gap-section_y">
        <h1 class="text-heading-h1 font-bold text-text-default mb-300">
          Button Component Test
        </h1>
        <p class="text-body-m text-text-secondary">
          測試自訂 Design Token 在 Button 組件中的應用
        </p>
      </div>

      <!-- 規格說明 -->
      <div class="card mb-gap-section_y">
        <h2 class="text-heading-h3 font-medium text-text-default mb-400">
          設計規格
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-400">
          <div class="bg-bg-subtle p-400 rounded-lg">
            <div class="text-text-secondary text-body-s mb-200">Height</div>
            <div class="text-text-default text-body-l font-medium">40px</div>
            <div class="text-text-secondary text-body-xs mt-100">h-md</div>
          </div>
          <div class="bg-bg-subtle p-400 rounded-lg">
            <div class="text-text-secondary text-body-s mb-200">Padding X</div>
            <div class="text-text-default text-body-l font-medium">16px</div>
            <div class="text-text-secondary text-body-xs mt-100">px-object-x</div>
          </div>
          <div class="bg-bg-subtle p-400 rounded-lg">
            <div class="text-text-secondary text-body-s mb-200">Icon Gap</div>
            <div class="text-text-default text-body-l font-medium">4px</div>
            <div class="text-text-secondary text-body-xs mt-100">gap-icontext</div>
          </div>
        </div>
      </div>

      <!-- Solid Variant -->
      <div class="card mb-gap-section_y">
        <h2 class="text-heading-h3 font-medium text-text-default mb-400">
          Solid Variant
        </h2>
        <div class="flex flex-wrap gap-btngroup_x items-center">
          <Button variant="solid" @click="handleClick('Solid Default')">
            Solid Button
          </Button>

          <Button variant="solid" @click="handleClick('Solid with Icon')">
            <template #icon-left>
              <svg class="w-icon-sm h-icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </template>
            With Icon
          </Button>

          <Button variant="solid" disabled>
            Disabled
          </Button>
        </div>

        <div class="mt-400 text-body-s text-text-secondary">
          狀態：Default → Hover → Active → Disabled
        </div>
      </div>

      <!-- Outline Variant -->
      <div class="card mb-gap-section_y">
        <h2 class="text-heading-h3 font-medium text-text-default mb-400">
          Outline Variant
        </h2>
        <div class="flex flex-wrap gap-btngroup_x items-center">
          <Button variant="outline" @click="handleClick('Outline Default')">
            Outline Button
          </Button>

          <Button variant="outline" @click="handleClick('Outline with Icon')">
            <template #icon-left>
              <svg class="w-icon-sm h-icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </template>
            With Icon
          </Button>

          <Button variant="outline" disabled>
            Disabled
          </Button>
        </div>

        <div class="mt-400 text-body-s text-text-secondary">
          狀態：Default → Hover → Active → Disabled
        </div>
      </div>

      <!-- 互動測試 -->
      <div class="card mb-gap-section_y">
        <h2 class="text-heading-h3 font-medium text-text-default mb-400">
          互動測試
        </h2>
        <div class="bg-bg-subtle p-400 rounded-lg">
          <div class="text-text-secondary text-body-s mb-200">最後點擊：</div>
          <div class="text-text-default text-body-m font-medium">
            {{ lastClicked || '尚未點擊任何按鈕' }}
          </div>
        </div>
      </div>

      <!-- Token 使用說明 -->
      <div class="card">
        <h2 class="text-heading-h3 font-medium text-text-default mb-400">
          使用的 Design Tokens
        </h2>
        <div class="space-y-300">
          <div class="flex items-start gap-300">
            <div class="text-text-primary text-body-s font-medium min-w-[200px]">
              gap-icontext
            </div>
            <div class="text-text-secondary text-body-s">
              Icon 和文字之間的間距 (4px)
            </div>
          </div>
          <div class="flex items-start gap-300">
            <div class="text-text-primary text-body-s font-medium min-w-[200px]">
              px-object_x
            </div>
            <div class="text-text-secondary text-body-s">
              按鈕左右內距 (16px)
            </div>
          </div>
          <div class="flex items-start gap-300">
            <div class="text-text-primary text-body-s font-medium min-w-[200px]">
              h-md
            </div>
            <div class="text-text-secondary text-body-s">
              標準按鈕高度 (40px)
            </div>
          </div>
          <div class="flex items-start gap-300">
            <div class="text-text-primary text-body-s font-medium min-w-[200px]">
              bg-button-solid-*
            </div>
            <div class="text-text-secondary text-body-s">
              Solid 按鈕的背景色 (default/hover/active/disabled)
            </div>
          </div>
          <div class="flex items-start gap-300">
            <div class="text-text-primary text-body-s font-medium min-w-[200px]">
              border-button-outline-*
            </div>
            <div class="text-text-secondary text-body-s">
              Outline 按鈕的邊框色 (default/hover/disabled)
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from '~/components/Button.vue'
import Header from '~/components/Header.vue'

const lastClicked = ref('')

const handleClick = (buttonName) => {
  lastClicked.value = `${buttonName} - ${new Date().toLocaleTimeString()}`
  console.log('Button clicked:', buttonName)
}

const handleNotificationClick = () => {
  console.log('Notification clicked')
  alert('通知功能：您有 3 則未讀通知')
}

const handleUserClick = () => {
  console.log('User menu clicked')
  alert('用戶選單已點擊')
}
</script>
