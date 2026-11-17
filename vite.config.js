import { defineConfig } from 'vite';
import { cpSync } from 'node:fs';
export default defineConfig({ plugins: [{ name: 'copiar-documentos', closeBundle() { cpSync('docs', 'dist/docs', { recursive: true }); } }] });
