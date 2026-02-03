# 🎨 設計系統快速參考 - Claude Code 專用（2024 最新版）

## ⚠️ 重要原則

**SEMANTIC & COMPONENT TOKENS 優先！**
- ✅ 優先使用 `bg-page`, `text-default`, `btn-solid` 等語義化/組件 tokens
- ✅ 只有在沒有對應的 semantic/component token 時才使用 core tokens
- ✅ 間距只用數值：`gap-100`, `px-400` 等（見下方對照表）
- ✅ 字體使用：`text-h1` 到 `text-h5`, `text-body-l/m/s`
- ✅ 圓角使用：`rounded-sm/md/lg/xl`

---

## 📦 main.css 已預製的 Component Classes

這些 classes 在 `main.css` 裡已經定義好了，**可以直接用，不用寫完整的 utility class 組合**：

```vue
<!-- 實心按鈕（含 hover/active/disabled） -->
<button class="btn-solid">按鈕</button>

<!-- 線框按鈕（含 hover/active/disabled） -->
<button class="btn-outline">按鈕</button>

<!-- 操作按鈕 -->
<button class="btn-action-edit"><IconEdit /></button>
<button class="btn-action-delete"><IconDelete /></button>
<button class="btn-action-show"><IconShow /></button>
<button class="btn-action-hide"><IconHide /></button>

<!-- 選單項目 -->
<div class="menu-item">選單項目</div>

<!-- 表單 -->
<input class="input" placeholder="輸入文字" />
<select class="dropdown"><option>選項</option></select>
<label class="label">標籤</label>

<!-- 卡片 -->
<div class="card">內容</div>

<!-- 分頁 -->
<button class="pagination-item">1</button>

<!-- Header -->
<header class="header">...</header>
<button class="header-action"><IconBell /></button>
```

**如果需要在預製 class 基礎上調整，才使用下面的 utility classes。**

---

## 📐 間距系統 (Spacing) - ⚠️ 正確數值

**規則：只用數值 key。** `p-`、`px-`、`py-`、`gap-`、`m-`、`space-y-` 後面直接接數值。

```
50 = 2px     100 = 4px ⭐  200 = 8px    300 = 12px
400 = 16px ⭐ 500 = 20px   600 = 24px   700 = 32px
800 = 40px ⭐ 900 = 48px   1000 = 64px
```

**常用場景參考：**

| 場景 | 用法 | 數值 |
|------|------|------|
| **Icon + 文字間距** | `gap-100` | **4px** ⭐ |
| 按鈕群組間距 | `gap-300` | 12px |
| 表單欄位間距 | `gap-400` | 16px |
| 操作按鈕內距 | `p-200` | 8px |
| 輸入框內距 | `px-300 py-200` | 12px / 8px |
| **主按鈕左右內距** | `px-400` | **16px** ⭐ |
| **主按鈕高度** | `h-800` | **40px** ⭐ |
| 卡片內距 | `p-600` | 24px |
| 容器內距 | `p-600` | 24px |

**⭐ 按鈕關鍵數值：**
```vue
<button class="
  h-800          /* 40px 高度 */
  px-400         /* 16px 左右 padding */
  gap-100        /* 4px icon-文字間距 */
">
  <Icon />
  文字
</button>
```

**範例：**
```vue
<div class="flex gap-100">Icon 和文字之間</div>
<div class="flex gap-300">按鈕群組之間</div>
<button class="px-400 h-800">主按鈕尺寸</button>
<div class="p-600">卡片內距</div>
```

---

## 🎨 語義化顏色

### 背景色 `bg-*`
```vue
<!-- 頁面與容器 -->
<div class="bg-page">頁面背景 #111722</div>
<div class="bg-subtle">微妙背景 #151c2b</div>
<div class="bg-elevated">提升背景 #192233</div>

<!-- 主色與狀態 -->
<div class="bg-primary">主要 #c51616</div>
<div class="bg-primary-hover">懸停 #df3f3f</div>
<div class="bg-primary-active">激活 #8f0f0f</div>

<!-- 淡化背景 -->
<div class="bg-primary-muted">#c5161633</div>
<div class="bg-gray-muted">#71809633</div>
<div class="bg-yellow-muted">#ecc94b33</div>
```

