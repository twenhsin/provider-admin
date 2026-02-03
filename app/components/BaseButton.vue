<script setup lang="ts">
import { computed, useSlots } from 'vue'

// Props 定義
interface Props {
  variant?: 'solid' | 'outline'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'solid',
  disabled: false,
  type: 'button'
})

// Emit 定義
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// 檢查插槽
const slots = useSlots()
const hasLeftIcon = computed(() => !!slots.leftIcon)
const hasRightIcon = computed(() => !!slots.rightIcon)
const hasDefaultSlot = computed(() => !!slots.default)

// 處理點擊事件
const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

// 動態計算 Tailwind classes
const buttonClasses = computed(() => {
  const classes = [
    // 基礎樣式
    'inline-flex items-center justify-center',
    'px-600 py-300 rounded-md',
    'text-body-m font-medium',
    'transition-all duration-200',
    // focus：直接用 config 裡定義的 ringColor 和 ringOffsetColor
    'focus:outline-none focus:ring-2 focus:ring-focus focus:ring-offset-2 focus:ring-offset-page',
  ]

  // Solid 按鈕
  if (props.variant === 'solid') {
    if (props.disabled) {
      classes.push(
        'bg-btn-solid-disabled',
        'text-btn-solid-text-disabled',
        'cursor-not-allowed'
      )
    } else {
      classes.push(
        'bg-btn-solid',
        'text-btn-solid-text',
        'hover:bg-btn-solid-hover',
        'active:bg-btn-solid-active',
        'cursor-pointer'
      )
    }
  }

  // Outline 按鈕
  if (props.variant === 'outline') {
    if (props.disabled) {
      classes.push(
        'bg-transparent',
        'text-btn-outline-text-disabled',
        'border-2 border-btn-outline-border-disabled',
        'cursor-not-allowed'
      )
    } else {
      classes.push(
        'bg-transparent',
        'text-btn-outline-text',
        'border-2 border-btn-outline-border',
        'hover:border-btn-outline-border-hover',
        // 修正：之前是 btn-outline-active，config 裡的 key 是 btn-outline-active
        'active:bg-btn-outline-active',
        'cursor-pointer'
      )
    }
  }

  // 純 icon 按鈕（沒有文字）→ padding 不同
  if (!hasDefaultSlot.value) {
    // 移除預設的 px-600 py-300，改為方形 padding
    const idx = classes.indexOf('px-600 py-300 rounded-md')
    if (idx !== -1) classes[idx] = 'p-200 rounded-md'
  }

  return classes
})

// Icon 樣式
const iconClasses = computed(() => {
  // 固定 24x24，用 style 而非 w-/h- utility（避免 spacing 冲突）
  const classes = ['flex items-center justify-center']

  if (props.variant === 'solid') {
    classes.push(props.disabled ? 'text-btn-solid-icon-disabled' : 'text-btn-solid-icon')
  } else {
    classes.push(props.disabled ? 'text-btn-outline-icon-disabled' : 'text-btn-outline-icon')
  }

  return classes
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    @click="handleClick"
  >
    <!-- Left Icon -->
    <span v-if="hasLeftIcon" :class="[iconClasses, hasDefaultSlot && 'mr-200']">
      <slot name="leftIcon" />
    </span>

    <!-- 文字內容 -->
    <span v-if="hasDefaultSlot">
      <slot />
    </span>

    <!-- Right Icon -->
    <span v-if="hasRightIcon" :class="[iconClasses, hasDefaultSlot && 'ml-200']">
      <slot name="rightIcon" />
    </span>
  </button>
</template>

<style scoped>
/* Icon 尺寸確保為 24x24 */
:deep(svg) {
  width: 24px;
  height: 24px;
}
</style>
