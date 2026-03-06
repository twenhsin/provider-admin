<template>
  <div class="flex h-screen bg-bg-page overflow-hidden">
    <!-- SideMenu -->
    <SideMenu
      :active-menu-id="activeMenu"
      @menu-click="handleMenuClick"
      @theme-toggle="handleThemeToggle"
      @collapse-toggle="handleCollapseToggle"
    />

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <Header
        brand-name="Game Admin"
        user-name="張小明"
        user-role="系統管理員"
        :notification-count="3"
        @notification-click="handleNotificationClick"
        @user-click="handleUserClick"
      />

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto p-wrap">
        <div class="max-w-6xl mx-auto">
          <!-- 标题 -->
          <div class="mb-gap-section_y">
            <h1 class="text-h1 font-bold text-text-default mb-300">
              {{ pageTitle }}
            </h1>
            <p class="text-body_m text-text-secondary">
              測試 SideMenu + Header 完整布局
            </p>
          </div>

          <!-- 當前選單狀態 -->
          <div class="card mb-gap-section_y">
            <h2 class="text-h3 font-medium text-text-default mb-400">
              當前狀態
            </h2>
            <div class="space-y-300">
              <div class="flex items-center gap-300">
                <span class="text-text-secondary text-body_s min-w-[120px]">選中的選單：</span>
                <span class="text-text-default text-body_m font-medium">{{ activeMenuLabel }}</span>
              </div>
              <div class="flex items-center gap-300">
                <span class="text-text-secondary text-body_s min-w-[120px]">側邊欄狀態：</span>
                <span class="text-text-default text-body_m font-medium">
                  {{ isMenuCollapsed ? '已收合' : '已展開' }}
                </span>
              </div>
              <div class="flex items-center gap-300">
                <span class="text-text-secondary text-body_s min-w-[120px]">主題模式：</span>
                <span class="text-text-default text-body_m font-medium">
                  {{ isDarkMode ? '深色模式' : '淺色模式' }}
                </span>
              </div>
              <div class="flex items-center gap-300">
                <span class="text-text-secondary text-body_s min-w-[120px]">最後操作：</span>
                <span class="text-text-default text-body_m">
                  {{ lastAction || '尚無操作' }}
                </span>
              </div>
            </div>
          </div>

          <!-- SideMenu 規格說明 -->
          <div class="card mb-gap-section_y">
            <h2 class="text-h3 font-medium text-text-default mb-400">
              SideMenu 設計規格
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-400">
              <div class="bg-bg-subtle p-400 rounded-lg">
                <div class="text-text-secondary text-body_s mb-200">寬度</div>
                <div class="text-text-default text-body_l font-medium">256px（展開）/ 80px（收合）</div>
              </div>
              <div class="bg-bg-subtle p-400 rounded-lg">
                <div class="text-text-secondary text-body_s mb-200">Padding</div>
                <div class="text-text-default text-body_l font-medium">24px（px-600 / py-600）</div>
              </div>
              <div class="bg-bg-subtle p-400 rounded-lg">
                <div class="text-text-secondary text-body_s mb-200">Menu Item 圓角</div>
                <div class="text-text-default text-body_l font-medium">8px（rounded-lg）</div>
              </div>
              <div class="bg-bg-subtle p-400 rounded-lg">
                <div class="text-text-secondary text-body_s mb-200">Icon 尺寸</div>
                <div class="text-text-default text-body_l font-medium">24px（w-icon-md）</div>
              </div>
            </div>
          </div>

          <!-- 使用的 Design Tokens -->
          <div class="card">
            <h2 class="text-h3 font-medium text-text-default mb-400">
              使用的 Design Tokens
            </h2>
            <div class="space-y-300">
              <div class="flex items-start gap-300">
                <div class="text-text-primary text-body_s font-medium min-w-[220px]">
                  bg-bg-subtle
                </div>
                <div class="text-text-secondary text-body_s">
                  側邊欄背景色 (#151C2B)
                </div>
              </div>
              <div class="flex items-start gap-300">
                <div class="text-text-primary text-body_s font-medium min-w-[220px]">
                  menu-item-background-*
                </div>
                <div class="text-text-secondary text-body_s">
                  選單項目的背景色（default/hover/active）
                </div>
              </div>
              <div class="flex items-start gap-300">
                <div class="text-text-primary text-body_s font-medium min-w-[220px]">
                  menu-item-text-*
                </div>
                <div class="text-text-secondary text-body_s">
                  選單項目的文字色（default/interactive）
                </div>
              </div>
              <div class="flex items-start gap-300">
                <div class="text-text-primary text-body_s font-medium min-w-[220px]">
                  gap-icontext
                </div>
                <div class="text-text-secondary text-body_s">
                  Icon 和文字間距（4px）
                </div>
              </div>
              <div class="flex items-start gap-300">
                <div class="text-text-primary text-body_s font-medium min-w-[220px]">
                  text-body_s
                </div>
                <div class="text-text-secondary text-body_s">
                  選單文字大小（14px）
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SideMenu from '~/components/SideMenu.vue'
import Header from '~/components/Header.vue'

const activeMenu = ref('providers')
const isMenuCollapsed = ref(false)
const isDarkMode = ref(true)
const lastAction = ref('')

const menuLabels = {
  providers: '遊戲廠商',
  categories: '遊戲類別',
  games: '遊戲列表'
}

const pageTitle = computed(() => {
  return menuLabels[activeMenu.value] || '首頁'
})

const activeMenuLabel = computed(() => {
  return menuLabels[activeMenu.value] || '未知'
})

const handleMenuClick = (menuId) => {
  activeMenu.value = menuId
  lastAction.value = `切換到「${menuLabels[menuId]}」選單 - ${new Date().toLocaleTimeString()}`
  console.log('Menu clicked:', menuId)
}

const handleThemeToggle = (darkMode) => {
  isDarkMode.value = darkMode
  lastAction.value = `切換到${darkMode ? '深色' : '淺色'}模式 - ${new Date().toLocaleTimeString()}`
  console.log('Theme toggled:', darkMode ? 'dark' : 'light')
}

const handleCollapseToggle = (collapsed) => {
  isMenuCollapsed.value = collapsed
  lastAction.value = `側邊欄${collapsed ? '收合' : '展開'} - ${new Date().toLocaleTimeString()}`
  console.log('Sidebar collapsed:', collapsed)
}

const handleNotificationClick = () => {
  lastAction.value = `點擊通知按鈕 - ${new Date().toLocaleTimeString()}`
  console.log('Notification clicked')
  alert('通知功能：您有 3 則未讀通知')
}

const handleUserClick = () => {
  lastAction.value = `點擊用戶選單 - ${new Date().toLocaleTimeString()}`
  console.log('User menu clicked')
  alert('用戶選單已點擊')
}
</script>
