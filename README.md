# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

## React commands
1. npm create vite@latest
2. npm run dev for running application
3. npm run build for hosting
4. npm i react-scroll for installing scrolling dependencies

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🎓 Edusity – Modern University Landing Page (React)

Edusity is a modern, responsive university landing page built with **React**.  
It demonstrates smooth scrolling navigation, dynamic UI sections, and a fully functional contact form using third-party integrations.

---

## 🚀 Live Features Overview

- Smooth scrolling navigation (single-page experience)
- Sticky navbar with mobile menu
- Animated testimonials slider
- Fully functional contact form (no backend required)
- Responsive design for all screen sizes

---

## 🔗 Important Integrations (Core to This Project)

This project relies on **two critical external services**:

1. **React Scroll** – for smooth navigation between sections  
2. **Web3Forms** – for handling contact form submissions securely

These are explained in detail below.

---

## 🔹 1. React Scroll (Smooth Section Navigation)

### 📦 Package
- **NPM:** https://www.npmjs.com/package/react-scroll

### ✅ Why it is used
`react-scroll` enables **smooth scrolling navigation** between page sections **without page reloads**, making the site feel like a true single-page application.

---

### 🔧 Installation

```bash
npm install react-scroll
