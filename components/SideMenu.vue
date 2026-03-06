<template>
  <aside
    class="flex flex-col justify-between h-full bg-bg-subtle border-r border-border-default"
    :class="isCollapsed ? 'w-[80px]' : 'w-[256px]'"
  >
    <!-- Top Container -->
    <div class="flex flex-col gap-600 px-600 py-600">
      <!-- Header Group -->
      <div v-if="!isCollapsed" class="flex items-start justify-between">
        <div class="flex flex-col gap-200">
          <h2 class="text-h2 font-bold text-text-default tracking-looser leading-comfortable">
            {{ title }}
          </h2>
          <p class="text-body_s font-regular text-text-secondary tracking-relaxed leading-comfortable">
            {{ version }}
          </p>
        </div>

        <!-- Collapse Toggle Icon -->
        <button
          class="flex items-center justify-center h-icon-lg px-object_xs rounded-lg
                 text-menu-item-icon-default
                 hover:bg-menu-item-background-hover hover:text-menu-item-text-interactive
                 transition-all duration-200"
          @click="toggleCollapse"
          aria-label="收合選單"
        >
          <svg
            class="w-icon-md h-icon-md flex-shrink-0 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <!-- Logo only when collapsed -->
      <div v-else class="flex items-center justify-center">
        <button
          class="w-icon-lg h-icon-lg flex items-center justify-center rounded-lg
                 text-icon-primary hover:bg-menu-item-background-hover
                 transition-colors duration-200"
          @click="toggleCollapse"
          aria-label="展開選單"
        >
          <svg
            class="w-icon-md h-icon-md transition-transform duration-200 rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <!-- Nav List -->
      <nav class="flex flex-col gap-btngroup_y">
        <button
          v-for="item in menuItems"
          :key="item.id"
          class="flex items-center gap-icontext rounded-lg h-md
                 transition-all duration-200"
          :class="[
            isCollapsed ? 'justify-center px-300' : 'px-object_x',
            item.active
              ? 'bg-menu-item-background-active text-menu-item-text-interactive'
              : 'bg-menu-item-background-default text-menu-item-text-default hover:bg-menu-item-background-hover hover:text-menu-item-text-interactive'
          ]"
          @click="handleMenuClick(item.id)"
        >
          <!-- Icon -->
          <component
            :is="item.icon"
            class="w-icon-md h-icon-md flex-shrink-0"
            :class="item.active ? 'text-menu-item-icon-interactive' : 'text-menu-item-icon-default'"
          />

          <!-- Text (hidden when collapsed) -->
          <span
            v-if="!isCollapsed"
            class="text-body_s font-regular leading-flat tracking-loose"
          >
            {{ item.label }}
          </span>
        </button>
      </nav>
    </div>

    <!-- Bottom Container -->
    <div class="flex flex-col gap-300 px-600 py-600 border-t border-border-default">
      <!-- Theme Switch -->
      <button
        class="flex items-center gap-icontext rounded-lg h-md
               bg-menu-item-background-default text-menu-item-text-default
               hover:text-text-default
               transition-all duration-200"
        :class="isCollapsed ? 'justify-center px-300' : 'px-object_x'"
        @click="handleThemeToggle"
      >
        <!-- Theme Icon -->
        <svg
          class="w-icon-md h-icon-md flex-shrink-0 transition-colors duration-200"
          :class="isDarkMode ? 'text-yellow-500' : 'text-menu-item-icon-default'"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            v-if="isDarkMode"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        <!-- Text (hidden when collapsed) -->
        <span v-if="!isCollapsed" class="text-body_s font-regular leading-flat tracking-loose">
          {{ isDarkMode ? '淺色模式' : '深色模式' }}
        </span>
      </button>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue'
import IconProvider from '~/app/assets/icons/IconProvider.vue'
import IconCategory from '~/app/assets/icons/IconCategory.vue'
import IconDashboard from '~/app/assets/icons/IconDashboard.vue'

const props = defineProps({
  title: {
    type: String,
    default: '管理後台'
  },
  version: {
    type: String,
    default: 'Version 2.4.0'
  },
  activeMenuId: {
    type: String,
    default: 'providers'
  },
  defaultCollapsed: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['menu-click', 'theme-toggle', 'collapse-toggle'])

const isCollapsed = ref(props.defaultCollapsed)
const isDarkMode = ref(true)

// Menu items configuration
const menuItems = computed(() => [
  {
    id: 'providers',
    label: '遊戲廠商',
    icon: IconProvider,
    active: props.activeMenuId === 'providers'
  },
  {
    id: 'categories',
    label: '遊戲類別',
    icon: IconCategory,
    active: props.activeMenuId === 'categories'
  },
  {
    id: 'games',
    label: '遊戲列表',
    icon: IconDashboard,
    active: props.activeMenuId === 'games'
  }
])

const handleMenuClick = (menuId) => {
  emit('menu-click', menuId)
}

const handleThemeToggle = () => {
  isDarkMode.value = !isDarkMode.value
  emit('theme-toggle', isDarkMode.value)
}

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
  emit('collapse-toggle', isCollapsed.value)
}
</script>

<style scoped>
/* 确保侧边栏在移动设备上的处理 */
@media (max-width: 768px) {
  aside {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 40;
  }
}
</style>
