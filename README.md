# Proyek Company Profile 🚀

## Teknologi yang Digunakan

Di proyek ini, saya menggunakan beberapa teknologi yang memudahkan dalam pembuatan company profile yang modern dan responsif. Berikut teknologinya:

### 1. React ⚛️

React adalah library JavaScript yang membantu membangun user interface (UI). Dengan React, saya bisa membuat komponen yang bisa digunakan kembali dan mudah dikelola, sehingga proyek ini lebih terstruktur dan efisien.

### 2. TypeScript 🛠️

TypeScript adalah pengembangan dari JavaScript yang menambahkan tipe data statis. Dengan TypeScript, saya bisa menulis kode yang lebih aman dan mengurangi kemungkinan terjadinya bug, karena kesalahan bisa terdeteksi lebih awal.

### 3. Tailwind CSS 🎨

Tailwind CSS adalah framework CSS yang menggunakan pendekatan utility-first, yang membuat styling jadi lebih cepat dan mudah. Daripada menulis CSS kustom dari awal, dengan Tailwind saya bisa fokus pada penataan langsung di HTML, sehingga desain lebih konsisten dan responsif.

### 4. Lucide-react 🔍

Lucide-react adalah library ikon SVG yang mudah digunakan di aplikasi React. Dengan Lucide-react, saya bisa menambahkan ikon-ikon yang ringan dan konsisten karena tidak terlalu banyak pilihan seperti `react-icons`.

### 5. Next UI 🧩

Next UI adalah library komponen UI untuk React yang menyediakan komponen siap pakai dengan desain modern. Dengan Next UI, saya bisa mempercepat pembuatan antarmuka tanpa harus memikirkan desain dari nol, karena sudah ada komponen-komponen yang bisa langsung digunakan dan disesuaikan.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
