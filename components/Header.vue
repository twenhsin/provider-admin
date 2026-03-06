<template>
  <header class="bg-header-container-background border-b border-border-default">
    <div class="w-full px-header py-header">
      <div class="flex items-center justify-between w-full">
        <!-- Left Group: Logo + Brand -->
        <div class="flex items-center gap-icontext">
          <!-- Logo Icon -->
          <div class="w-icon-md h-icon-md flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-full h-full text-header-logo-icon"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" opacity="0.7" />
            </svg>
          </div>

          <!-- Brand Text -->
          <h1 class="text-header-logo-text text-body_m font-medium leading-flat tracking-loose">
            {{ brandName }}
          </h1>
        </div>

        <!-- Right Group: Notification + User Info -->
        <div class="flex items-center gap-objectgroup_x">
          <!-- Notification Box -->
          <div class="flex items-center gap-300">
            <!-- Notification Button -->
            <button
              class="relative w-700 h-700 flex items-center justify-center rounded-lg
                     text-header-action-icon-default
                     hover:text-header-action-icon-hover hover:bg-header-action-background-active
                     active:text-header-action-icon-active
                     transition-colors duration-200"
              :aria-label="notificationLabel"
              @click="handleNotificationClick"
            >
              <svg
                class="w-icon-md h-icon-md"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>

              <!-- Notification Badge -->
              <span
                v-if="notificationCount > 0"
                class="absolute top-100 right-100 w-400 h-400
                       bg-bg-primary text-text-default text-[10px] font-medium
                       rounded-full flex items-center justify-center
                       leading-flat"
              >
                {{ notificationCount > 9 ? '9+' : notificationCount }}
              </span>
            </button>

            <!-- Divider (hidden on mobile) -->
            <div
              class="hidden md:block w-[1px] h-600 bg-border-default"
              aria-hidden="true"
            />
          </div>

          <!-- User Block -->
          <button
            class="flex items-center gap-300
                   hover:opacity-80 active:opacity-60
                   transition-opacity duration-200
                   py-100 px-300 -mx-300 rounded-lg"
            :aria-label="userMenuLabel"
            @click="handleUserClick"
          >
            <!-- User Info (hidden on mobile) -->
            <div class="hidden md:flex flex-col text-right gap-100">
              <div class="text-header-user-name text-body_m font-medium leading-flat tracking-loose">
                {{ userName }}
              </div>
              <div class="text-header-user-role text-body_s font-regular leading-flat tracking-loose">
                {{ userRole }}
              </div>
            </div>

            <!-- Avatar -->
            <div class="w-700 h-700 rounded-full overflow-hidden flex-shrink-0 bg-bg-subtle">
              <img
                v-if="userAvatar"
                :src="userAvatar"
                :alt="userName"
                class="w-full h-full object-cover"
              />
              <!-- Fallback Avatar -->
              <div
                v-else
                class="w-full h-full flex items-center justify-center
                       text-header-user-name text-body_l font-medium bg-bg-primary"
              >
                {{ userInitials }}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  brandName: {
    type: String,
    default: 'Game Admin'
  },
  userName: {
    type: String,
    default: 'John Doe'
  },
  userRole: {
    type: String,
    default: 'Administrator'
  },
  userAvatar: {
    type: String,
    default: ''
  },
  notificationCount: {
    type: Number,
    default: 0
  },
  notificationLabel: {
    type: String,
    default: 'Notifications'
  },
  userMenuLabel: {
    type: String,
    default: 'User menu'
  }
})

const emit = defineEmits(['notification-click', 'user-click'])

// 計算使用者名稱首字母（用於 fallback avatar）
const userInitials = computed(() => {
  return props.userName
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const handleNotificationClick = () => {
  emit('notification-click')
}

const handleUserClick = () => {
  emit('user-click')
}
</script>
