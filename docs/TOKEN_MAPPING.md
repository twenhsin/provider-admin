# 🎨 Design Token 對照表

> ⚠️ **此檔案由 generate-config.js 自動生成，請勿手動編輯**

**生成時間：** 2026/3/6 上午11:35:32

---

## 📏 間距系統 (Spacing)

### Gap (間距)

| Semantic Token | Tailwind Class | 數值 Alias | 實際值 | 說明 |
|----------------|----------------|-----------|--------|------|
| spacing.gap.icontext | gap-icontext | gap-100 | 4px | 任何icon+文字的組合 |
| spacing.gap.btngroup_x | gap-btngroup_x | gap-200 | 8px | 按鈕之間的距離 |
| spacing.gap.btngroup_y | gap-btngroup_y | gap-200 | 8px | 按鈕組垂直間距 |
| spacing.gap.heading_y | gap-heading_y | - | 4px | heading text上下的距離 |
| spacing.gap.objectgroup_x | gap-objectgroup_x | gap-300 | 12px | 組件左右的距離 |
| spacing.gap.section_y | gap-section_y | gap-600 | 24px | section上下間距 |

### Padding (內距)

| Semantic Token | Tailwind Class | 數值 Alias | 實際值 | 說明 |
|----------------|----------------|-----------|--------|------|
| spacing.padding.sm | padding-sm | p-100 | 4px |  |
| spacing.padding.md | padding-md | p-200 | 8px |  |
| spacing.padding.tag_x | padding-tag_x | p-300 | 12px | tag 左右 padding |
| spacing.padding.object_x | padding-object_x | p-400 | 16px | 組件：按鈕，input，dropdown等左右間距 |
| spacing.padding.object_xs | padding-object_xs | p-100 | 4px | 組件：小按鈕左右間距 |
| spacing.padding.2xl | padding-2xl | p-500 | 20px |  |
| spacing.padding.header | padding-header | p-600 | 24px |  |
| spacing.padding.container | padding-container | p-600 | 24px |  |
| spacing.padding.wrap | padding-wrap | p-800 | 40px |  |

## 📐 尺寸系統 (Dimension)

### Height (高度)

| Semantic Token | Tailwind Class | 數值 Alias | 實際值 | 說明 |
|----------------|----------------|-----------|--------|------|
| dimension.height.sm | h-button-sm | h-700 | 32px | 小按鈕、小型輸入框。 |
| dimension.height.md | h-button-md | h-800 | 40px | 標準按鈕 (Default)、一般輸入框。 |
| dimension.height.lg | h-button-lg | h-900 | 48px | 大型行動呼籲按鈕 (Primary CTA)。 |

### Icon Size (圖示尺寸)

| Semantic Token | Tailwind Class | 數值 Alias | 實際值 | 說明 |
|----------------|----------------|-----------|--------|------|
| dimension.icon.xs | w-icon-xs / h-icon-xs | w-300 | 12px | 極小標籤內的裝飾圖示。 |
| dimension.icon.sm | w-icon-sm / h-icon-sm | w-400 | 16px | 麵包屑、小按鈕、輔助說明文字旁。 |
| dimension.icon.md | w-icon-md / h-icon-md | w-600 | 24px | 標準按鈕、導覽列、清單項 (List item) |
| dimension.icon.lg | w-icon-lg / h-icon-lg | w-700 | 32px |  |

## 🎨 顏色系統 (Colors)

### Semantic Colors

| Token | Tailwind Class | 實際值 | 說明 |
|-------|----------------|--------|------|
| background.page | bg-background-page | #111722 | 頁面底色 |
| background.subtle | bg-background-subtle | #151C2B | table header, subtle sections |
| background.elevated | bg-background-elevated | #192233 | cards, forms, toolbars |
| background.primary | bg-background-primary | #C51616 |  |
| background.primary-hover | bg-background-primary-hover | #df3f3f |  |
| background.primary-active | bg-background-primary-active | #8F0F0F |  |
| background.primary-muted | bg-background-primary-muted | rgba(197,22,22,0.2) |  |
| background.gray-muted | bg-background-gray-muted | rgba(113,128,150,0.2) |  |
| background.yellow-muted | bg-background-yellow-muted | rgba(236, 201, 75, 0.2) |  |
| background.transparent | bg-background-transparent | #00000000 |  |

*註：完整顏色列表請參考 tailwind.config.cjs*

## ✍️ 字體系統 (Typography)

### Font Size (字體大小)

| Semantic Token | Tailwind Class | 數值 Alias | 實際值 |
|----------------|----------------|-----------|--------|
| fontSize.heading.h1 | text-heading-h1 | text-700 | 32px |
| fontSize.heading.h2 | text-heading-h2 | text-600 | 24px |
| fontSize.heading.h3 | text-heading-h3 | text-500 | 20px |
| fontSize.body.l | text-body-l | text-400 | 18px |
| fontSize.body.m | text-body-m | text-300 | 16px |
| fontSize.body.s | text-body-s | text-200 | 14px |
| fontSize.body.xs | text-body-xs | text-100 | 12px |

## 💡 使用範例

### 方法 1：使用語義化 Class（推薦）

```css
.btn-solid {
  /* 清楚表達設計意圖 */
  @apply gap-icontext;            /* icon 和文字間距 */
  @apply px-object_x;             /* 按鈕左右內距 */
  @apply h-md;                    /* 標準按鈕高度 */
  @apply bg-button-solid-background-default;
}
```

### 方法 2：使用數值 Alias（簡潔）

```css
.btn-solid {
  /* 簡潔但需要記憶對照 */
  @apply gap-100;    /* = gap-icontext = 4px */
  @apply px-400;     /* = px-object_x = 16px */
  @apply h-800;      /* = h-md = 40px */
}
```

### 兩種方法完全等價！

當你在 tokens.json 中改變數值時：
- ✅ 執行 `node generate-config.js`
- ✅ tailwind.config.cjs 自動更新
- ✅ CSS 編譯結果自動更新
- ✅ 不需要手動改任何 CSS 檔案

---

**📝 註記：**
- 此對照表由 `generate-config.js` 自動生成
- 每次執行腳本都會更新為最新狀態
- AI 閱讀此檔案可了解所有 token 的最新值
