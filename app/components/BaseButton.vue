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

// 動態計算 style（使用 CSS 變數）
const buttonStyles = computed(() => {
  const baseStyles: Record<string, string> = {}

  if (props.variant === 'solid') {
    if (props.disabled) {
      baseStyles.backgroundColor = 'var(--btn-solid-background-disabled)'
      baseStyles.color = 'var(--btn-solid-text-disabled)'
      baseStyles.border = 'none'
    } else {
      baseStyles.backgroundColor = 'var(--btn-solid-background-default)'
      baseStyles.color = 'var(--btn-solid-text-default)'
      baseStyles.border = 'none'
    }
  }

  if (props.variant === 'outline') {
    if (props.disabled) {
      baseStyles.backgroundColor = 'transparent'
      baseStyles.color = 'var(--btn-outline-text-disabled)'
      baseStyles.borderWidth = '1px'
      baseStyles.borderStyle = 'solid'
      baseStyles.borderColor = 'var(--btn-outline-border-disabled)'
    } else {
      baseStyles.backgroundColor = 'transparent'
      baseStyles.color = 'var(--btn-outline-text-default)'
      baseStyles.borderWidth = '1px'
      baseStyles.borderStyle = 'solid'
      baseStyles.borderColor = 'var(--btn-outline-border-default)'
    }
  }

  return baseStyles
})
</script>

<template>
  <button
    :type="type"
    :style="buttonStyles"
    :disabled="disabled"
    :class="[
      'base-button',
      `base-button--${variant}`,
      { 'base-button--disabled': disabled }
    ]"
    @click="handleClick"
  >
    <!-- Left Icon -->
    <span v-if="hasLeftIcon" class="base-button__icon">
      <slot name="leftIcon" />
    </span>

    <!-- 文字內容 -->
    <span v-if="hasDefaultSlot" class="base-button__text">
      <slot />
    </span>

    <!-- Right Icon -->
    <span v-if="hasRightIcon" class="base-button__icon">
      <slot name="rightIcon" />
    </span>
  </button>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  height: 40px;
  background: var(--color-red-500, red);
  color: white;
  padding: 0 16px;
  border: none;
  border-radius: 8px;
}
</style>
