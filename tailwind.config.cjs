/** @type {import('tailwindcss').Config} */

// 從 tokens.json 讀取的設計系統
const tokens = require('./tokens.json');

// 解析 core tokens (基礎顏色)
const coreColors = tokens.core.core;

// 解析 semantic tokens (語義化顏色)
const semanticTokens = tokens.semantic.semantic;

// 解析 component tokens (組件顏色)
const componentTokens = tokens.component.component;

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./app/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      // ==========================================
      // 基礎顏色 (Core Colors)
      // ==========================================
      colors: {
        // 品牌色
        brand: coreColors.colorsBrand,
        
        // 黑白
        black: coreColors.colorsBlack,
        white: coreColors.colorsWhite,
        transparent: coreColors.colorsTransparent,
        
        // 灰階
        gray: {
          50: '#f9fafb',
          100: coreColors.colorsGray100,
          200: coreColors.colorsGray200,
          300: coreColors.colorsGray300,
          400: coreColors.colorsGray400,
          500: coreColors.colorsGray500,
          600: coreColors.colorsGray600,
          700: coreColors.colorsGray700,
          800: coreColors.colorsGray800,
          900: coreColors.colorsGray900,
        },
        
        // 紅色
        red: {
          100: coreColors.colorsRed100,
          200: coreColors.colorsRed200,
          300: coreColors.colorsRed300,
          400: coreColors.colorsRed400,
          500: coreColors.colorsRed500,
          600: coreColors.colorsRed600,
          700: coreColors.colorsRed700,
          800: coreColors.colorsRed800,
          900: coreColors.colorsRed900,
        },
        
        // 橙色
        orange: {
          100: coreColors.colorsOrange100,
          200: coreColors.colorsOrange200,
          300: coreColors.colorsOrange300,
          400: coreColors.colorsOrange400,
          500: coreColors.colorsOrange500,
          600: coreColors.colorsOrange600,
          700: coreColors.colorsOrange700,
          800: coreColors.colorsOrange800,
          900: coreColors.colorsOrange900,
        },
        
        // 黃色
        yellow: {
          100: coreColors.colorsYellow100,
          200: coreColors.colorsYellow200,
          300: coreColors.colorsYellow300,
          400: coreColors.colorsYellow400,
          500: coreColors.colorsYellow500,
          600: coreColors.colorsYellow600,
          700: coreColors.colorsYellow700,
          800: coreColors.colorsYellow800,
          900: coreColors.colorsYellow900,
        },
        
        // 綠色
        green: {
          100: coreColors.colorsGreen100,
          200: coreColors.colorsGreen200,
          300: coreColors.colorsGreen300,
          400: coreColors.colorsGreen400,
          500: coreColors.colorsGreen500,
          600: coreColors.colorsGreen600,
          700: coreColors.colorsGreen700,
          800: coreColors.colorsGreen800,
          900: coreColors.colorsGreen900,
        },
        
        // Teal
        teal: {
          100: coreColors.colorsTeal100,
          200: coreColors.colorsTeal200,
          300: coreColors.colorsTeal300,
          400: coreColors.colorsTeal400,
          500: coreColors.colorsTeal500,
          600: coreColors.colorsTeal600,
          700: coreColors.colorsTeal700,
          800: coreColors.colorsTeal800,
          900: coreColors.colorsTeal900,
        },
        
        // 藍色
        blue: {
          100: coreColors.colorsBlue100,
          200: coreColors.colorsBlue200,
          300: coreColors.colorsBlue300,
          400: coreColors.colorsBlue400,
          500: coreColors.colorsBlue500,
          600: coreColors.colorsBlue600,
          700: coreColors.colorsBlue700,
          800: coreColors.colorsBlue800,
          900: coreColors.colorsBlue900,
        },
        
        // Indigo
        indigo: {
          100: coreColors.colorsIndigo100,
          200: coreColors.colorsIndigo200,
          300: coreColors.colorsIndigo300,
          400: coreColors.colorsIndigo400,
          500: coreColors.colorsIndigo500,
          600: coreColors.colorsIndigo600,
          700: coreColors.colorsIndigo700,
          800: coreColors.colorsIndigo800,
          900: coreColors.colorsIndigo900,
        },
        
        // 紫色
        purple: {
          100: coreColors.colorsPurple100,
          200: coreColors.colorsPurple200,
          300: coreColors.colorsPurple300,
          400: coreColors.colorsPurple400,
          500: coreColors.colorsPurple500,
          600: coreColors.colorsPurple600,
          700: coreColors.colorsPurple700,
          800: coreColors.colorsPurple800,
          900: coreColors.colorsPurple900,
        },
        
        // 粉色
        pink: {
          100: coreColors.colorsPink100,
          200: coreColors.colorsPink200,
          300: coreColors.colorsPink300,
          400: coreColors.colorsPink400,
          500: coreColors.colorsPink500,
          600: coreColors.colorsPink600,
          700: coreColors.colorsPink700,
          800: coreColors.colorsPink800,
          900: coreColors.colorsPink900,
        },
        
        // Surface (背景層級)
        surface: {
          100: coreColors.colorsSurface100,
          200: coreColors.colorsSurface200,
          300: coreColors.colorsSurface300,
        },
        
        // Border (邊框)
        border: {
          100: coreColors.colorsBorder100,
        },
        
        // ==========================================
        // 語義化顏色 (Semantic Tokens)
        // 使用方式: bg-page, text-default, border-primary
        // ==========================================
        
        // 背景色 (bg-*)
        bg: {
          page: semanticTokens.backgroundPage,
          primary: semanticTokens.backgroundPrimary,
          'primary-hover': semanticTokens.backgroundPrimaryHover,
          'primary-active': semanticTokens.backgroundPrimaryActive,
          'primary-muted': semanticTokens.backgroundPrimaryMuted,
          'gray-muted': semanticTokens.backgroundGrayMuted,
          'yellow-muted': semanticTokens.backgroundYellowMuted,
          transparent: semanticTokens.backgroundTransparent,
          subtle: semanticTokens.backgroundSubtle,
          elevated: semanticTokens.backgroundElevated,
        },
        
        // 文字色 (text-*)
        text: {
          default: semanticTokens.textDefault,
          secondary: semanticTokens.textSecondary,
          primary: semanticTokens.textPrimary,
          disabled: semanticTokens.textDisabled,
        },
        
        // 圖標色 (text-icon-* 或直接用 text-*)
        icon: {
          default: semanticTokens.iconDefault,
          secondary: semanticTokens.iconSecondary,
          'secondary-hover': semanticTokens.iconSecondaryHover,
          primary: semanticTokens.iconPrimary,
          'primary-hover': semanticTokens.iconPrimaryHover,
          disabled: semanticTokens.iconDisabled,
          visible: semanticTokens.iconVisible,
          'visible-hover': semanticTokens.iconVisibleHover,
        },
        
        // 邊框色 (border-*)
        border: {
          default: semanticTokens.borderDefault,
          primary: semanticTokens.borderPrimary,
          'primary-hover': semanticTokens.borderPrimaryHover,
          'primary-active': semanticTokens.borderPrimaryActive,
          'secondary-focus': semanticTokens.borderSecondaryFocus,
        },
        
        // ==========================================
        // 組件專用顏色 (Component Tokens)
        // ==========================================
        
        // 按鈕 - 實心 (btn-solid)
        'btn-solid': {
          DEFAULT: componentTokens.buttonSolidBackgroundDefault,
          hover: componentTokens.buttonSolidBackgroundHover,
          active: componentTokens.buttonSolidBackgroundActive,
          disabled: componentTokens.buttonSolidBackgroundDisabled,
          text: componentTokens.buttonSolidTextDefault,
          'text-disabled': componentTokens.buttonSolidTextDisabled,
          icon: componentTokens.buttonSolidIconDefault,
          'icon-disabled': componentTokens.buttonSolidIconDisabled,
        },
        
        // 按鈕 - 線框 (btn-outline)
        'btn-outline': {
          active: componentTokens.buttonOutlineBackgroundActive,
          text: componentTokens.buttonOutlineTextDefault,
          'text-disabled': componentTokens.buttonOutlineTextDisabled,
          border: componentTokens.buttonOutlineBorderDefault,
          'border-hover': componentTokens.buttonOutlineBorderHover,
          'border-disabled': componentTokens.buttonOutlineBorderDisabled,
          icon: componentTokens.buttonOutlineIconDefault,
          'icon-disabled': componentTokens.buttonOutlineIconDisabled,
        },
        
        // 操作按鈕 - 編輯
        'action-edit': {
          'bg-active': componentTokens.actionEditBackgroundActive,
          icon: componentTokens.actionEditIconDefault,
          'icon-interactive': componentTokens.actionEditIconInteractive,
        },
        
        // 操作按鈕 - 刪除
        'action-delete': {
          'bg-active': componentTokens.actionDeleteBackgroundActive,
          icon: componentTokens.actionDeleteIconDefault,
          'icon-interactive': componentTokens.actionDeleteIconInteractive,
        },
        
        // 操作按鈕 - 顯示
        'action-show': {
          'bg-active': componentTokens.actionShowBackgroundActive,
          icon: componentTokens.actionShowIconDefault,
          'icon-interactive': componentTokens.actionShowIconInteractive,
        },
        
        // 操作按鈕 - 隱藏
        'action-hide': {
          'bg-active': componentTokens.actionHideBackgroundActive,
          icon: componentTokens.actionHideIconDefault,
          'icon-interactive': componentTokens.actionHideIconInteractive,
        },
        
        // 選單項目
        'menu-item': {
          bg: componentTokens.menuItemBackgroundDefault,
          'bg-hover': componentTokens.menuItemBackgroundHover,
          'bg-active': componentTokens.menuItemBackgroundActive,
          text: componentTokens.menuItemTextDefault,
          'text-interactive': componentTokens.menuItemTextInteractive,
          icon: componentTokens.menuItemIconDefault,
          'icon-interactive': componentTokens.menuItemIconInteractive,
        },
        
        // Header
        header: {
          bg: componentTokens.headerContainerBackground,
          'logo-text': componentTokens.headerLogoText,
          'logo-icon': componentTokens.headerLogoIcon,
          'action-icon': componentTokens.headerActionIconDefault,
          'action-icon-hover': componentTokens.headerActionIconHover,
          'action-icon-active': componentTokens.headerActionIconActive,
          'action-bg-active': componentTokens.headerActionBackgroundActive,
          'user-name': componentTokens.headerUserName,
          'user-role': componentTokens.headerUserRole,
        },
        
        // 分頁器
        pagination: {
          bg: componentTokens.paginationBackgroundDefault,
          'bg-hover': componentTokens.paginationBackgroundHover,
          'bg-active': componentTokens.paginationBackgroundActive,
          text: componentTokens.paginationTextDefault,
          'text-interactive': componentTokens.paginationTextInteractive,
          'text-disabled': componentTokens.paginationTextDisabled,
          border: componentTokens.paginationBorderDefault,
        },
        
        // 輸入框
        input: {
          border: componentTokens.inputBorderDefault,
          'border-focus': componentTokens.inputBorderFocus,
          text: componentTokens.inputTextDefault,
          'text-focus': componentTokens.inputTextFocus,
          bg: componentTokens.inputBackgroundDefault,
        },
        
        // 下拉選單
        dropdown: {
          border: componentTokens.dropdownBorderDefault,
          'border-focus': componentTokens.dropdownBorderFocus,
          text: componentTokens.dropdownTextDefault,
          bg: componentTokens.dropdownBackgroundDefault,
          'bg-focus': componentTokens.dropdownBackgroundFocus,
        },
      },
      
      // ==========================================
      // 間距系統 (Spacing)
      // ==========================================
      spacing: {
        // 100 系列 = 4px 的倍數
        '100': '4px',
        '200': '8px',
        '300': '12px',
        '400': '16px',
        '500': '20px',
        '600': '24px',
        '700': '28px',
        '800': '32px',
        '900': '36px',
        '1000': '40px',
      },
      
      // ==========================================
      // 字體大小 (Typography)
      // ==========================================
      fontSize: {
        // 標題
        'h1': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'h2': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'h5': ['18px', { lineHeight: '24px', fontWeight: '600' }],
        
        // 正文
        'body-l': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-m': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'body-s': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        
        // 標籤
        'label': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'caption': ['12px', { lineHeight: '16px', fontWeight: '400' }],
      },
      
      // ==========================================
      // 圓角 (Border Radius)
      // ==========================================
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}
