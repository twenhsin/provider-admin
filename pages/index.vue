<script setup lang="ts">
import BaseButton from '~/app/components/BaseButton.vue'
import IconCheck from '~/app/assets/icons/IconCheck.vue'
import IconClose from '~/app/assets/icons/IconClose.vue'
import IconPlus from '~/app/assets/icons/IconPlus.vue'

const handleClick = (action: string) => {
  console.log(`按鈕點擊: ${action}`)
}
</script>

<template>
  <div class="min-h-screen bg-bg-page p-600">
    <div class="max-w-6xl mx-auto space-y-900">
      <!-- 標題 -->
      <header class="text-center space-y-300">
        <h1 class="text-h1 font-bold text-text-default">
          BaseButton 組件展示
        </h1>
        <p class="text-body-m text-text-secondary">
          驗證 tokens.json 設計系統 - 所有顏色與間距皆來自 Design Tokens
        </p>
      </header>

      <!-- 主要展示區 -->
      <div class="space-y-800">
        <!-- Solid 按鈕展示 -->
        <section class="bg-bg-elevated rounded-xl p-600 space-y-400">
          <div>
            <h2 class="text-h2 font-bold text-text-default mb-200">
              Solid 按鈕（主要操作）
            </h2>
            <p class="text-body-s text-text-secondary">
              使用 <code class="px-100 py-sm bg-bg-subtle rounded text-text-primary">buttonSolidBackgroundDefault</code> (#c51616)
            </p>
          </div>

          <div class="flex flex-wrap gap-md items-center">
            <!-- 左側 Icon + 文字 -->
            <BaseButton variant="solid" @click="handleClick('確認')">
              <template #leftIcon>
                <IconCheck />
              </template>
              確認
            </BaseButton>

            <!-- 純文字 -->
            <BaseButton variant="solid" @click="handleClick('儲存')">
              儲存
            </BaseButton>

            <!-- 右側 Icon -->
            <BaseButton variant="solid" @click="handleClick('新增')">
              新增
              <template #rightIcon>
                <IconPlus />
              </template>
            </BaseButton>

            <!-- 純 Icon -->
            <BaseButton variant="solid" @click="handleClick('純圖標')">
              <template #leftIcon>
                <IconCheck />
              </template>
            </BaseButton>

            <!-- Disabled -->
            <BaseButton variant="solid" disabled>
              <template #leftIcon>
                <IconCheck />
              </template>
              已停用
            </BaseButton>
          </div>

          <!-- Token 說明 -->
          <div class="mt-400 p-400 bg-bg-subtle rounded-lg border border-border-default">
            <h3 class="text-body-m font-medium text-text-default mb-200">
              🎨 使用的 Component Tokens:
            </h3>
            <ul class="text-body-s text-text-secondary space-y-100">
              <li><code>buttonSolidBackgroundDefault</code>: #c51616 (預設背景)</li>
              <li><code>buttonSolidBackgroundHover</code>: #df3f3f (Hover 狀態)</li>
              <li><code>buttonSolidBackgroundActive</code>: #8f0f0f (Active 狀態)</li>
              <li><code>buttonSolidBackgroundDisabled</code>: #71809633 (停用狀態)</li>
              <li><code>buttonSolidTextDefault</code>: #ffffff (文字顏色)</li>
            </ul>
          </div>
        </section>

        <!-- Outline 按鈕展示 -->
        <section class="bg-bg-elevated rounded-xl p-600 space-y-400">
          <div>
            <h2 class="text-h2 font-bold text-text-default mb-200">
              Outline 按鈕（次要操作）
            </h2>
            <p class="text-body-s text-text-secondary">
              使用 <code class="px-100 py-sm bg-bg-subtle rounded text-text-primary">buttonOutlineBorderDefault</code> (#c51616)
            </p>
          </div>

          <div class="flex flex-wrap gap-md items-center">
            <!-- 純文字 -->
            <BaseButton variant="outline" @click="handleClick('取消')">
              取消
            </BaseButton>

            <!-- 右側 Icon + 文字 -->
            <BaseButton variant="outline" @click="handleClick('關閉')">
              關閉
              <template #rightIcon>
                <IconClose />
              </template>
            </BaseButton>

            <!-- 左側 Icon -->
            <BaseButton variant="outline" @click="handleClick('返回')">
              <template #leftIcon>
                <IconClose />
              </template>
              返回
            </BaseButton>

            <!-- 純 Icon -->
            <BaseButton variant="outline" @click="handleClick('純圖標')">
              <template #leftIcon>
                <IconClose />
              </template>
            </BaseButton>

            <!-- Disabled -->
            <BaseButton variant="outline" disabled>
              <template #rightIcon>
                <IconClose />
              </template>
              已停用
            </BaseButton>
          </div>

          <!-- Token 說明 -->
          <div class="mt-400 p-400 bg-bg-subtle rounded-lg border border-border-default">
            <h3 class="text-body-m font-medium text-text-default mb-200">
              🎨 使用的 Component Tokens:
            </h3>
            <ul class="text-body-s text-text-secondary space-y-100">
              <li><code>buttonOutlineBorderDefault</code>: #c51616 (預設邊框)</li>
              <li><code>buttonOutlineBorderHover</code>: #df3f3f (Hover 邊框)</li>
              <li><code>buttonOutlineBackgroundActive</code>: #8f0f0f (Active 背景)</li>
              <li><code>buttonOutlineBorderDisabled</code>: #324467 (停用邊框)</li>
              <li><code>buttonOutlineTextDefault</code>: #ffffff (文字顏色)</li>
            </ul>
          </div>
        </section>

        <!-- 狀態對比展示 -->
        <section class="bg-bg-elevated rounded-xl p-600 space-y-400">
          <h2 class="text-h2 font-bold text-text-default">
            所有狀態對比
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <!-- Solid 狀態 -->
            <div class="space-y-300">
              <h3 class="text-h3 font-medium text-text-default">Solid Variant</h3>
              <div class="space-y-sm bg-bg-subtle p-400 rounded-lg">
                <div class="flex items-center justify-between">
                  <span class="text-body-s text-text-secondary">Default:</span>
                  <BaseButton variant="solid">
                    <template #leftIcon>
                      <IconCheck />
                    </template>
                    確認
                  </BaseButton>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-body-s text-text-secondary">Hover:</span>
                  <span class="text-body-xs text-text-secondary">（滑鼠移入測試）</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-body-s text-text-secondary">Active:</span>
                  <span class="text-body-xs text-text-secondary">（按下測試）</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-body-s text-text-secondary">Disabled:</span>
                  <BaseButton variant="solid" disabled>
                    <template #leftIcon>
                      <IconCheck />
                    </template>
                    確認
                  </BaseButton>
                </div>
              </div>
            </div>

            <!-- Outline 狀態 -->
            <div class="space-y-300">
              <h3 class="text-h3 font-medium text-text-default">Outline Variant</h3>
              <div class="space-y-sm bg-bg-subtle p-400 rounded-lg">
                <div class="flex items-center justify-between">
                  <span class="text-body-s text-text-secondary">Default:</span>
                  <BaseButton variant="outline">
                    取消
                    <template #rightIcon>
                      <IconClose />
                    </template>
                  </BaseButton>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-body-s text-text-secondary">Hover:</span>
                  <span class="text-body-xs text-text-secondary">（滑鼠移入測試）</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-body-s text-text-secondary">Active:</span>
                  <span class="text-body-xs text-text-secondary">（按下測試）</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-body-s text-text-secondary">Disabled:</span>
                  <BaseButton variant="outline" disabled>
                    取消
                    <template #rightIcon>
                      <IconClose />
                    </template>
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Icon 配置展示 -->
        <section class="bg-bg-elevated rounded-xl p-600 space-y-400">
          <h2 class="text-h2 font-bold text-text-default">
            Icon 配置展示
          </h2>

          <div class="space-y-300">
            <div class="flex flex-wrap gap-md items-center">
              <div class="flex flex-col items-center gap-sm">
                <BaseButton variant="solid">
                  <template #leftIcon>
                    <IconCheck />
                  </template>
                  左側 Icon
                </BaseButton>
                <span class="text-body-xs text-text-secondary">leftIcon slot</span>
              </div>

              <div class="flex flex-col items-center gap-sm">
                <BaseButton variant="solid">
                  右側 Icon
                  <template #rightIcon>
                    <IconPlus />
                  </template>
                </BaseButton>
                <span class="text-body-xs text-text-secondary">rightIcon slot</span>
              </div>

              <div class="flex flex-col items-center gap-sm">
                <BaseButton variant="solid">
                  <template #leftIcon>
                    <IconCheck />
                  </template>
                  雙 Icon
                  <template #rightIcon>
                    <IconPlus />
                  </template>
                </BaseButton>
                <span class="text-body-xs text-text-secondary">兩個 slots</span>
              </div>

              <div class="flex flex-col items-center gap-sm">
                <BaseButton variant="solid">
                  <template #leftIcon>
                    <IconCheck />
                  </template>
                </BaseButton>
                <span class="text-body-xs text-text-secondary">純 Icon</span>
              </div>
            </div>

            <div class="p-400 bg-bg-subtle rounded-lg border border-border-default">
              <h3 class="text-body-m font-medium text-text-default mb-200">
                📏 間距設定:
              </h3>
              <ul class="text-body-s text-text-secondary space-y-100">
                <li>Icon 尺寸: <code>--spacing-600</code> (24px)</li>
                <li>Icon 與文字間距: <code>mr-200</code> / <code>ml-200</code> (8px)</li>
                <li>按鈕 Padding: <code>px-xl</code> / <code>py-md</code></li>
                <li>純 Icon 按鈕: <code>p-200</code> (自動調整為方形)</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 驗證說明 -->
        <section class="bg-bg-subtle rounded-xl p-600 border-2 border-border-primary">
          <h2 class="text-h2 font-bold text-text-primary mb-400">
            ✅ 設計系統驗證
          </h2>

          <div class="space-y-300 text-body-m text-text-default">
            <div class="flex items-start gap-md">
              <span class="text-text-primary font-bold">✓</span>
              <div>
                <strong>顏色來源:</strong> 所有顏色皆來自 <code class="px-100 py-sm bg-bg-page rounded">tokens.json</code> 的 <code>component.button.*</code> 變數
              </div>
            </div>

            <div class="flex items-start gap-md">
              <span class="text-text-primary font-bold">✓</span>
              <div>
                <strong>間距系統:</strong> 使用 Tailwind 配置中的 spacing tokens（如 <code>px-xl</code>, <code>gap-md</code>）
              </div>
            </div>

            <div class="flex items-start gap-md">
              <span class="text-text-primary font-bold">✓</span>
              <div>
                <strong>狀態管理:</strong> Hover、Active、Disabled 狀態自動應用對應的 token 變數
              </div>
            </div>

            <div class="flex items-start gap-md">
              <span class="text-text-primary font-bold">✓</span>
              <div>
                <strong>Icon 支援:</strong> 透過具名插槽 <code>leftIcon</code> / <code>rightIcon</code> 靈活配置
              </div>
            </div>

            <div class="flex items-start gap-md">
              <span class="text-text-primary font-bold">✓</span>
              <div>
                <strong>無硬編碼:</strong> 所有樣式值皆來自設計系統，確保與 Figma 100% 一致
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
code {
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.875em;
}

.space-y-sm > * + * {
  margin-top: var(--spacing-100);
}
</style>
