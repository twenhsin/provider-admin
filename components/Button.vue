<template>
  <button
    :class="buttonClass"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'solid',
    validator: (value) => ['solid', 'outline'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const buttonClass = computed(() => {
  const baseClasses = [
    // 佈局
    'inline-flex',
    'items-center',
    'justify-center',
    'cursor-pointer',
    'select-none',

    // 間距與尺寸 - 使用自訂 token
    'gap-icontext',           // 4px - icon 和文字間距
    'px-object_x',            // 16px - 左右 padding
    'h-md',                   // 40px - 按鈕高度

    // 字體
    'text-body-s',            // 14px
    'font-regular',           // 400

    // 圓角
    'rounded-lg',             // 8px

    // 動畫
    'transition-all',
    'duration-200',
  ]

  if (props.disabled) {
    baseClasses.push('cursor-not-allowed')
  }

  // Variant 樣式
  if (props.variant === 'solid') {
    baseClasses.push(
      // 顏色 - 使用 component tokens
      'bg-button-solid-background-default',
      'text-button-solid-text-default',
      'border-none'
    )

    if (!props.disabled) {
      baseClasses.push(
        'hover:bg-button-solid-background-hover',
        'active:bg-button-solid-background-active'
      )
    } else {
      baseClasses.push(
        'bg-button-solid-background-disabled',
        'text-button-solid-text-disabled'
      )
    }
  } else if (props.variant === 'outline') {
    baseClasses.push(
      'bg-transparent',
      'text-button-outline-text-default',
      'border',
      'border-button-outline-border-default'
    )

    if (!props.disabled) {
      baseClasses.push(
        'hover:border-button-outline-border-hover',
        'active:bg-button-outline-background-active'
      )
    } else {
      baseClasses.push(
        'border-button-outline-border-disabled',
        'text-button-outline-text-disabled'
      )
    }
  }

  return baseClasses.join(' ')
})

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>
