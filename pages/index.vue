<script setup lang="ts">
import Header from '~/components/Header.vue'
import SideMenu from '~/components/SideMenu.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'

const handleNotificationClick = () => {
  console.log('Notification clicked')
  alert('通知功能：您有 3 則未讀通知')
}

const handleUserClick = () => {
  console.log('User menu clicked')
  alert('用戶選單已點擊')
}

const handleMenuClick = (menuId: string) => {
  console.log('Menu clicked:', menuId)
}

const handleThemeToggle = (isDark: boolean) => {
  console.log('Theme toggled:', isDark)
}

const handleCollapseToggle = (isCollapsed: boolean) => {
  console.log('Sidebar collapsed:', isCollapsed)
}

// Breadcrumbs data
const breadcrumbItems = [
  { label: '首頁', href: '/' },
  { label: '遊戲管理', href: '/games' },
  { label: '遊戲廠商' }
]

const handleBreadcrumbClick = ({ item, index }: { item: any, index: number }) => {
  console.log('Breadcrumb clicked:', item, index)
}
</script>

<template>
  <!-- 最外層：垂直布局 -->
  <div class="flex flex-col h-screen bg-bg-page overflow-hidden">
    <!-- Header: 100% 寬度，橫跨整個螢幕 -->
    <Header
      brand-name="Game Admin"
      user-name="張小明"
      user-role="系統管理員"
      :notification-count="3"
      @notification-click="handleNotificationClick"
      @user-click="handleUserClick"
    />

    <!-- 下方：水平布局（SideMenu + 內容區） -->
    <div class="flex flex-row flex-1 overflow-hidden">
      <!-- 左側：SideMenu（固定寬度） -->
      <SideMenu
        @menu-click="handleMenuClick"
        @theme-toggle="handleThemeToggle"
        @collapse-toggle="handleCollapseToggle"
      />

      <!-- 右側：內容區（填滿剩餘空間） -->
      <main class="flex-1 overflow-y-auto bg-bg-page">
        <!-- Container -->
        <div class="px-container py-container">
          <!-- Breadcrumbs -->
          <Breadcrumbs
            :items="breadcrumbItems"
            @item-click="handleBreadcrumbClick"
          />

          <!-- TODO: PageHeader -->
          <!-- TODO: Search-Tool_wrapper -->
          <!-- TODO: TableSection -->
        </div>
      </main>
    </div>
  </div>
</template>
