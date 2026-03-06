/**
 * Design Token 自動生成腳本
 * 專門針對 tokens_0204.json 結構設計
 * 
 * 功能：
 * 1. 讀取 tokens.json
 * 2. 解析所有 token 引用（例如 {spacing.100} → 4px）
 * 3. 生成 tailwind.config.cjs
 * 4. 生成 TOKEN_MAPPING.md（給 AI 閱讀）
 * 
 * 使用方式：
 * node generate-config.js
 */

const fs = require('fs');
const path = require('path');

// ============================================
// 輔助函數：解析 token 引用
// ============================================

/**
 * 解析 token 值中的引用
 * 例如："{spacing.100}" → "4px"
 * 
 * @param {string} value - token 值（可能包含引用）
 * @param {object} allTokens - 所有 tokens 的完整物件
 * @param {number} depth - 遞迴深度（防止無限循環）
 * @returns {string} 解析後的實際值
 */
function resolveTokenValue(value, allTokens, depth = 0) {
  // 防止無限遞迴
  if (depth > 10) {
    console.warn(`⚠️  警告：引用深度超過 10 層，可能有循環引用：${value}`);
    return value;
  }

  // 如果不是字串，直接返回
  if (typeof value !== 'string') {
    return value;
  }

  // 檢查是否包含引用（格式：{path.to.token}）
  const referenceMatch = value.match(/\{([^}]+)\}/g);
  
  if (!referenceMatch) {
    // 沒有引用，直接返回
    return value;
  }

  // 解析所有引用
  let resolvedValue = value;
  
  for (const ref of referenceMatch) {
    // 移除大括號，取得路徑
    const refPath = ref.slice(1, -1);
    const pathParts = refPath.split('.');
    
    // 遍歷路徑找到實際值
    // 從 core、semantic、component 開始找
    let currentValue = null;
    
    // 先檢查是否從 core/semantic/component 開始
    if (allTokens.core && allTokens.core[pathParts[0]]) {
      currentValue = allTokens.core;
    } else if (allTokens.semantic && allTokens.semantic[pathParts[0]]) {
      currentValue = allTokens.semantic;
    } else if (allTokens.component && allTokens.component[pathParts[0]]) {
      currentValue = allTokens.component;
    } else {
      // 如果找不到，試著從整個 allTokens 找
      currentValue = allTokens;
    }
    
    for (const part of pathParts) {
      if (currentValue && currentValue[part] !== undefined) {
        currentValue = currentValue[part];
      } else {
        // 找不到就返回原值（不警告，因為有些引用是正常的）
        currentValue = null;
        break;
      }
    }
    
    if (!currentValue) {
      // 找不到引用，保持原值
      continue;
    }
    
    // 取得 $value（如果有的話）
    const actualValue = currentValue?.$value || currentValue;
    
    // 遞迴解析（因為引用的值可能也包含引用）
    const resolved = resolveTokenValue(actualValue, allTokens, depth + 1);
    
    // 替換引用
    resolvedValue = resolvedValue.replace(ref, resolved);
  }
  
  // 處理數學運算（例如：4px * 2）
  if (resolvedValue.includes('*')) {
    try {
      // 簡單的乘法運算
      const match = resolvedValue.match(/^(.+?)\s*\*\s*(.+?)$/);
      if (match) {
        const left = parseFloat(match[1]);
        const right = parseFloat(match[2]);
        if (!isNaN(left) && !isNaN(right)) {
          const result = left * right;
          // 保留單位（px）
          const unit = match[1].match(/[a-z]+/i)?.[0] || '';
          resolvedValue = `${result}${unit}`;
        }
      }
    } catch (e) {
      console.warn(`⚠️  無法計算：${resolvedValue}`);
    }
  }
  
  return resolvedValue;
}

/**
 * 從 token 物件中提取實際值
 */
function getTokenValue(token, allTokens) {
  if (!token) return null;
  
  const value = token.$value || token;
  return resolveTokenValue(value, allTokens);
}

// ============================================
// 主要函數：生成 Tailwind Config
// ============================================