### 文字色 `text-*`
```vue
<p class="text-default">預設白色 #ffffff</p>
<p class="text-secondary">次要灰色 #a0aec0</p>
<p class="text-primary">主要紅色 #c51616</p>
<p class="text-disabled">禁用 #ffffff7f</p>
```

### 圖標色 `text-icon-*` 或組件專用色
```vue
<svg class="text-icon-default">白色 #ffffff</svg>
<svg class="text-icon-secondary">灰色 #a0aec0</svg>
<svg class="text-icon-primary">紅色 #c51616</svg>
```

### 邊框色 `border-*`
```vue
<div class="border border-default">#324467</div>
<div class="border border-primary">#c51616</div>
<div class="border border-primary-hover">#df3f3f</div>
```

---

## 🔘 按鈕組件 - ⚠️ 完整規格

### Solid 按鈕（實心）

```vue
<!-- ✅ 推薦：使用預製 class -->
<button class="btn-solid">按鈕</button>

<!-- 帶 Icon -->
<button class="btn-solid">
  <IconAdd />
  新增
</button>

<!-- 如果需要手動組合（不推薦） -->
<button class="
  inline-flex items-center justify-center
  h-800 px-400 gap-100
  bg-btn-solid text-btn-solid-text
  hover:bg-btn-solid-hover
  active:bg-btn-solid-active
  disabled:bg-btn-solid-disabled disabled:text-btn-solid-text-disabled
  rounded-md text-body-s font-normal
  transition-colors duration-200 cursor-pointer
">按鈕</button>
```

**完整規格：**
- 高度: `h-800` = **40px** (dimension/height/md)
- 左右 Padding: `px-400` = **16px** (spacing/padding/xl)
- Icon-文字間距: `gap-100` = **4px** (spacing/gap/s)
- 字級: `text-body-s` = **14px** (typography/body/s/regular)
- 圓角: `rounded-md` = **8px**
- 背景: `bg-btn-solid` = **#c51616**

**Available classes：**
- `bg-btn-solid` / `bg-btn-solid-hover` / `bg-btn-solid-active` / `bg-btn-solid-disabled`
- `text-btn-solid-text` / `text-btn-solid-text-disabled`
- `text-btn-solid-icon` / `text-btn-solid-icon-disabled`

### Outline 按鈕（線框）

```vue
<!-- ✅ 推薦：使用預製 class -->
<button class="btn-outline">按鈕</button>

<!-- 帶 Icon -->
<button class="btn-outline">
  <IconAdd />
  取消
</button>

<!-- 如果需要手動組合（不推薦） -->
<button class="
  inline-flex items-center justify-center
  h-800 px-400 gap-100
  border-2 border-btn-outline-border bg-transparent
  text-btn-outline-text
  hover:border-btn-outline-border-hover
  active:bg-btn-outline-active
  disabled:border-btn-outline-border-disabled disabled:text-btn-outline-text-disabled
  rounded-md text-body-s font-normal
  transition-all duration-200 cursor-pointer
">按鈕</button>
```

**完整規格：與 Solid 相同，唯一差異：**
- 背景透明
- 邊框: `border-2 border-btn-outline-border` = **2px solid #c51616**

**Available classes：**
- `border-btn-outline-border` / `border-btn-outline-border-hover` / `border-btn-outline-border-disabled`
- `bg-btn-outline-active`
- `text-btn-outline-text` / `text-btn-outline-text-disabled`
- `text-btn-outline-icon` / `text-btn-outline-icon-disabled`

---

## ⚡ 操作按鈕 (Action Buttons)

```vue
<!-- 預製 class 用法 -->
<button class="btn-action-edit"><IconEdit /></button>
<button class="btn-action-delete"><IconDelete /></button>
<button class="btn-action-show"><IconShow /></button>
<button class="btn-action-hide"><IconHide /></button>
```

