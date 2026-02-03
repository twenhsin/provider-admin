<script setup lang="ts">
const handleClick = (action: string) => {
  console.log(`按鈕點擊: ${action}`)
}
</script>

<template>
  <div class="min-h-screen bg-page p-600">
    <div class="max-w-4xl mx-auto space-y-800">
      
      <!-- 標題 -->
      <header class="text-center space-y-300">
        <h1 class="text-h1 text-default">按鈕系統測試</h1>
        <p class="text-body-m text-secondary">使用 main.css 預製 classes</p>
      </header>

      <!-- Solid 按鈕測試 -->
      <section class="card space-y-400">
        <div>
          <h2 class="text-h2 text-default mb-200">Solid 按鈕（實心）</h2>
          <p class="text-body-s text-secondary">背景色 #c51616</p>
        </div>

        <div class="flex flex-wrap gap-300">
          <!-- 使用預製 class -->
          <button class="btn-solid" @click="handleClick('預製 class')">
            預製 class
          </button>

          <!-- Disabled -->
          <button class="btn-solid" disabled>
            已停用
          </button>

          <!-- 帶 emoji icon -->
          <button class="btn-solid flex items-center gap-200" @click="handleClick('帶圖示')">
            <span>✓</span>
            確認
          </button>
        </div>

        <!-- Token 說明 -->
        <div class="p-400 bg-subtle rounded-lg border border-default">
          <p class="text-body-s text-secondary">
            使用 <code class="px-100 py-100 bg-page rounded text-primary">.btn-solid</code> class
          </p>
          <ul class="text-body-s text-secondary mt-200 space-y-100">
            <li>• 背景色: bg-btn-solid (#c51616)</li>
            <li>• Hover: bg-btn-solid-hover (#df3f3f)</li>
            <li>• Active: bg-btn-solid-active (#8f0f0f)</li>
            <li>• Disabled: bg-btn-solid-disabled (#71809633)</li>
          </ul>
        </div>
      </section>

      <!-- Outline 按鈕測試 -->
      <section class="card space-y-400">
        <div>
          <h2 class="text-h2 text-default mb-200">Outline 按鈕（線框）</h2>
          <p class="text-body-s text-secondary">邊框色 #c51616</p>
        </div>

        <div class="flex flex-wrap gap-300">
          <!-- 使用預製 class -->
          <button class="btn-outline" @click="handleClick('取消')">
            取消
          </button>

          <!-- Disabled -->
          <button class="btn-outline" disabled>
            已停用
          </button>

          <!-- 帶 emoji icon -->
          <button class="btn-outline flex items-center gap-200" @click="handleClick('返回')">
            <span>←</span>
            返回
          </button>
        </div>

        <!-- Token 說明 -->
        <div class="p-400 bg-subtle rounded-lg border border-default">
          <p class="text-body-s text-secondary">
            使用 <code class="px-100 py-100 bg-page rounded text-primary">.btn-outline</code> class
          </p>
          <ul class="text-body-s text-secondary mt-200 space-y-100">
            <li>• 邊框色: border-btn-outline-border (#c51616)</li>
            <li>• Hover: border-btn-outline-border-hover (#df3f3f)</li>
            <li>• Active: bg-btn-outline-active (#8f0f0f)</li>
            <li>• Disabled: border-btn-outline-border-disabled (#324467)</li>
          </ul>
        </div>
      </section>

      <!-- 狀態測試 -->
      <section class="card space-y-400">
        <h2 class="text-h2 text-default">互動狀態測試</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-600">
          <!-- Solid -->
          <div class="space-y-300">
            <h3 class="text-h3 text-default">Solid</h3>
            <div class="space-y-200 bg-subtle p-400 rounded-lg">
              <div class="flex items-center justify-between">
                <span class="text-body-s text-secondary">Default:</span>
                <button class="btn-solid">確認</button>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-body-s text-secondary">Hover:</span>
                <span class="text-body-s text-secondary">（滑鼠移入測試）</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-body-s text-secondary">Active:</span>
                <span class="text-body-s text-secondary">（按下測試）</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-body-s text-secondary">Disabled:</span>
                <button class="btn-solid" disabled>確認</button>
              </div>
            </div>
          </div>

          <!-- Outline -->
          <div class="space-y-300">
            <h3 class="text-h3 text-default">Outline</h3>
            <div class="space-y-200 bg-subtle p-400 rounded-lg">
              <div class="flex items-center justify-between">
                <span class="text-body-s text-secondary">Default:</span>
                <button class="btn-outline">取消</button>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-body-s text-secondary">Hover:</span>
                <span class="text-body-s text-secondary">（滑鼠移入測試）</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-body-s text-secondary">Active:</span>
                <span class="text-body-s text-secondary">（按下測試）</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-body-s text-secondary">Disabled:</span>
                <button class="btn-outline" disabled>取消</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 其他組件測試 -->
      <section class="card space-y-400">
        <h2 class="text-h2 text-default">其他組件</h2>
        
        <div class="space-y-300">
          <!-- Menu Item -->
          <div>
            <p class="text-body-s text-secondary mb-200">選單項目</p>
            <div class="menu-item">點擊我測試 hover</div>
          </div>

          <!-- Input -->
          <div>
            <label class="label">輸入框</label>
            <input class="input" placeholder="請輸入文字..." />
          </div>

          <!-- Dropdown -->
          <div>
            <label class="label">下拉選單</label>
            <select class="dropdown">
              <option>選項 1</option>
              <option>選項 2</option>
              <option>選項 3</option>
            </select>
          </div>

          <!-- Pagination -->
          <div>
            <p class="text-body-s text-secondary mb-200">分頁器</p>
            <div class="flex gap-200">
              <button class="pagination-item">1</button>
              <button class="pagination-item">2</button>
              <button class="pagination-item">3</button>
              <button class="pagination-item" disabled>4</button>
            </div>
          </div>
        </div>
      </section>

      <!-- 檢查清單 -->
      <section class="bg-subtle rounded-xl p-600 border-2 border-primary">
        <h2 class="text-h2 text-primary mb-400">✅ 測試檢查項目</h2>
        <div class="space-y-300 text-body-m text-default">
          <div class="flex items-start gap-200">
            <span class="text-primary">□</span>
            <div>Solid 按鈕有紅色背景 (#c51616)</div>
          </div>
          <div class="flex items-start gap-200">
            <span class="text-primary">□</span>
            <div>Outline 按鈕有紅色邊框 (#c51616)</div>
          </div>
          <div class="flex items-start gap-200">
            <span class="text-primary">□</span>
            <div>按鈕有圓角 (8px)</div>
          </div>
          <div class="flex items-start gap-200">
            <span class="text-primary">□</span>
            <div>Hover 時顏色會變淺 (#df3f3f)</div>
          </div>
          <div class="flex items-start gap-200">
            <span class="text-primary">□</span>
            <div>Active 時顏色會變深 (#8f0f0f)</div>
          </div>
          <div class="flex items-start gap-200">
            <span class="text-primary">□</span>
            <div>Disabled 狀態有半透明效果</div>
          </div>
          <div class="flex items-start gap-200">
            <span class="text-primary">□</span>
            <div>文字和圖示是水平排列</div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
code {
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.875em;
}
</style>
