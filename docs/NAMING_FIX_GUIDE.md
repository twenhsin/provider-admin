# 🔄 Token 命名修正說明

## ✅ 已修正的問題

修正了 Tailwind utility classes 無法正確讀取自訂 token 的問題。

---

## 📋 命名變更對照表

### **Spacing（間距）**

#### Gap 間距
| 舊命名（錯誤） | 新命名（正確） | 實際值 | 使用方式 |
|--------------|--------------|--------|---------|
| `gap-gap-icontext` | `gap-icontext` | 4px | `class="gap-icontext"` |
| `gap-gap-btngroup-x` | `gap-btngroup_x` | 8px | `class="gap-btngroup_x"` |
| `gap-gap-heading-y` | `gap-heading_y` | 4px | `class="gap-heading_y"` |
| `gap-gap-objectgroup-x` | `gap-objectgroup_x` | 12px | `class="gap-objectgroup_x"` |
| `gap-gap-section-y` | `gap-section_y` | 24px | `class="gap-section_y"` |

#### Padding 內距
| 舊命名（錯誤） | 新命名（正確） | 實際值 | 使用方式 |
|--------------|--------------|--------|---------|
| `px-padding-object-x` | `px-object_x` | 16px | `class="px-object_x"` |
| `p-padding-container` | `p-container` | 24px | `class="p-container"` |
| `px-padding-header` | `px-header` | 24px | `class="px-header"` |
| `p-padding-wrap` | `p-wrap` | 40px | `class="p-wrap"` |

### **Height（高度）**

| 舊命名（錯誤） | 新命名（正確） | 實際值 | 使用方式 |
|--------------|--------------|--------|---------|
| `h-button-sm` | `h-sm` | 32px | `class="h-sm"` |
| `h-button-md` | `h-md` | 40px | `class="h-md"` |
| `h-button-lg` | `h-lg` | 48px | `class="h-lg"` |

### **Icon Size（圖示尺寸）**

| 命名 | 實際值 | 使用方式 |
|------|--------|---------|
| `w-icon-xs / h-icon-xs` | 12px | `class="w-icon-xs h-icon-xs"` |
| `w-icon-sm / h-icon-sm` | 16px | `class="w-icon-sm h-icon-sm"` |
| `w-icon-md / h-icon-md` | 24px | `class="w-icon-md h-icon-md"` |
| `w-icon-lg / h-icon-lg` | 32px | `class="w-icon-lg h-icon-lg"` |

---

## 💡 使用範例

### **按鈕**
```vue
<!-- ✅ 正確 -->
<button class="gap-icontext px-object_x h-md">
  <Icon />
  按鈕
</button>

<!-- ❌ 錯誤（舊命名） -->
<button class="gap-gap-icontext px-padding-object_x h-button-md">
```

### **按鈕組**
```vue
<!-- ✅ 正確 -->
<div class="flex gap-btngroup_x">
  <button class="h-md px-object_x">按鈕 1</button>
  <button class="h-md px-object_x">按鈕 2</button>
</div>

<!-- ❌ 錯誤（舊命名） -->
<div class="flex gap-gap-btngroup_x">
```

### **卡片容器**
```vue
<!-- ✅ 正確 -->
<div class="p-container rounded-xl">
  卡片內容
</div>

<!-- ❌ 錯誤（舊命名） -->
<div class="p-padding-container rounded-xl">
```

### **Header**
```vue
<!-- ✅ 正確 -->
<header class="h-lg px-header">
  Header 內容
</header>

<!-- ❌ 錯誤（舊命名） -->
<header class="h-button-lg px-padding-header">
```

---

## 🎯 為什麼要改？

### **問題原因：**

Tailwind 的 utility classes 語法是：
```
{utility}-{value}
```

例如：
- `gap-4` → utility: gap, value: 4
- `px-8` → utility: px, value: 8
- `h-40` → utility: h, value: 40

當我們定義：
```javascript
spacing: {
  'gap-icontext': '4px'  // ❌ 名稱包含 gap-
}
```

Tailwind 會解析成：
- utility: `gap`
- value: `icontext`（去 spacing 找，找不到！）

### **正確做法：**

```javascript
spacing: {
  'icontext': '4px'  // ✅ 不包含 utility 前綴
}
```

Tailwind 會解析成：
- utility: `gap`
- value: `icontext`（在 spacing 裡找到了！）
- 結果：`gap: 4px` ✅

---

## 📊 完整 spacing 配置

```javascript
spacing: {
  // 數值 scale（保持不變）
  '100': '4px',
  '200': '8px',
  '300': '12px',
  '400': '16px',
  '500': '20px',
  '600': '24px',
  '800': '40px',
  '900': '48px',
  
  // 語義化命名（已修正）
  'icontext': '4px',        // gap-icontext ✅
  'btngroup-x': '8px',      // gap-btngroup_x ✅
  'objectgroup-x': '12px',  // gap-objectgroup_x ✅
  'section-y': '24px',      // gap-section_y ✅
  
  'object-x': '16px',       // px-object_x ✅
  'container': '24px',      // p-container ✅
  'header': '24px',         // px-header ✅
  'wrap': '40px',           // p-wrap ✅
}
```

---

## 🔄 更新步驟

### **1. 替換檔案**
- ✅ generate-config.js（已修正命名邏輯）
- ✅ tailwind.config.cjs（重新生成）
- ✅ main.css（已更新所有命名）

### **2. 重新生成配置**
```bash
rm tailwind.config.cjs
npm run tokens:generate
```

### **3. 更新 Vue 組件**
搜尋並替換舊命名：
```vue
<!-- 全域搜尋替換 -->
gap-gap-btngroup-x     → gap-btngroup_x
px-padding-object-x    → px-object_x
h-button-md            → h-md
h-button-sm            → h-sm
h-button-lg            → h-lg
p-padding-container    → p-container
```

### **4. 重啟開發伺服器**
```bash
npm run dev
```

---

## ✅ 驗證

執行後，以下 class 都應該正常工作：

```vue
<div class="gap-icontext">         ✅ 4px
<div class="gap-btngroup_x">       ✅ 8px
<div class="px-object_x">          ✅ 16px
<div class="h-md">                 ✅ 40px
<div class="p-container">          ✅ 24px
```

---

**修正完成！** 🎉
