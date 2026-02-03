/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ============================================
      // 間距系統 (Spacing) - 根據你的實際 tokens
      // ============================================
      spacing: {
        '50': '2px',     // xxs
        '100': '4px',    // xs (icon-text gap)
        '200': '8px',    // sm
        '300': '12px',   // md
        '400': '16px',   // lg (按鈕 padding-x)
        '500': '20px',   // xl
        '600': '24px',   // 2xl
        '700': '32px',   // 3xl
        '800': '40px',   // 4xl (按鈕高度)
        '900': '48px',
        '1000': '64px',
      },

      // ============================================
      // 高度 (Height)
      // ============================================
      height: {
        'btn-md': '40px',  // dimension/height/md
      },

      // ============================================
      // 顏色系統 - 直接從 component tokens 映射
      // ============================================
      colors: {
        // === Button Solid ===
        'btn-solid': '#c51616',                    // buttonSolidBackgroundDefault
        'btn-solid-hover': '#df3f3f',             // buttonSolidBackgroundHover
        'btn-solid-active': '#8f0f0f',            // buttonSolidBackgroundActive
        'btn-solid-disabled': '#71809633',        // buttonSolidBackgroundDisabled
        'btn-solid-text': '#ffffff',              // buttonSolidTextDefault
        'btn-solid-text-disabled': '#ffffff7f',   // buttonSolidTextDisabled
        'btn-solid-icon': '#ffffff',              // buttonSolidIconDefault
        'btn-solid-icon-disabled': '#ffffff7f',   // buttonSolidIconDisabled

        // === Button Outline ===
        'btn-outline-border': '#c51616',          // buttonOutlineBorderDefault
        'btn-outline-border-hover': '#df3f3f',    // buttonOutlineBorderHover
        'btn-outline-border-disabled': '#324467', // buttonOutlineBorderDisabled
        'btn-outline-active': '#8f0f0f',          // buttonOutlineBackgroundActive
        'btn-outline-text': '#ffffff',            // buttonOutlineTextDefault
        'btn-outline-text-disabled': '#ffffff7f', // buttonOutlineTextDisabled
        'btn-outline-icon': '#ffffff',            // buttonOutlineIconDefault
        'btn-outline-icon-disabled': '#ffffff7f', // buttonOutlineIconDisabled

        // === Semantic Colors ===
        'page': '#111722',              // backgroundPage
        'subtle': '#151c2b',            // backgroundSubtle
        'elevated': '#192233',          // backgroundElevated
        'default': '#ffffff',           // textDefault
        'secondary': '#a0aec0',         // textSecondary
        'primary': '#c51616',           // primary colors
        'primary-hover': '#df3f3f',     // primary hover
        'primary-active': '#8f0f0f',    // primary active
        'primary-muted': '#c5161633',   // primary muted
        'gray-muted': '#71809633',      // gray muted
        'yellow-muted': '#ecc94b33',    // yellow muted
        'border-default': '#324467',    // borderDefault

        // === Action Buttons ===
        'action-edit-icon': '#a0aec0',
        'action-edit-icon-interactive': '#cbd5e0',
        'action-edit-bg-active': '#71809633',
        'action-delete-icon': '#c51616',
        'action-delete-icon-interactive': '#df3f3f',
        'action-delete-bg-active': '#c5161633',
        'action-show-icon': '#ecc94b',
        'action-show-icon-interactive': '#f6e05e',
        'action-show-bg-active': '#ecc94b33',
        'action-hide-icon': '#a0aec0',
        'action-hide-icon-interactive': '#cbd5e0',
        'action-hide-bg-active': '#71809633',

        // === Menu ===
        'menu-bg': '#71809633',
        'menu-bg-hover': '#df3f3f',
        'menu-bg-active': '#c51616',
        'menu-text': '#a0aec0',
        'menu-text-interactive': '#ffffff',
        'menu-icon': '#a0aec0',
        'menu-icon-interactive': '#ffffff',

        // === Input ===
        'input-bg': '#111722',
        'input-text': '#a0aec0',
        'input-text-focus': '#ffffff',
        'input-border': '#324467',
        'input-border-focus': '#7180967f',

        // === Dropdown ===
        'dropdown-bg': '#111722',
        'dropdown-bg-focus': '#111722',
        'dropdown-text': '#ffffff',
        'dropdown-border': '#324467',
        'dropdown-border-focus': '#7180967f',

        // === Pagination ===
        'pagination-bg': '#00000000',
        'pagination-bg-hover': '#df3f3f',
        'pagination-bg-active': '#8f0f0f',
        'pagination-text': '#a0aec0',
        'pagination-text-interactive': '#ffffff',
        'pagination-text-disabled': '#ffffff7f',
        'pagination-border': '#324467',

        // === Header ===
        'header-bg': '#111722',
        'header-action-bg-active': '#c5161633',
        'header-action-icon': '#a0aec0',
        'header-action-icon-hover': '#df3f3f',
        'header-action-icon-active': '#df3f3f',
        'header-logo-text': '#ffffff',
        'header-logo-icon': '#c51616',
        'header-user-name': '#ffffff',
        'header-user-role': '#a0aec0',
      },

      // ============================================
      // 字體大小 - 修正為 14px
      // ============================================
      fontSize: {
        // Headers
        'h1': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'h2': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'h5': ['18px', { lineHeight: '24px', fontWeight: '600' }],

        // Body
        'body-l': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-m': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'body-s': ['14px', { lineHeight: '20px', fontWeight: '400' }],  // ✅ 修正為 14px

        'label': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'caption': ['12px', { lineHeight: '16px', fontWeight: '400' }],
      },

      // ============================================
      // 圓角 (Border Radius)
      // ============================================
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '8px',       // 互動元件 (按鈕)
        'lg': '12px',      // 容器
        'xl': '16px',
        'full': '9999px',
      },

      // ============================================
      // 字體
      // ============================================
      fontFamily: {
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
