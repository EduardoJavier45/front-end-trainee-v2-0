# Notas - Lección 3: Integración de Imágenes y Estructura de Assets

## 📋 Información del Proyecto

- **Carpeta:** actividad_m2_L3
- **Archivo principal:** index.html
- **Curso:** Front-End Trainee V2.0
- **Módulo:** M2 - Fundamentos Web y Git
- **Lección:** Lección 3
- **Fecha:** 30 de octubre de 2025

## 🎯 Objetivo del Ejercicio

Crear una página web con texto informativo que incluya una imagen de apoyo, organizando los recursos en una estructura de carpetas profesional usando la carpeta ASSETS.

## 📁 Estructura del Proyecto

```
actividad_m2_L3/
├── index.html                  (Página principal con texto informativo)
├── notas.md                    (Este archivo de documentación)
└── assets/
    ├── img/
    │   ├── README.md           (Instrucciones para agregar imágenes)
    │   └── [imagen a agregar]  (desarrollo-web.jpg - pendiente)
    └── css/
        └── README.md           (Carpeta preparada para CSS futuro)
```

## 🖼️ Integración de Imagen

### Etiqueta Utilizada: `<figure>` y `<img>`

```html
<figure>
  <img
    src="assets/img/desarrollo-web.jpg"
    alt="Ilustración del desarrollo web con código HTML, CSS y JavaScript"
    width="800"
    height="500"
  />
  <figcaption>
    Figura 1: Representación visual del desarrollo web moderno
  </figcaption>
</figure>
```

### Atributos de la Imagen:

- **`src`**: Ruta relativa a la imagen (`assets/img/desarrollo-web.jpg`)
- **`alt`**: Texto alternativo para accesibilidad
- **`width` y `height`**: Dimensiones de la imagen
- **`<figcaption>`**: Descripción/pie de la figura

## 📝 Contenido del Texto Informativo

### Tema: Desarrollo Web Moderno

El documento incluye información detallada sobre:

1. **Introducción al Desarrollo Web**

   - Definición y conceptos básicos
   - Front-End vs Back-End vs Full-Stack

2. **Tecnologías Fundamentales**

   - HTML5 y sus características
   - CSS3 y diseño moderno
   - JavaScript y programación web

3. **Diseño Responsive**

   - Importancia de la adaptabilidad
   - Estadísticas de uso móvil

4. **Herramientas de Desarrollo**

   - Editores de código
   - Control de versiones
   - Navegadores y DevTools
   - Build tools

5. **Tendencias Futuras**
   - PWAs
   - WebAssembly
   - Jamstack
   - Web Components
   - Inteligencia Artificial

## 🏷️ Etiquetas HTML Utilizadas

### Etiquetas Estructurales:

- `<header>` - Encabezado de la página
- `<main>` - Contenido principal
- `<article>` - Artículo informativo
- `<aside>` - Recursos adicionales
- `<footer>` - Pie de página

### Etiquetas de Contenido:

- `<h1>` a `<h4>` - Jerarquía de encabezados
- `<p>` - Párrafos de texto
- `<ul>`, `<ol>`, `<li>` - Listas ordenadas y no ordenadas
- `<dl>`, `<dt>`, `<dd>` - Lista de definiciones
- `<strong>` - Énfasis fuerte (negrita)
- `<em>` - Énfasis (cursiva)
- `<code>` - Código inline
- `<blockquote>` - Cita destacada
- `<hr>` - Línea horizontal

### Etiquetas de Multimedia:

- `<figure>` - Contenedor de imagen con descripción
- `<img>` - Imagen con ruta local
- `<figcaption>` - Pie de figura

### Etiquetas de Enlaces:

- `<a>` - Enlaces externos a recursos

## 📂 Carpeta ASSETS

### Propósito:

Organizar todos los recursos estáticos del proyecto de manera estructurada y profesional.

### Subcarpetas:

#### 📷 **IMG (Imágenes)**

- Almacena todas las imágenes del proyecto
- Formatos recomendados: JPG, PNG, SVG, WebP
- **Imagen requerida:** `desarrollo-web.jpg` (pendiente de agregar)
- Sugerencias: logos, iconos, fotografías, ilustraciones