**Available classes：**
| 類型 | icon | icon-interactive | bg-active |
|------|------|-----------------|-----------|
| Edit | `text-action-edit-icon` | `text-action-edit-icon-interactive` | `bg-action-edit-bg-active` |
| Delete | `text-action-delete-icon` | `text-action-delete-icon-interactive` | `bg-action-delete-bg-active` |
| Show | `text-action-show-icon` | `text-action-show-icon-interactive` | `bg-action-show-bg-active` |
| Hide | `text-action-hide-icon` | `text-action-hide-icon-interactive` | `bg-action-hide-bg-active` |

---

## 📋 選單項目 (Menu)

```vue
<!-- 預製 class -->
<div class="menu-item">
  <span class="flex items-center gap-200">
    <IconMenu class="text-menu-icon" /> 選單項目
  </span>
</div>
```

**Available classes：**
- `bg-menu-bg` / `bg-menu-bg-hover` / `bg-menu-bg-active`
- `text-menu-text` / `text-menu-text-interactive`
- `text-menu-icon` / `text-menu-icon-interactive`

---

## 🎯 Header

```vue
<!-- 預製 class -->
<header class="header">
  <div class="flex items-center gap-300">
    <span class="text-header-logo-icon text-h4">🏠</span>
    <span class="text-header-logo-text text-h5">網站名稱</span>
  </div>
  <div class="flex items-center gap-400">
    <button class="header-action"><IconBell /></button>
    <div class="flex flex-col gap-100">
      <span class="text-header-user-name text-body-m">使用者名稱</span>
      <span class="text-header-user-role text-caption">管理員</span>
    </div>
  </div>
</header>
```

---

## 📄 分頁器 (Pagination)

```vue
<!-- 預製 class -->
<div class="flex gap-200">
  <button class="pagination-item">1</button>
  <button class="pagination-item">2</button>
  <button class="pagination-item" disabled>3</button>
</div>
```

---

## 📝 表單組件

```vue
<!-- 預製 class -->
<label class="label">使用者名稱</label>
<input class="input" placeholder="請輸入..." />
<select class="dropdown">
  <option>選項 1</option>
</select>
```

---

## 📝 字體 (Typography) - ⚠️ 正確數值

```
text-h1      = 32px / 700    一級標題
text-h2      = 28px / 700    二級標題
text-h3      = 24px / 600    三級標題
text-h4      = 20px / 600    四級標題
text-h5      = 18px / 600    五級標題

text-body-l  = 16px / 400    長文
text-body-m  = 14px / 400    一般文字
text-body-s  = 14px / 400 ⭐  按鈕文字（與 body-m 相同）

text-label   = 14px / 500    表單標籤
text-caption = 12px / 400    說明文字
```

**⚠️ 重要：按鈕使用 `text-body-s`（14px），不是 12px！**

---

## 🔄 圓角 (Border Radius)

```
rounded-sm   = 4px
rounded-md   = 8px  ⭐ 按鈕、輸入框
rounded-lg   = 12px ⭐ 卡片、容器
rounded-xl   = 16px
rounded-full = 9999px (圓形)
```

**組件對應：**
- Interactive（Button, Input, Select）→ `rounded-md` (8px)
- Container（Card, Modal, Panel）→ `rounded-lg` (12px)

---

## 🎯 完整範例

### 卡片 + 按鈕
```vue
<div class="card">
  <h3 class="text-h3 text-default mb-300">標題</h3>
  <p class="text-body-m text-secondary">內容</p>
  <div class="flex gap-300 mt-400">
    <button class="btn-solid">
      <IconCheck />
      主要操作
    </button>
    <button class="btn-outline">次要操作</button>
  </div>
</div>
```

### 列表 + 操作按鈕
```vue
<div class="flex flex-col gap-200">
  <div class="menu-item flex items-center justify-between">
    <span>項目名稱</span>
    <div class="flex gap-200">
      <button class="btn-action-edit"><IconEdit /></button>
      <button class="btn-action-delete"><IconDelete /></button>
    </div>
  </div>
</div>
```

### 頁面容器
```vue
<div class="min-h-screen bg-page p-600">
  <div class="max-w-6xl mx-auto flex flex-col gap-500">
    <header class="header">...</header>
    <main class="card">
      <h1 class="text-h1 text-default mb-400">頁面標題</h1>
      <p class="text-body-m text-secondary">內容</p>
    </main>
  </div>
</div>
```

