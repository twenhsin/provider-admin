<template>
  <nav class="flex items-center" aria-label="Breadcrumb">
    <ol class="flex items-center gap-icontext">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="flex items-center gap-icontext"
      >
        <!-- Breadcrumb Item -->
        <component
          :is="item.href && index !== items.length - 1 ? 'a' : 'span'"
          :href="item.href"
          class="text-body_s font-regular leading-flat tracking-loose transition-colors duration-200"
          :class="
            index === items.length - 1
              ? 'text-text-default cursor-default'
              : 'text-text-secondary hover:text-text-default hover:font-medium cursor-pointer'
          "
          @click="handleClick(item, index)"
        >
          {{ item.label }}
        </component>

        <!-- Separator -->
        <span
          v-if="index < items.length - 1"
          class="text-text-secondary text-body_s"
          aria-hidden="true"
        >
          /
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
    // Example: [
    //   { label: '首頁', href: '/' },
    //   { label: '遊戲管理', href: '/games' },
    //   { label: '遊戲廠商' }
    // ]
  }
})

const emit = defineEmits(['item-click'])

const handleClick = (item, index) => {
  // Don't emit for current page (last item)
  if (index !== props.items.length - 1 && item.href) {
    emit('item-click', { item, index })
  }
}
</script>
