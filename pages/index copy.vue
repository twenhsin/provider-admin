<script setup lang="ts">
import IconAdd from '~/app/assets/icons/IconAdd.vue'

const handleClick = (action: string) => {
  console.log(`按鈕點擊: ${action}`)
}
</script>

<template>
  <div class="min-h-screen bg-page p-900">
    <div class="max-w-3xl mx-auto">
      <!-- 標題 -->
      <h1 class="text-h1 text-default mb-700">
        ✅ 按鈕測試 - 正確數值版本
      </h1>
      <p class="text-secondary mb-700">
        所有數值已修正為正確規格
      </p>

      <!-- Solid 按鈕展示 -->
      <section class="card mb-600">
        <h2 class="text-h3 text-default mb-400">
          Solid 按鈕（實心）
        </h2>
        <p class="text-caption text-secondary mb-400">
          背景色: <code class="px-100 py-50 bg-page rounded text-primary">#c51616</code>
        </p>

        <!-- 按鈕範例 -->
        <div class="flex flex-wrap gap-300 mb-400">
          <button class="btn-solid" @click="handleClick('純文字按鈕')">
            純文字按鈕
          </button>

          <button class="btn-solid" @click="handleClick('帶圖示')">
            <IconAdd />
            帶圖示
          </button>

          <button class="btn-solid" disabled>
            已停用
          </button>
        </div>

        <!-- 規格說明 -->
        <div class="bg-primary-muted border-2 border-primary rounded-lg p-400">
          <p class="text-body-m text-default font-medium mb-300">
            ✅ 正確數值確認:
          </p>

          <div class="space-y-200 text-caption text-secondary">
            <div>
              <strong class="text-default">尺寸 & 間距:</strong>
            </div>
            <ul class="space-y-100 ml-400">
              <li>• 按鈕高度: <code class="px-100 py-50 bg-page rounded text-[#48bb78]">40px</code> (dimension/height/md)</li>
              <li>• 左右 Padding: <code class="px-100 py-50 bg-page rounded text-[#48bb78]">16px</code> (spacing/padding/xl)</li>
              <li>• Icon-文字間距: <code class="px-100 py-50 bg-page rounded text-[#48bb78]">4px</code> (spacing/gap/s)</li>
              <li>• 圓角: <code class="px-100 py-50 bg-page rounded text-[#48bb78]">8px</code> (borderRadius/interactive)</li>
            </ul>

            <div class="mt-300">
              <strong class="text-default">文字:</strong>
            </div>
            <ul class="space-y-100 ml-400">
              <li>• 字級: <code class="px-100 py-50 bg-page rounded text-[#48bb78]">14px</code> (typography/body/s/regular)</li>
              <li>• 字重: <code class="px-100 py-50 bg-page rounded text-[#48bb78]">400</code> (regular)</li>
              <li>• 行高: <code class="px-100 py-50 bg-page rounded text-[#48bb78]">20px</code></li>
            </ul>

            <div class="mt-300">
              <strong class="text-default">顏色:</strong>
            </div>
            <ul class="space-y-100 ml-400">
              <li>• 背景: <code class="px-100 py-50 bg-page rounded text-[#48bb78]">#c51616</code> (buttonSolidBackgroundDefault)</li>
              <li>• Hover: <code class="px-100 py-50 bg-page rounded text-[#48bb78]">#df3f3f</code> (buttonSolidBackgroundHover)</li>
              <li>• Active: <code class="px-100 py-50 bg-page rounded text-[#48bb78]">#8f0f0f</code> (buttonSolidBackgroundActive)</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Outline 按鈕展示 -->
      <section class="card mb-600">
        <h2 class="text-h3 text-default mb-400">
          Outline 按鈕（線框）
        </h2>
        <p class="text-caption text-secondary mb-400">
          邊框色: <code class="px-100 py-50 bg-page rounded text-primary">#c51616</code>
        </p>

        <!-- 按鈕範例 -->
        <div class="flex flex-wrap gap-300 mb-400">
          <button class="btn-outline" @click="handleClick('純文字按鈕')">
            純文字按鈕
          </button>

          <button class="btn-outline" @click="handleClick('帶圖示')">
            <IconAdd />
            帶圖示
          </button>

          <button class="btn-outline" disabled>
            已停用
          </button>
        </div>

        <!-- 規格說明 -->
        <div class="bg-primary-muted border-2 border-primary rounded-lg p-400">
          <p class="text-body-m text-default font-medium mb-300">
            ✅ 與 Solid 相同的尺寸規格
          </p>

          <div class="text-caption text-secondary">
            <p class="mb-200">唯一差異:</p>
            <ul class="space-y-100 ml-400">
              <li>• 背景透明</li>
              <li>• 邊框: <code class="px-100 py-50 bg-page rounded text-[#48bb78]">2px solid #c51616</code></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 檢查清單 -->
      <section class="card border-2 border-[#48bb78]">
        <h2 class="text-h3 text-[#48bb78] mb-400">
          📋 正確數值檢查清單
        </h2>

        <ul class="space-y-200 text-body-m text-default mb-600">
          <li class="flex items-start gap-200">
            <span class="text-[#48bb78] font-bold flex-shrink-0">✓</span>
            <span>按鈕高度是 40px（不是 36px 或其他）</span>
          </li>
          <li class="flex items-start gap-200">
            <span class="text-[#48bb78] font-bold flex-shrink-0">✓</span>
            <span>左右 padding 是 16px（不是 24px）</span>
          </li>
          <li class="flex items-start gap-200">
            <span class="text-[#48bb78] font-bold flex-shrink-0">✓</span>
            <span>Icon 和文字間距是 4px（不是 8px）</span>
          </li>
          <li class="flex items-start gap-200">
            <span class="text-[#48bb78] font-bold flex-shrink-0">✓</span>
            <span>文字大小是 14px（不是 12px）</span>
          </li>
          <li class="flex items-start gap-200">
            <span class="text-[#48bb78] font-bold flex-shrink-0">✓</span>
            <span>圓角是 8px</span>
          </li>
          <li class="flex items-start gap-200">
            <span class="text-[#48bb78] font-bold flex-shrink-0">✓</span>
            <span>Solid 按鈕有紅色背景 (#c51616)</span>
          </li>
          <li class="flex items-start gap-200">
            <span class="text-[#48bb78] font-bold flex-shrink-0">✓</span>
            <span>Outline 按鈕有紅色邊框 (#c51616)</span>
          </li>
          <li class="flex items-start gap-200">
            <span class="text-[#48bb78] font-bold flex-shrink-0">✓</span>
            <span>圖示和文字是水平排列</span>
          </li>
          <li class="flex items-start gap-200">
            <span class="text-[#48bb78] font-bold flex-shrink-0">✓</span>
            <span>Hover 時顏色會變淺 (#df3f3f)</span>
          </li>
          <li class="flex items-start gap-200">
            <span class="text-[#48bb78] font-bold flex-shrink-0">✓</span>
            <span>Active 時顏色會變深 (#8f0f0f)</span>
          </li>
        </ul>

        <!-- 下一步提示 -->
        <div class="bg-page border border-border-default rounded-lg p-400">
          <p class="text-body-m text-default font-medium mb-300">
            💡 下一步：
          </p>
          <div class="space-y-200 text-caption text-secondary">
            <p>如果這個頁面顯示正確，請：</p>
            <ol class="space-y-100 ml-400">
              <li>1. 確認使用了正確的 <code class="px-100 py-50 bg-subtle rounded text-primary">tailwind.config.cjs</code></li>
              <li>2. 確認使用了正確的 <code class="px-100 py-50 bg-subtle rounded text-primary">main.css</code></li>
              <li>3. 重新啟動開發伺服器</li>
              <li>4. 使用 <code class="px-100 py-50 bg-subtle rounded text-primary">.btn-solid</code> 和 <code class="px-100 py-50 bg-subtle rounded text-primary">.btn-outline</code> classes</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
code {
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9em;
}
</style>
