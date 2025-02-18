import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { Component } from 'react';
import { defineConfig } from 'vite';  

export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  resolve:{
    alias: {
      src: "/src",
      Components: "/src/Components",
      Pages: "/src/Pages",
      Assets: "/src/Assets",
      Layouts: "/src/Layouts",
      Redux: "/src/Redux",
      Configs: "/src/Configs",
      Helpers: "/src/Helpers",
      Routes: "/src/Routes",
    }
  },
})