function generateTailwindConfig(tokens) {
  const { core, semantic, component } = tokens;
  
  // 準備配置物件
  const config = {
    spacing: {},
    height: {},
    width: {},
    colors: {},
    fontSize: {},
    fontWeight: {},
    lineHeight: {},
    letterSpacing: {},
    borderRadius: {},
    borderWidth: {},
    fontFamily: {},
  };

  // ============================================
  // 1. Spacing（間距）
  // ============================================
  
  // 1.1 從 core.spacing 生成數值 key
  if (core.spacing) {
    Object.entries(core.spacing).forEach(([key, token]) => {
      if (key === 'scale' || key === 'multi-value') return;
      const value = getTokenValue(token, tokens);
      if (value) {
        config.spacing[key] = value;
      }
    });
  }

  // 1.2 從 semantic.spacing.gap 生成語義化 key
  // 將連字號改為底線避免 Tailwind 解析問題
  if (semantic.spacing?.gap) {
    Object.entries(semantic.spacing.gap).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      if (value) {
        // 將連字號改為底線（保留語意）
        const cleanKey = key.replace(/-/g, '_');
        config.spacing[cleanKey] = value;
      }
    });
  }

  // 1.3 從 semantic.spacing.padding 生成語義化 key
  // 將連字號改為底線避免 Tailwind 解析問題
  if (semantic.spacing?.padding) {
    Object.entries(semantic.spacing.padding).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      if (value) {
        // 將連字號改為底線（保留語意）
        const cleanKey = key.replace(/-/g, '_');
        config.spacing[cleanKey] = value;
      }
    });
  }

  // ============================================
  // 2. Dimension（尺寸）
  // ============================================
  
  // 2.1 從 core.dimension 生成數值 key
  if (core.dimension) {
    Object.entries(core.dimension).forEach(([key, token]) => {
      if (key === 'scale') return;
      const value = getTokenValue(token, tokens);
      if (value) {
        config.height[key] = value;
        config.width[key] = value;
      }
    });
  }

  // 2.2 從 semantic.dimension.height 生成語義化 key
  // 不加 button- 前綴，直接用 sm/md/lg
  if (semantic.dimension?.height) {
    Object.entries(semantic.dimension.height).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      if (value) {
        config.height[key] = value;  // sm, md, lg
      }
    });
  }

  // 2.3 從 semantic.dimension.icon 生成 icon size
  // 不加 icon- 前綴
  if (semantic.dimension?.icon) {
    Object.entries(semantic.dimension.icon).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      if (value) {
        config.width[`icon-${key}`] = value;   // icon-xs, icon-sm (保留 icon- 因為需要區分)
        config.height[`icon-${key}`] = value;
      }
    });
  }

  // ============================================
  // 3. Colors（顏色）- 最複雜的部分
  // ============================================
  
  /**
   * 遞迴處理顏色 token
   * 支援巢狀結構（例如 colors.red.500）
   */
  function processColors(obj, prefix = '', allTokens) {
    const result = {};
    
    Object.entries(obj).forEach(([key, value]) => {
      const newKey = prefix ? `${prefix}-${key}` : key;
      
      // 如果有 $value，這是一個 token
      if (value.$value !== undefined) {
        const resolvedValue = getTokenValue(value, allTokens);
        if (resolvedValue) {
          result[newKey] = resolvedValue;
        }
      } 
      // 如果是物件但沒有 $value，繼續遞迴
      else if (typeof value === 'object' && value !== null) {
        const nested = processColors(value, newKey, allTokens);
        Object.assign(result, nested);
      }
    });
    
    return result;
  }

  // 3.1 處理 core colors
  if (core.colors) {
    const coreColors = processColors(core.colors, '', tokens);
    Object.assign(config.colors, coreColors);
  }

  // 3.2 處理 semantic colors（background, text, icon, border）
  // 使用簡短命名：bg-page 而非 bg-background-page
  if (semantic.background) {
    const bgColors = processColors(semantic.background, '', tokens);
    // 加上 bg- 前綴
    Object.keys(bgColors).forEach(key => {
      config.colors[`bg-${key}`] = bgColors[key];
    });
  }
  
  if (semantic.text) {
    const textColors = processColors(semantic.text, '', tokens);
    // 加上 text- 前綴
    Object.keys(textColors).forEach(key => {
      config.colors[`text-${key}`] = textColors[key];
    });
  }
  
  if (semantic.icon) {
    const iconColors = processColors(semantic.icon, '', tokens);
    // 加上 icon- 前綴
    Object.keys(iconColors).forEach(key => {
      config.colors[`icon-${key}`] = iconColors[key];
    });
  }
  
  if (semantic.border) {
    const borderColors = processColors(semantic.border, '', tokens);
    // 加上 border- 前綴
    Object.keys(borderColors).forEach(key => {
      config.colors[`border-${key}`] = borderColors[key];
    });
  }

  // 3.3 處理 component colors（button, action, menu, header 等）
  if (component) {
    Object.entries(component).forEach(([componentName, componentTokens]) => {
      if (typeof componentTokens === 'object') {
        const componentColors = processColors(componentTokens, componentName, tokens);
        Object.assign(config.colors, componentColors);
      }
    });
  }

  // ============================================
  // 4. Typography（字體相關）
  // ============================================
  
  // 4.1 Font Size
  if (core.fontSize) {
    Object.entries(core.fontSize).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      if (value) {
        config.fontSize[key] = value;
      }
    });
  }

  // 從 semantic.fontSize 生成語義化命名
  if (semantic.fontSize) {
    // heading: h1, h2, h3 → text-h1, text-h2, text-h3
    if (semantic.fontSize.heading) {
      Object.entries(semantic.fontSize.heading).forEach(([key, token]) => {
        const value = getTokenValue(token, tokens);
        if (value) {
          config.fontSize[key] = value;  // h1, h2, h3
        }
      });
    }
    
    // body: l, m, s, xs → text-body_l, text-body_m, text-body_s, text-body_xs  
    if (semantic.fontSize.body) {
      Object.entries(semantic.fontSize.body).forEach(([key, token]) => {
        const value = getTokenValue(token, tokens);
        if (value) {
          config.fontSize[`body_${key}`] = value;  // body_l, body_m, body_s, body_xs
        }
      });
    }
  }

  // 4.2 Font Weight
  if (core.fontWeights) {
    Object.entries(core.fontWeights).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      if (value) {
        config.fontWeight[key] = value;
      }
    });
  }

  // 從 semantic.fontWeight 生成語義化命名
  if (semantic.fontWeight) {
    Object.entries(semantic.fontWeight).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      if (value) {
        config.fontWeight[key] = value;
      }
    });
  }

  // 4.3 Line Height
  if (core.lineHeights) {
    Object.entries(core.lineHeights).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      if (value) {
        config.lineHeight[key] = value;
      }
    });
  }

  // 從 semantic.lineHeight 生成語義化命名
  if (semantic.lineHeight) {
    Object.entries(semantic.lineHeight).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      if (value) {
        config.lineHeight[key] = value;
      }
    });
  }

  // 4.4 Letter Spacing
  if (core.letterSpacing) {
    Object.entries(core.letterSpacing).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      if (value) {
        config.letterSpacing[key] = value;
      }
    });
  }

  // 從 semantic.letterSpacing 生成語義化命名
  if (semantic.letterSpacing) {
    Object.entries(semantic.letterSpacing).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      if (value) {
        config.letterSpacing[key] = value;
      }
    });
  }

  // 4.5 Font Family
  if (core.fontFamilies) {
    Object.entries(core.fontFamilies).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      if (value) {
        // 將字串轉換為陣列（Tailwind 格式）
        config.fontFamily[key] = value.split(',').map(f => f.trim());
      }
    });
  }

  // ============================================
  // 5. Border Radius（圓角）
  // ============================================
  
  if (core.borderRadius) {
    Object.entries(core.borderRadius).forEach(([key, token]) => {
      if (key === 'multi-value') return;
      const value = getTokenValue(token, tokens);
      if (value) {
        // 確保有單位
        const withUnit = value.toString().match(/\d+$/) ? `${value}px` : value;
        config.borderRadius[key] = withUnit;
      }
    });
  }

  // 從 semantic.radius 生成語義化命名
  if (semantic.radius) {
    Object.entries(semantic.radius).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      if (value) {
        const withUnit = value.toString().match(/\d+$/) ? `${value}px` : value;
        config.borderRadius[key] = withUnit;
      }
    });
  }

  // ============================================
  // 6. Border Width（邊框寬度）
  // ============================================
  
  if (core.borderWidth) {
    Object.entries(core.borderWidth).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      if (value) {
        // 確保有單位
        const withUnit = value === '0' || value === 0 ? '0' : `${value}px`;
        config.borderWidth[key] = withUnit;
      }
    });
  }

  // 從 semantic.borerWidth 生成（注意：原 JSON 中拼錯了 borerWidth）
  if (semantic.borerWidth) {
    Object.entries(semantic.borerWidth).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      if (value) {
        const withUnit = value === '0' || value === 0 ? '0' : `${value}px`;
        config.borderWidth[key] = withUnit;
      }
    });
  }

  return config;
}

