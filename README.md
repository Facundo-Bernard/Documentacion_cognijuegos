# Documentacion_cognijuegos

Guía técnica de Cognijuegos: arquitectura, juegos, integración entre frontend y backend y propuesta de motor de acciones con máquinas de estados.

## Abrir la guía

Cloná o descargá este repositorio y abrí [arquitectura-cognijuegos.html](arquitectura-cognijuegos.html) en un navegador. Conservá la carpeta `docs` junto al HTML: contiene los componentes, gráficos e imágenes necesarios.

La guía funciona sin instalar dependencias. Incluye búsqueda, navegación por capítulos, tema oscuro, impresión, capturas de los juegos y un gráfico animado de coordinación entre frontend y backend.

También podés servirla localmente desde la raíz del repositorio:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Abrí [la guía local](http://127.0.0.1:8765/arquitectura-cognijuegos.html). El capítulo de patrones está en `#patrones`.

## Contenido

- [Guía HTML interactiva](arquitectura-cognijuegos.html).
- [Especificación para implementar el motor de acciones y las máquinas de estados](docs/arquitectura/motor-acciones-y-maquina-de-estados.md).
- [Componentes de documentación y simuladores](docs/componentes/).
- [Capturas y procedencia](docs/imagenes/arquitectura/README.md).

Los simuladores y el gráfico son explicativos: no llaman APIs ni modifican partidas reales. La propuesta de motor describe una migración pendiente, no una integración ya desplegada.

## Criterio de implementación

**Cambios necesarios > código y funcionamiento actual > GDD.** El GDD se utiliza como contexto, no como una especificación que reemplace las reglas vigentes.

La guía identifica los commits de referencia de frontend y backend. Las capturas muestran la interfaz publicada y no certifican que el servidor desplegado coincida con el backend analizado.

## Verificación de los simuladores

Con Node.js:

```sh
node --check docs/componentes/juegos-narrativos.js
node --check docs/componentes/patron-narrativo.js
node --check docs/componentes/coordinacion-narrativa.js
node --test docs/componentes/patron-narrativo.test.mjs
```

Estas pruebas verifican el laboratorio documental, no la integración del juego real.

## Origen

Documentación extraída de [juegos-mayores-actualizaciones](https://github.com/MontiNahuel/juegos-mayores-actualizaciones), commit [d44747a](https://github.com/MontiNahuel/juegos-mayores-actualizaciones/commit/d44747a2732eb1ce1404edff0241a36bf488ba7c). Esta copia se mantiene como repositorio independiente.