---

## ✅ 檢查清單

### 按鈕專用檢查
- [ ] 使用 `btn-solid` 或 `btn-outline` 預製 class
- [ ] 按鈕高度是 `h-800` (40px)
- [ ] 左右 padding 是 `px-400` (16px)
- [ ] Icon-文字間距是 `gap-100` (4px)
- [ ] 文字使用 `text-body-s` (14px)
- [ ] Icon 尺寸是 24x24px
- [ ] 有 hover / active / disabled 狀態
- [ ] 添加 `transition-colors duration-200`

### 通用檢查
- [ ] 間距只用數值 key（`gap-100`, `px-400`...）
- [ ] 顏色用 semantic token（`bg-page`, `text-default`...）
- [ ] 不用硬編碼值（❌ `bg-[#c51616]`、`p-[16px]`）
- [ ] Icon 使用 `width: 24px; height: 24px`

---

## 📊 關鍵數值記憶卡

```
按鈕核心數值：40 | 16 | 4 | 14 | 8
               ↓    ↓   ↓   ↓   ↓
             高度  pad gap 字  角
```

**完整對照：**
- 高度: `h-800` = 40px
- 左右 Padding: `px-400` = 16px  
- Icon 間距: `gap-100` = 4px
- 字級: `text-body-s` = 14px
- 圓角: `rounded-md` = 8px

---

## ⚠️ 常見錯誤

| ❌ 錯誤 | ✅ 正確 | 說明 |
|---------|---------|------|
| `gap-200` (8px) | `gap-100` (4px) | Icon-文字間距 |
| `px-600` (24px) | `px-400` (16px) | 按鈕左右 padding |
| `py-300` + `py-300` | `h-800` (40px) | 按鈕高度用固定值 |
| `text-body-m` | `text-body-s` | 按鈕文字（兩者都是 14px，但語義不同） |
| 寫一堆 utility classes | 用預製 class `.btn-solid` | 簡化程式碼 |

---

## 💡 最佳實踐

1. **優先使用預製 classes**
   ```vue
   <!-- ✅ 好 -->
   <button class="btn-solid">按鈕</button>
   
   <!-- ❌ 差 -->
   <button class="h-800 px-400 gap-100 bg-btn-solid ...">按鈕</button>
   ```

2. **Icon 和文字組合**
   ```vue
   <!-- ✅ 好：預製 class 已包含 gap -->
   <button class="btn-solid">
     <IconAdd />
     新增
   </button>
   
   <!-- ❌ 差：重複定義 -->
   <button class="btn-solid gap-100">
     <IconAdd />
     新增
   </button>
   ```

3. **Icon 尺寸固定**
   ```vue
   <!-- ✅ 在 Icon 組件內定義 -->
   <template>
     <svg width="24" height="24">...</svg>
   </template>
   
   <!-- 或在 CSS 中 -->
   <style>
   :deep(svg) {
     width: 24px;
     height: 24px;
   }
   </style>
   ```

---

## 🎓 給 AI 的特別提醒

1. **數值精準度很重要**
   - 按鈕高度必須是 40px（不是 36px 或 44px）
   - Icon 間距必須是 4px（不是 8px）
   - 文字必須是 14px（不是 12px）

2. **優先使用預製 classes**
   - main.css 已經定義好所有常用組件
   - 減少重複程式碼
   - 確保一致性

3. **語義化命名**
   - 用 `btn-solid` 不用 `button-primary`
   - 用 `text-default` 不用 `text-white`
   - 遵循既有的命名規則

4. **互動狀態完整**
   - 所有按鈕都要有 hover / active / disabled
   - 使用 `transition-colors duration-200`
   - 確保鍵盤導航可用

5. **Icon 處理**
   - Icon 尺寸統一 24x24px
   - 使用 `currentColor` 繼承顏色
   - 避免在按鈕內寫 Icon 的寬高

---

**版本：2024.12 | 最後更新：修正按鈕數值為 40|16|4|14|8**
