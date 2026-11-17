# Documentación de Cognijuegos

Guía de arquitectura y simulaciones explicativas del frontend y backend.

## Desarrollo

Requiere Node.js 20.19+ o 22.12+.

```sh
npm ci
npm run dev
```

`npm run build` genera el sitio en `dist`; `npm run preview` sirve esa compilación localmente. Los documentos e imágenes de `docs` se copian al directorio de salida.

La guía conserva sus capítulos y controles existentes. La simulación narrativa es un componente React; los valores son ejemplos y no envía peticiones al backend.

## Vercel

Importá este repositorio con la raíz del proyecto como Root Directory y `main` como rama de producción. Vercel detecta Vite, ejecuta `npm run build` y publica `dist`. La dirección anterior `/arquitectura-cognijuegos.html` redirige a `/`.

## Organización

- `src/Simulador.jsx`: secuencia y presentación del flujo narrativo.
- `src/guia.html` y `src/guia.css`: contenido y estilos de la guía original.
- `src/navegacion.js`: controles existentes de búsqueda, capítulos, impresión y tema.
- `docs/`: fuentes, especificaciones e imágenes.

La descripción del backend es histórica y debe contrastarse con la versión desplegada.
