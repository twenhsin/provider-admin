# 設計系統 - Claude Code 快速參考

## 🎯 核心規則

1. **所有顏色都來自 tokens.json**
2. **使用簡短命名**：`bg-btn-solid` 而不是 `bg-button-solid-background-default`
3. **遵循語義化**：`text-primary` 表示主要強調色
4. **間距使用數字系列**：100-1000 (對應 4px-40px)

---

## 🎨 常用顏色 Classes

### 背景色
```
bg-page              - 頁面背景 (#111722)
bg-primary           - 主要背景 (#c51616)
bg-primary-hover     - 主要懸停 (#df3f3f)
bg-subtle            - 微妙背景 (#151c2b)
bg-elevated          - 提升背景 (#192233)
```

### 文字色
```
text-default         - 預設白色 (#ffffff)
text-secondary       - 次要灰色 (#a0aec0)
text-primary         - 主要紅色 (#c51616)
text-disabled        - 禁用狀態 (#ffffff7f)
```

### 邊框色
```
border-default       - 預設邊框 (#324467)
border-primary       - 主要邊框 (#c51616)
border-primary-hover - 主要懸停 (#df3f3f)
```

---

## 🔘 按鈕組件

### 實心按鈕 (Solid)
```vue
<button class="
  bg-btn-solid 
  text-btn-solid-text 
  hover:bg-btn-solid-hover 
  active:bg-btn-solid-active
  px-600 py-300 rounded-md
">
  按鈕文字
</button>
```

### 線框按鈕 (Outline)
```vue
<button class="
  border-2
  border-btn-outline-border
  text-btn-outline-text
  hover:border-btn-outline-border-hover
  active:bg-btn-outline-active
  px-600 py-300 rounded-md
">
  按鈕文字
</button>
```

### 圖標按鈕
```vue
<!-- 編輯 -->
<button class="
  p-200 rounded
  text-action-edit-icon
  hover:text-action-edit-icon-interactive
  hover:bg-action-edit-bg-active
">
  <IconEdit />
</button>

<!-- 刪除 -->
<button class="
  p-200 rounded
  text-action-delete-icon
  hover:text-action-delete-icon-interactive
  hover:bg-action-delete-bg-active
">
  <IconDelete />
</button>

<!-- 顯示/隱藏 -->
<button class="
  p-200 rounded
  text-action-show-icon
  hover:text-action-show-icon-interactive
  hover:bg-action-show-bg-active
">
  <IconShow />
</button>
```

---

## 📝 表單組件

### 輸入框
```vue
<input 
  type="text"
  class="
    bg-input-bg
    text-input-text
    border border-input-border
    focus:border-input-border-focus
    focus:text-input-text-focus
    px-300 py-200 rounded-md
  "
/>
```

### 下拉選單
```vue
<select class="
  bg-dropdown-bg
  text-dropdown-text
  border border-dropdown-border
  focus:border-dropdown-border-focus
  px-300 py-200 rounded-md
">
  <option>選項</option>
</select>
```

---

## 📐 間距系統

```
p-100  = 4px      最小間距
p-200  = 8px      小間距
p-300  = 12px     中小間距
p-400  = 16px     標準間距 (最常用)
p-500  = 20px     中等間距
p-600  = 24px     中大間距 (按鈕常用)
p-700  = 28px     大間距
p-800  = 32px     較大間距
p-900  = 36px     很大間距
p-1000 = 40px     極大間距
```

**使用範例：**
```vue
<div class="p-600">內距 24px</div>
<div class="px-400 py-200">水平 16px，垂直 8px</div>
<div class="mt-500">上邊距 20px</div>
<div class="flex gap-300">間距 12px</div>
```

---

## 📝 字體大小

```
text-h1      = 32px (標題 1)
text-h2      = 28px (標題 2)
text-h3      = 24px (標題 3)
text-h4      = 20px (標題 4)
text-h5      = 18px (標題 5)
text-body-l  = 16px (大正文)
text-body-m  = 14px (中正文) ⭐ 最常用
text-body-s  = 12px (小正文)
text-label   = 14px (標籤，粗體)
text-caption = 12px (說明文字)
```

---

## 🔄 圓角

```
rounded-sm   = 4px
rounded      = 8px    ⭐ 預設，最常用
rounded-lg   = 12px
rounded-xl   = 16px
rounded-full = 9999px (完全圓形)
```

---

## 🎨 完整組件範例

### 卡片
```vue
<div class="
  bg-bg-subtle
  border border-border-default
  rounded-lg
  p-600
  space-y-400
">
  <h3 class="text-h3 text-text-default">標題</h3>
  <p class="text-body-m text-text-secondary">內容</p>
  <button class="
    bg-btn-solid text-btn-solid-text
    px-400 py-200 rounded
    hover:bg-btn-solid-hover
  ">
    操作
  </button>
</div>
```

### 表單
```vue
<form class="space-y-400">
  <div>
    <label class="text-label text-text-default block mb-200">
      標籤
    </label>
    <input 
      class="
        w-full
        bg-input-bg text-input-text
        border border-input-border
        focus:border-input-border-focus
        px-300 py-200 rounded-md
      "
    />
  </div>
  
  <button class="
    w-full
    bg-btn-solid text-btn-solid-text
    py-300 rounded-md
    hover:bg-btn-solid-hover
  ">
    提交
  </button>
</form>
```

### Header
```vue
<header class="bg-header-bg p-400 flex items-center justify-between">
  <div class="flex items-center gap-300">
    <span class="text-header-logo-icon text-h4">🏠</span>
    <span class="text-header-logo-text text-h5">網站名稱</span>
  </div>
  
  <div class="flex items-center gap-400">
    <button class="
      p-200 rounded
      text-header-action-icon
      hover:text-header-action-icon-hover
      hover:bg-header-action-bg-active
    ">
      <IconBell />
    </button>
    
    <div class="flex flex-col">
      <span class="text-header-user-name text-body-m">使用者</span>
      <span class="text-header-user-role text-caption">角色</span>
    </div>
  </div>
</header>
```

---

## ⚡ 快速模板

### 頁面容器
```vue
<div class="min-h-screen bg-bg-page p-600">
  <!-- 內容 -->
</div>
```

### 內容區域
```vue
<div class="max-w-6xl mx-auto space-y-600">
  <!-- 內容 -->
</div>
```

### 按鈕組
```vue
<div class="flex gap-300">
  <button class="bg-btn-solid text-btn-solid-text px-600 py-300 rounded-md hover:bg-btn-solid-hover">
    主要
  </button>
  <button class="border-2 border-btn-outline-border text-btn-outline-text px-600 py-300 rounded-md hover:border-btn-outline-border-hover">
    次要
  </button>
</div>
```

---

## ✅ 重要提醒

1. **不要使用硬編碼的顏色**：用 `bg-primary` 而不是 `bg-[#c51616]`
2. **保持命名簡潔**：用 `bg-btn-solid` 而不是 `bg-button-solid-background-default`
3. **使用語義化命名**：用 `text-primary` 而不是 `text-red-500`
4. **間距統一使用數字系列**：100-1000
5. **添加過渡效果**：`transition-colors duration-200`
6. **狀態修飾符**：`hover:`, `active:`, `focus:`, `disabled:`

---

## 🚀 開始使用

當需要創建組件時：
1. 從上面的範例選擇最接近的模板
2. 使用設計系統的 classes
3. 確保所有顏色來自 tokens
4. 添加適當的間距和圓角
5. 為互動元素添加 hover/active 狀態

這樣可以確保 UI 一致性，並且維護更容易！
