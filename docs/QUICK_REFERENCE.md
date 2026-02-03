# 🎯 按鈕規格快速參考卡

## ✅ 正確數值（務必遵守）

```
┌─────────────────────────────────────────────┐
│  Solid Button 完整規格                       │
├─────────────────────────────────────────────┤
│                                             │
│  高度:     40px   (dimension/height/md)     │
│  Padding:  16px   (spacing/padding/xl)      │
│  Gap:      4px    (spacing/gap/s)           │
│  字級:     14px   (typography/body/s)       │
│  圓角:     8px    (borderRadius/interactive)│
│  背景:     #c51616 (primary)                │
│  Hover:    #df3f3f                          │
│  Active:   #8f0f0f                          │
│                                             │
└─────────────────────────────────────────────┘
```

## 📏 Tailwind Classes 對照

```vue
<button class="btn-solid">
  <!-- 預製 class，已包含所有規格 -->
</button>

<!-- 等同於： -->
<button class="
  h-800          /* 40px 高度 */
  px-400         /* 16px 左右 padding */
  gap-100        /* 4px icon-文字間距 */
  text-body-s    /* 14px 字級 */
  rounded-md     /* 8px 圓角 */
  bg-btn-solid   /* #c51616 背景 */
  hover:bg-btn-solid-hover
  active:bg-btn-solid-active
  inline-flex items-center justify-center
  transition-colors duration-200
">
  <IconAdd />    <!-- 24x24px icon -->
  新增
</button>
```

## 🎨 使用範例

### 純文字按鈕
```vue
<button class="btn-solid">確認</button>
```

### 帶 Icon 按鈕
```vue
<script setup>
import IconAdd from '@/assets/icons/Add.vue'
</script>

<button class="btn-solid">
  <IconAdd />
  新增
</button>
```

### Outline 按鈕
```vue
<button class="btn-outline">
  <IconAdd />
  取消
</button>
```

### Disabled 按鈕
```vue
<button class="btn-solid" disabled>
  已停用
</button>
```

## 🔢 Spacing 系統

```
'50':   2px   (xxs)
'100':  4px   (xs)  ← icon-text gap
'200':  8px   (sm)
'300':  12px  (md)
'400':  16px  (lg)  ← button padding-x
'500':  20px  (xl)
'600':  24px  (2xl)
'700':  32px  (3xl)
'800':  40px  (4xl) ← button height
'900':  48px
'1000': 64px
```

## ⚠️ 常見錯誤

| 錯誤 | 正確 |
|------|------|
| `gap-200` (8px) | `gap-100` (4px) ✅ |
| `px-600` (24px) | `px-400` (16px) ✅ |
| `py-300` (12px) | `h-800` (40px) ✅ |
| `text-body-m` (14px) | `text-body-s` (14px) ✅ |
| fontSize: '12px' | fontSize: '14px' ✅ |

## 🎯 檢查方法

### 瀏覽器 Console:
```javascript
const btn = document.querySelector('.btn-solid')
const s = window.getComputedStyle(btn)
console.log(s.height)        // "40px" ✅
console.log(s.paddingLeft)   // "16px" ✅
console.log(s.fontSize)      // "14px" ✅
console.log(s.gap)           // "4px"  ✅
```

### 開發者工具:
1. F12 → Elements
2. 選擇按鈕
3. 查看 Computed 樣式
4. 確認數值正確

## 📦 需要的檔案

1. ✅ `tailwind.config.correct.cjs`
2. ✅ `main.correct.css`
3. ✅ `Add.vue` 或 `Add.svg` icon

## 🚀 快速設置

```bash
# 1. 替換 config
cp tailwind.config.correct.cjs tailwind.config.cjs

# 2. 替換 CSS
cp main.correct.css main.css

# 3. 重啟
npm run dev
```

## ✅ 成功確認

看到以下情況表示成功：
- ✅ 按鈕高度肉眼可見約 40px
- ✅ 文字清晰（14px）
- ✅ Icon 和文字間距緊湊（4px）
- ✅ 按鈕不會太寬（padding 16px）
- ✅ Hover 時顏色變淺
- ✅ Active 時顏色變深

---

**記住這些數字：40 | 16 | 4 | 14 | 8**
