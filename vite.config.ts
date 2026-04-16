import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Custom plugin for Figma assets
function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  // 1. SET THE BASE PATH (Crucial for GitHub Pages)
  base: '/Chemistrypresentationslides/', 

  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      // 2. SET ALIASES (Needed for shadcn/ui and your imports)
      '@': path.resolve(__dirname, './src'),
    },
  },

  // 3. INCLUDE ASSETS
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // Optional: Build settings to ensure output is clean
  build: {
    outDir: 'dist',
  }
})
