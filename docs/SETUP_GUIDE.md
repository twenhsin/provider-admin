# 🚀 Design System 自動化設置指南

> **目標：** 建立一個完全自動化的 Design Token 工作流程

---

## 📦 檔案說明

### **必須放入專案的檔案**

1. **tokens.json** 
   - 位置：專案根目錄
   - 用途：唯一真相來源，包含所有設計 tokens
   - 維護：設計師從 Figma 導出後更新

2. **generate-config.js**
   - 位置：專案根目錄
   - 用途：自動生成 Tailwind 配置
   - 維護：不需要修改（除非 tokens 結構改變）

3. **tailwind.config.cjs**
   - 位置：專案根目錄
   - 用途：Tailwind CSS 配置檔
   - 維護：⚠️ **自動生成，請勿手動編輯**

4. **main.css**
   - 位置：`src/assets/main.css`
   - 用途：預製組件 classes
   - 維護：需要加新組件時手動編輯

### **參考文件（可選）**

5. **docs/TOKEN_MAPPING.md**
   - 用途：給 AI (Claude Code) 閱讀的對照表
   - 維護：⚠️ **自動生成，請勿手動編輯**

6. **docs/SETUP_GUIDE.md** (本檔案)
   - 用途：設置說明

---

## 🛠️ 初次設置（5 分鐘）

### **Step 1：安裝檔案**

```bash
# 1. 將以下檔案放入專案根目錄
your-project/
├── tokens.json              ← 放這裡
├── generate-config.js       ← 放這裡
└── src/
    └── assets/
        └── main.css         ← 放這裡
```

### **Step 2：安裝依賴**

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

### **Step 3：生成 Tailwind Config**

```bash
node generate-config.js
```

你應該會看到：
```
✅ tailwind.config.cjs 已生成
✅ TOKEN_MAPPING.md 已生成
```

### **Step 4：設置 npm scripts**

編輯 `package.json`，加入以下 scripts：

```json
{
  "scripts": {
    "tokens:generate": "node generate-config.js",
    "dev": "npm run tokens:generate && vite",
    "build": "npm run tokens:generate && vite build"
  }
}
```

### **Step 5：測試**

```bash
npm run dev
```

應該會：
1. 自動執行 `generate-config.js`
2. 生成最新的 `tailwind.config.cjs`
3. 啟動開發伺服器

---

## 🔄 日常工作流程

### **情境 1：設計師更新 tokens**

```bash
# 1. 設計師從 Figma 導出新的 tokens.json
# 2. 覆蓋專案中的 tokens.json

# 3. 重新啟動開發伺服器
npm run dev

# 自動發生：
# ✅ generate-config.js 執行
# ✅ tailwind.config.cjs 更新
# ✅ TOKEN_MAPPING.md 更新
# ✅ Tailwind 重新編譯
# ✅ 所有 UI 自動更新
```

**不需要：**
- ❌ 手動執行任何腳本
- ❌ 修改任何 CSS 檔案
- ❌ 告訴 AI 新的數值

### **情境 2：使用 Claude Code 建立組件**

```
你：「請幫我建立一個帶編輯和刪除按鈕的卡片組件」

Claude Code：
1. 讀取 docs/TOKEN_MAPPING.md
2. 查表得知最新的 token 值
3. 生成：
   <div class="card">
     <button class="btn-action-edit">編輯</button>
     <button class="btn-action-delete">刪除</button>
   </div>

✅ 使用的都是最新的 token 值！
```

---

## 💡 Token 改變範例

### **範例：改變按鈕高度**

#### **修改前：**
```json
// tokens.json
{
  "semantic": {
    "dimension": {
      "height": {
        "md": {
          "$value": "{dimension.800}"  // 40px
        }
      }
    }
  }
}
```

#### **修改後：**
```json
{
  "semantic": {
    "dimension": {
      "height": {
        "md": {
          "$value": "{dimension.900}"  // 48px (從 800 改成 900)
        }
      }
    }
  }
}
```

#### **執行：**
```bash
npm run dev
```

#### **結果：**

**tailwind.config.cjs 自動更新：**
```javascript
// 之前
height: {
  'button-md': '40px',
}

// 之後
height: {
  'button-md': '48px',  // ✅ 自動改變
}
```

**main.css 不用改：**
```css
.btn-solid {
  @apply h-button-md;  /* 檔案內容沒變 */
}

/* 但編譯後的 CSS 自動變成：*/
.btn-solid {
  height: 48px;  /* ✅ 自動更新 */
}
```

**所有按鈕高度自動變成 48px！**

---

## 🔧 使用語義化 Token

### **在 main.css 中（推薦）**