#### 🎨 **CSS (Hojas de Estilo)**

- Preparada para hojas de estilo futuras
- Archivo a crear: `styles.css`
- Sin código CSS por el momento (según instrucciones)

## ✅ Conceptos Aplicados

- ✔️ **Estructura de carpetas profesional** con ASSETS
- ✔️ **Rutas relativas** para acceder a recursos locales
- ✔️ **Etiqueta `<figure>`** para imágenes con contexto
- ✔️ **Atributo `alt`** para accesibilidad
- ✔️ **Texto informativo extenso** sobre desarrollo web
- ✔️ **Organización semántica** del contenido
- ✔️ **Preparación para CSS** (carpeta creada)

## 🖼️ Instrucciones para Agregar la Imagen

1. **Buscar o crear una imagen** relacionada con desarrollo web
2. **Nombrar el archivo:** `desarrollo-web.jpg` (o actualizar el src en HTML)
3. **Guardar en:** `actividad_m2_L3/assets/img/`
4. **Verificar** que la ruta en el HTML coincida: `assets/img/desarrollo-web.jpg`

### Alternativas de Imágenes:

- Captura de pantalla de código
- Logo de HTML5, CSS3, JavaScript
- Ilustración de diseño web
- Gráfico de tecnologías web
- Workspace de desarrollador

## 💡 Mejores Prácticas Aplicadas

1. **Nombres descriptivos:** La imagen debe tener nombre significativo
2. **Organización:** Recursos separados en carpetas específicas
3. **Accesibilidad:** Texto alt descriptivo en todas las imágenes
4. **Semántica:** Uso de `<figure>` en lugar de solo `<img>`
5. **Escalabilidad:** Estructura preparada para crecer (más imágenes, CSS, JS)

## 🎓 Habilidades Desarrolladas

- [x] Crear estructura de carpetas ASSETS
- [x] Integrar imágenes con rutas relativas
- [x] Usar etiquetas `<figure>` y `<figcaption>`
- [x] Escribir texto informativo extenso
- [x] Aplicar múltiples tipos de listas
- [x] Usar etiquetas de definición (dl, dt, dd)
- [x] Estructurar contenido largo de forma legible
- [x] Preparar proyecto para futuros estilos CSS

## 📖 Diferencias con Ejercicios Anteriores

| Aspecto    | Ejercicio 1 & 2      | Ejercicio 3                      |
| ---------- | -------------------- | -------------------------------- |
| Estructura | Archivos sueltos     | Carpeta ASSETS organizada        |
| Multimedia | Sin imágenes         | Integración de imagen            |
| Rutas      | No aplicable         | Rutas relativas a assets         |
| Contenido  | Educativo sobre HTML | Informativo sobre desarrollo web |
| Extensión  | Moderada             | Texto extenso y detallado        |
| CSS        | No mencionado        | Carpeta preparada                |

## 🔗 Próximos Pasos

- [ ] Agregar la imagen `desarrollo-web.jpg` a la carpeta `assets/img/`
- [ ] Crear archivo `styles.css` en `assets/css/` (próxima lección)
- [ ] Vincular la hoja de estilos al HTML
- [ ] Aplicar diseño y colores al contenido
- [ ] Agregar más imágenes de apoyo si es necesario
- [ ] Optimizar imágenes para web (tamaño y formato)

## 📚 Recursos Mencionados en el Contenido

- [MDN Web Docs](https://developer.mozilla.org/es/)
- [W3Schools](https://www.w3schools.com/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

---

**Autor:** Eduardo Javier Perez Espindola
**Estado:** HTML Completo ✅ | Imagen Pendiente ⏳ | CSS Pendiente ⏳  
**Última actualización:** 30 de octubre de 2025

## ⚠️ Nota Importante

Recuerda agregar la imagen `desarrollo-web.jpg` en la carpeta `assets/img/` para que se visualice correctamente en el navegador. La estructura está lista y esperando el archivo de imagen.