// ============================================
// 生成 TOKEN_MAPPING.md
// ============================================

function generateTokenMapping(tokens) {
  const { core, semantic } = tokens;
  const lines = [];
  
  lines.push('# 🎨 Design Token 對照表');
  lines.push('');
  lines.push('> ⚠️ **此檔案由 generate-config.js 自動生成，請勿手動編輯**');
  lines.push('');
  lines.push(`**生成時間：** ${new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })}`);
  lines.push('');
  lines.push('---');
  lines.push('');

  // ============================================
  // 1. 間距系統
  // ============================================
  
  lines.push('## 📏 間距系統 (Spacing)');
  lines.push('');
  
  // Gap
  if (semantic.spacing?.gap) {
    lines.push('### Gap (間距)');
    lines.push('');
    lines.push('| Semantic Token | Tailwind Class | 數值 Alias | 實際值 | 說明 |');
    lines.push('|----------------|----------------|-----------|--------|------|');
    
    Object.entries(semantic.spacing.gap).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      const description = token.$description || '';
      
      // 找出對應的 core token
      const coreRef = token.$value?.match(/\{spacing\.(\d+)\}/)?.[1];
      const alias = coreRef ? `gap-${coreRef}` : '-';
      
      // 將連字號改為底線（與 Tailwind class 一致）
      const tailwindClass = `gap-${key.replace(/-/g, '_')}`;
      
      lines.push(`| spacing.gap.${key} | ${tailwindClass} | ${alias} | ${value} | ${description} |`);
    });
    
    lines.push('');
  }

  // Padding
  if (semantic.spacing?.padding) {
    lines.push('### Padding (內距)');
    lines.push('');
    lines.push('| Semantic Token | Tailwind Class | 數值 Alias | 實際值 | 說明 |');
    lines.push('|----------------|----------------|-----------|--------|------|');
    
    Object.entries(semantic.spacing.padding).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      const description = token.$description || '';
      
      // 找出對應的 core token
      const valueStr = token.$value || '';
      const coreRef = valueStr.match(/\{spacing\.(\d+)\}/)?.[1] || valueStr.match(/\{dimension\.(\d+)\}/)?.[1];
      const alias = coreRef ? `p-${coreRef}` : '-';
      
      // 將連字號改為底線（與 Tailwind class 一致）
      const tailwindClass = `padding-${key.replace(/-/g, '_')}`;
      
      lines.push(`| spacing.padding.${key} | ${tailwindClass} | ${alias} | ${value} | ${description} |`);
    });
    
    lines.push('');
  }

  // ============================================
  // 2. 尺寸系統
  // ============================================
  
  lines.push('## 📐 尺寸系統 (Dimension)');
  lines.push('');
  
  // Height
  if (semantic.dimension?.height) {
    lines.push('### Height (高度)');
    lines.push('');
    lines.push('| Semantic Token | Tailwind Class | 數值 Alias | 實際值 | 說明 |');
    lines.push('|----------------|----------------|-----------|--------|------|');
    
    Object.entries(semantic.dimension.height).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      const description = token.$description || '';
      
      // 找出對應的 core token
      const coreRef = token.$value?.match(/\{dimension\.(\d+)\}/)?.[1];
      const alias = coreRef ? `h-${coreRef}` : '-';
      
      lines.push(`| dimension.height.${key} | h-button-${key} | ${alias} | ${value} | ${description} |`);
    });
    
    lines.push('');
  }

  // Icon Size
  if (semantic.dimension?.icon) {
    lines.push('### Icon Size (圖示尺寸)');
    lines.push('');
    lines.push('| Semantic Token | Tailwind Class | 數值 Alias | 實際值 | 說明 |');
    lines.push('|----------------|----------------|-----------|--------|------|');
    
    Object.entries(semantic.dimension.icon).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      const description = token.$description || '';
      
      const coreRef = token.$value?.match(/\{dimension\.(\d+)\}/)?.[1];
      const alias = coreRef ? `w-${coreRef}` : '-';
      
      lines.push(`| dimension.icon.${key} | w-icon-${key} / h-icon-${key} | ${alias} | ${value} | ${description} |`);
    });
    
    lines.push('');
  }

  // ============================================
  // 3. 顏色系統（簡化版）
  // ============================================
  
  lines.push('## 🎨 顏色系統 (Colors)');
  lines.push('');
  lines.push('### Semantic Colors');
  lines.push('');
  lines.push('| Token | Tailwind Class | 實際值 | 說明 |');
  lines.push('|-------|----------------|--------|------|');
  
  // Background
  if (semantic.background) {
    Object.entries(semantic.background).forEach(([key, token]) => {
      const value = getTokenValue(token, tokens);
      const description = token.$description || '';
      lines.push(`| background.${key} | bg-background-${key} | ${value} | ${description} |`);
    });
  }
  
  lines.push('');
  lines.push('*註：完整顏色列表請參考 tailwind.config.cjs*');
  lines.push('');

  // ============================================
  // 4. 字體系統
  // ============================================
  
  lines.push('## ✍️ 字體系統 (Typography)');
  lines.push('');
  
  // Font Size
  if (semantic.fontSize) {
    lines.push('### Font Size (字體大小)');
    lines.push('');
    lines.push('| Semantic Token | Tailwind Class | 數值 Alias | 實際值 |');
    lines.push('|----------------|----------------|-----------|--------|');
    
    // Heading
    if (semantic.fontSize.heading) {
      Object.entries(semantic.fontSize.heading).forEach(([key, token]) => {
        const value = getTokenValue(token, tokens);
        const coreRef = token.$value?.match(/\{fontSize\.(\d+)\}/)?.[1];
        const alias = coreRef ? `text-${coreRef}` : '-';
        lines.push(`| fontSize.heading.${key} | text-heading-${key} | ${alias} | ${value} |`);
      });
    }
    
    // Body
    if (semantic.fontSize.body) {
      Object.entries(semantic.fontSize.body).forEach(([key, token]) => {
        const value = getTokenValue(token, tokens);
        const coreRef = token.$value?.match(/\{fontSize\.(\d+)\}/)?.[1];
        const alias = coreRef ? `text-${coreRef}` : '-';
        lines.push(`| fontSize.body.${key} | text-body-${key} | ${alias} | ${value} |`);
      });
    }
    
    lines.push('');
  }

  // ============================================
  // 5. 使用範例
  // ============================================
  
  lines.push('## 💡 使用範例');
  lines.push('');
  lines.push('### 方法 1：使用語義化 Class（推薦）');
  lines.push('');
  lines.push('```css');
  lines.push('.btn-solid {');
  lines.push('  /* 清楚表達設計意圖 */');
  lines.push('  @apply gap-icontext;            /* icon 和文字間距 */');
  lines.push('  @apply px-object_x;             /* 按鈕左右內距 */');
  lines.push('  @apply h-md;                    /* 標準按鈕高度 */');
  lines.push('  @apply bg-button-solid-background-default;');
  lines.push('}');
  lines.push('```');
  lines.push('');
  lines.push('### 方法 2：使用數值 Alias（簡潔）');
  lines.push('');
  lines.push('```css');
  lines.push('.btn-solid {');
  lines.push('  /* 簡潔但需要記憶對照 */');
  lines.push('  @apply gap-100;    /* = gap-icontext = 4px */');
  lines.push('  @apply px-400;     /* = px-object_x = 16px */');
  lines.push('  @apply h-800;      /* = h-md = 40px */');
  lines.push('}');
  lines.push('```');
  lines.push('');
  lines.push('### 兩種方法完全等價！');
  lines.push('');
  lines.push('當你在 tokens.json 中改變數值時：');
  lines.push('- ✅ 執行 `node generate-config.js`');
  lines.push('- ✅ tailwind.config.cjs 自動更新');
  lines.push('- ✅ CSS 編譯結果自動更新');
  lines.push('- ✅ 不需要手動改任何 CSS 檔案');
  lines.push('');
  
  lines.push('---');
  lines.push('');
  lines.push('**📝 註記：**');
  lines.push('- 此對照表由 `generate-config.js` 自動生成');
  lines.push('- 每次執行腳本都會更新為最新狀態');
  lines.push('- AI 閱讀此檔案可了解所有 token 的最新值');
  lines.push('');

  return lines.join('\n');
}