```css
.custom-button {
  /* ✅ 使用語義化 key */
  @apply gap-icontext;         /* spacing.gap.icontext */
  @apply px-padding-object-x;  /* spacing.padding.object-x */
  @apply h-button-md;          /* dimension.height.md */
  
  /* ✅ 或使用數值 alias（效果相同） */
  @apply gap-100;    /* = gap-icontext */
  @apply px-400;     /* = px-padding-object-x */
  @apply h-800;      /* = h-button-md */
}
```

### **在 Vue 組件中**

```vue
<template>
  <!-- 使用預製 class -->
  <button class="btn-solid">
    <Icon />
    按鈕文字
  </button>
  
  <!-- 或直接使用 Tailwind utilities -->
  <button class="gap-icontext px-padding-object-x h-button-md bg-button-solid-background-default">
    自訂按鈕
  </button>
</template>
```

---

## 📊 Token 對照速查

| 用途 | Semantic Token | Tailwind Class | 數值 Alias | 實際值 |
|------|---------------|---------------|-----------|--------|
| Icon-文字間距 | spacing.gap.icontext | gap-icontext | gap-100 | 4px |
| 按鈕左右 padding | spacing.padding.object-x | px-padding-object-x | px-400 | 16px |
| 標準按鈕高度 | dimension.height.md | h-button-md | h-800 | 40px |
| 按鈕字體大小 | fontSize.body.s | text-body-s | text-200 | 14px |
| 按鈕圓角 | radius.lg | rounded-lg | rounded-200 | 8px |

**完整對照表請查看：** `docs/TOKEN_MAPPING.md`

---

## ⚠️ 常見問題

### **Q1: 為什麼執行 `npm run dev` 後沒有更新？**

**檢查：**
1. tokens.json 是否真的改變了？
2. generate-config.js 是否執行成功？
3. 是否重新啟動了開發伺服器？

**解決：**
```bash
# 手動執行一次
node generate-config.js

# 檢查是否有錯誤訊息
```

### **Q2: 我改了 main.css 但沒生效？**

**可能原因：**
- 使用的 class name 不存在於 tailwind.config.cjs

**解決：**
```bash
# 重新生成配置
npm run tokens:generate

# 檢查 tailwind.config.cjs 是否有該 class
```

### **Q3: tailwind.config.cjs 被我手動改了，怎麼辦？**

**解決：**
```bash
# 重新生成（會覆蓋手動修改）
node generate-config.js

# ⚠️ 永遠不要手動編輯 tailwind.config.cjs
# 如需修改，請編輯 tokens.json
```

### **Q4: 如何新增自己的 token？**

**步驟：**
1. 編輯 `tokens.json`，在適當的位置加入新 token
2. 執行 `npm run tokens:generate`
3. 新 token 會自動加入 tailwind.config.cjs

**範例：**
```json
// tokens.json
{
  "semantic": {
    "spacing": {
      "gap": {
        "card-content": {
          "$type": "spacing",
          "$value": "{spacing.500}",
          "$description": "卡片內容間距"
        }
      }
    }
  }
}
```

執行後，可以使用：
```css
@apply gap-card-content;  /* 20px */
```

---

## 🎯 最佳實踐

### ✅ **推薦做法**

1. **永遠只改 tokens.json**
   - 這是唯一真相來源
   - 所有修改都從這裡開始

2. **使用語義化 class name**
   - `gap-icontext` 比 `gap-100` 更清楚
   - 未來改值時不用擔心

3. **定期執行 generate-config.js**
   - 確保所有檔案同步
   - 或設定在 npm scripts 中自動執行

4. **給 Claude Code 看 TOKEN_MAPPING.md**
   - 它會使用最新的 token 值
   - 不需要手動告訴它

### ❌ **避免做法**

1. **不要手動編輯 tailwind.config.cjs**
   - 會被腳本覆蓋

2. **不要在 main.css 中寫死數值**
   ```css
   /* ❌ 不要這樣 */
   .btn {
     height: 40px;
     padding: 0 16px;
   }
   
   /* ✅ 要這樣 */
   .btn {
     @apply h-button-md px-padding-object-x;
   }
   ```

3. **不要跳過生成步驟**
   - 改完 tokens.json 一定要執行腳本
   - 否則 Tailwind config 不會更新

---

## 📚 相關檔案

- `tokens.json` - Design Tokens（設計師維護）
- `generate-config.js` - 生成腳本（自動化核心）
- `tailwind.config.cjs` - Tailwind 配置（自動生成）
- `main.css` - 預製組件（工程師維護）
- `docs/TOKEN_MAPPING.md` - Token 對照表（AI 閱讀）

---

## 🎉 完成！

現在你有一個完全自動化的 Design Token 系統：

1. ✅ 設計師改 tokens.json
2. ✅ 執行 `npm run dev`
3. ✅ 所有檔案自動更新
4. ✅ UI 自動套用新設計
5. ✅ AI 永遠知道最新值

**享受自動化的樂趣吧！** 🚀
