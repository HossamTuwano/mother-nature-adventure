# tailwind-theme-rules.md

Use `@theme` for Tailwind v4+.

Rules:
- use semantic tokens
- avoid hardcoded colors
- prefer reusable utilities
- prefer `bg-primary` over `bg-[#hex]`
- centralize tokens
- use config file only for older setups

## Tailwind v4+

```css
@import "tailwindcss";

@theme {
  --color-primary: #FCBC41;
  --color-secondary: #48B1FD;
  --color-text: #373737;
  --color-background: #ffffff;

  --font-body: Inter, sans-serif;

  --radius-xl: 1rem;

  --shadow-card:
    0 10px 25px rgb(0 0 0 / 0.08);
}
```

Generated utilities:

```html
bg-primary
text-primary
border-primary

bg-secondary
text-secondary

font-body
rounded-xl
shadow-card
```

Usage:

```html
<div class="bg-primary text-white rounded-xl shadow-card p-6">
  <h1 class="text-2xl font-bold">
    Dashboard
  </h1>

  <p class="text-text">
    Theme variables control the design system.
  </p>
</div>
```

Override defaults:

```css
@import "tailwindcss";

@theme {
  --color-*: initial;

  --color-primary: #FCBC41;
  --color-dark: #111827;
  --color-light: #F9FAFB;
}
```

## Older Tailwind Config Example

Use for:
- Tailwind v3
- React Native
- Expo
- legacy projects

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {},

    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      white: '#ffffff',

      'golden-yellow': '#FCBC41',
      'charcoal-gray': '#373737',
      'pastel-blue': '#B9D3FD',
      'deep-orange': '#FF6A0E',
      'aqua-blue': '#81ECFF',
      'sky-blue': '#48B1FD',

      cyan: '#3FECE6',
    },
  },

  plugins: [],
}
```

Usage:

```html
<div class="bg-golden-yellow text-charcoal-gray">
  Hello
</div>
```