// ============================================
// 主程式
// ============================================

function main() {
  console.log('🚀 開始生成 Tailwind 配置...\n');
  
  try {
    // 1. 讀取 tokens.json
    console.log('📖 讀取 tokens.json...');
    const tokensPath = path.join(__dirname, 'tokens.json');
    
    if (!fs.existsSync(tokensPath)) {
      console.error('❌ 錯誤：找不到 tokens.json');
      console.error(`   請確保 tokens.json 存在於：${tokensPath}`);
      process.exit(1);
    }
    
    const tokensContent = fs.readFileSync(tokensPath, 'utf-8');
    const tokens = JSON.parse(tokensContent);
    console.log('✅ tokens.json 讀取成功\n');

    // 2. 生成 Tailwind Config
    console.log('⚙️  生成 tailwind.config.cjs...');
    const config = generateTailwindConfig(tokens);
    
    const tailwindConfigContent = `/** @type {import('tailwindcss').Config} */

/**
 * ⚠️ 此檔案由 generate-config.js 自動生成
 * 請勿手動編輯！
 * 
 * 如需修改：
 * 1. 編輯 tokens.json
 * 2. 執行 node generate-config.js
 * 
 * 生成時間：${new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })}
 */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app/**/*.{js,vue,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      spacing: ${JSON.stringify(config.spacing, null, 2)},
      
      height: ${JSON.stringify(config.height, null, 2)},
      
      width: ${JSON.stringify(config.width, null, 2)},
      
      colors: ${JSON.stringify(config.colors, null, 2)},
      
      fontSize: ${JSON.stringify(config.fontSize, null, 2)},
      
      fontWeight: ${JSON.stringify(config.fontWeight, null, 2)},
      
      lineHeight: ${JSON.stringify(config.lineHeight, null, 2)},
      
      letterSpacing: ${JSON.stringify(config.letterSpacing, null, 2)},
      
      borderRadius: ${JSON.stringify(config.borderRadius, null, 2)},
      
      borderWidth: ${JSON.stringify(config.borderWidth, null, 2)},
      
      fontFamily: ${JSON.stringify(config.fontFamily, null, 2)},
    },
  },
  plugins: [],
}
`;

    fs.writeFileSync(
      path.join(__dirname, 'tailwind.config.cjs'),
      tailwindConfigContent
    );
    console.log('✅ tailwind.config.cjs 生成成功\n');

    // 3. 生成 TOKEN_MAPPING.md
    console.log('📝 生成 TOKEN_MAPPING.md...');
    const mappingContent = generateTokenMapping(tokens);
    
    const docsDir = path.join(__dirname, 'docs');
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir);
    }
    
    fs.writeFileSync(
      path.join(docsDir, 'TOKEN_MAPPING.md'),
      mappingContent
    );
    console.log('✅ TOKEN_MAPPING.md 生成成功\n');

    // 4. 統計資訊
    console.log('📊 生成統計：');
    console.log(`   - Spacing tokens: ${Object.keys(config.spacing).length}`);
    console.log(`   - Color tokens: ${Object.keys(config.colors).length}`);
    console.log(`   - Typography tokens: ${Object.keys(config.fontSize).length}`);
    console.log(`   - 總計: ${Object.keys(config.spacing).length + Object.keys(config.colors).length + Object.keys(config.fontSize).length} tokens\n`);

    console.log('🎉 完成！所有檔案已生成\n');
    console.log('📁 生成的檔案：');
    console.log('   ✓ tailwind.config.cjs');
    console.log('   ✓ docs/TOKEN_MAPPING.md\n');
    console.log('💡 下一步：執行 npm run dev 啟動開發伺服器');
    
  } catch (error) {
    console.error('\n❌ 錯誤：', error.message);
    console.error('\n堆疊追蹤：');
    console.error(error.stack);
    process.exit(1);
  }
}

// 執行主程式
main();
