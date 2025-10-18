# 📚 HTML5 Semántico - Guía Completa para Estudiantes

**Módulo:** M2 - Fundamentos Web y Git  
**Tema:** 01_HTML_Semántico  
**Curso:** Front-End Trainee v2.0  
**Fecha:** 18 de Octubre, 2025

---

## 📋 Índice

1. [¿Qué es HTML?](#qué-es-html)
2. [Estructura Básica de un Documento HTML](#estructura-básica)
3. [Elementos Semánticos](#elementos-semánticos)
4. [Etiquetas Fundamentales](#etiquetas-fundamentales)
5. [Formularios](#formularios)
6. [Multimedia](#multimedia)
7. [Atributos Importantes](#atributos-importantes)
8. [Buenas Prácticas](#buenas-prácticas)
9. [Ejercicios Prácticos](#ejercicios-prácticos)
10. [Recursos Adicionales](#recursos-adicionales)

---

## 🎯 ¿Qué es HTML?

**HTML (HyperText Markup Language)** es el lenguaje estándar para crear páginas web. No es un lenguaje de programación, sino un **lenguaje de marcado** que utiliza etiquetas para estructurar y dar significado al contenido.

### 🔍 Conceptos Clave:
- **Etiqueta:** Elemento que define la estructura `<etiqueta>`
- **Atributo:** Información adicional sobre el elemento `<etiqueta atributo="valor">`
- **Elemento:** Etiqueta completa con su contenido `<etiqueta>contenido</etiqueta>`
- **Semántico:** Que tiene significado y propósito específico

---

## 🏗️ Estructura Básica de un Documento HTML {#estructura-básica}

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Metadatos: información sobre el documento -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Descripción de la página">
    <title>Título de la Página</title>
    
    <!-- Enlaces a recursos externos -->
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="favicon.ico">
</head>
<body>
    <!-- Contenido visible de la página -->
    <h1>¡Hola Mundo!</h1>
    <p>Este es mi primer documento HTML.</p>
</body>
</html>
```

### 📖 Explicación de Elementos:

| Elemento | Descripción |
|----------|-------------|
| `<!DOCTYPE html>` | Declara que es un documento HTML5 |
| `<html lang="es">` | Elemento raíz, `lang` especifica el idioma |
| `<head>` | Contiene metadatos (no visible al usuario) |
| `<meta charset="UTF-8">` | Define la codificación de caracteres |
| `<title>` | Título que aparece en la pestaña del navegador |
| `<body>` | Contenido visible de la página |

---

## 🧩 Elementos Semánticos {#elementos-semánticos}

Los elementos semánticos **dan significado** al contenido, no solo apariencia. Son importantes para:
- **SEO** (Search Engine Optimization)
- **Accesibilidad** (lectores de pantalla)
- **Mantenibilidad** del código

### 🏛️ Estructura de Página Semántica:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Sitio Web Semántico</title>
</head>
<body>
    <!-- Encabezado principal del sitio -->
    <header>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#acerca">Acerca de</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <!-- Contenido principal -->
    <main>
        <!-- Sección destacada -->
        <section id="hero">
            <h1>Bienvenido a Mi Sitio</h1>
            <p>Una breve descripción del sitio.</p>
        </section>

        <!-- Artículo independiente -->
        <article>
            <header>
                <h2>Título del Artículo</h2>
                <time datetime="2025-10-18">18 de Octubre, 2025</time>
            </header>
            <p>Contenido del artículo...</p>
            <footer>
                <p>Autor: Juan Pérez</p>
            </footer>
        </article>

        <!-- Contenido relacionado -->
        <aside>
            <h3>Artículos Relacionados</h3>
            <ul>
                <li><a href="#">Artículo 1</a></li>
                <li><a href="#">Artículo 2</a></li>
            </ul>
        </aside>
    </main>

    <!-- Pie de página -->
    <footer>
        <p>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>
</body>
</html>
```

### 📚 Elementos Semánticos Principales:

| Elemento | Propósito | Ejemplo de Uso |
|----------|-----------|----------------|
| `<header>` | Encabezado de página o sección | Logo, navegación principal |
| `<nav>` | Navegación principal | Menús, enlaces |
| `<main>` | Contenido principal único | Contenido central de la página |
| `<section>` | Sección temática | Capítulos, pestañas |
| `<article>` | Contenido independiente | Posts de blog, noticias |
| `<aside>` | Contenido relacionado | Barras laterales, widgets |
| `<footer>` | Pie de página o sección | Copyright, enlaces legales |
| `<figure>` | Contenido ilustrativo | Imágenes con descripción |
| `<figcaption>` | Descripción de figura | Pie de foto |

---

## 🏷️ Etiquetas Fundamentales {#etiquetas-fundamentales}

### 📝 Texto y Contenido:

```html
<!-- Encabezados (jerarquía importante) -->
<h1>Título Principal (solo uno por página)</h1>
<h2>Título Secundario</h2>
<h3>Subtítulo</h3>
<h4>Título de 4to Nivel</h4>
<h5>Título de 5to Nivel</h5>
<h6>Título de 6to Nivel</h6>

<!-- Párrafos y texto -->
<p>Este es un párrafo de texto normal.</p>
<p>Puedes usar <strong>texto en negrita</strong> y <em>texto en cursiva</em>.</p>
<p>También hay <mark>texto resaltado</mark> y <small>texto pequeño</small>.</p>

<!-- Citas -->
<blockquote cite="https://ejemplo.com">
    Esta es una cita larga que se muestra en bloque.
</blockquote>

<p>Según Einstein: <q>La imaginación es más importante que el conocimiento.</q></p>

<!-- Código -->
<p>El comando <code>console.log()</code> muestra información en la consola.</p>

<pre>
    <code>
    function saludar() {
        console.log("¡Hola mundo!");
    }
    </code>
</pre>

<!-- Texto con formato especial -->
<p>Agua: H<sub>2</sub>O</p>
<p>E = mc<sup>2</sup></p>
<p><del>Texto tachado</del> <ins>Texto insertado</ins></p>
```

### 🔗 Enlaces:

```html
<!-- Enlace a otra página -->
<a href="https://www.ejemplo.com">Visita nuestro sitio web</a>

<!-- Enlace a una sección de la misma página -->
<a href="#contacto">Ir a contacto</a>

<!-- Enlace para abrir en nueva pestaña -->
<a href="https://www.ejemplo.com" target="_blank" rel="noopener">
    Abrir en nueva pestaña
</a>

<!-- Enlace de email -->
<a href="mailto:contacto@ejemplo.com">Enviar email</a>

<!-- Enlace de teléfono -->
<a href="tel:+1234567890">Llamar ahora</a>
```

### 📋 Listas:

```html
<!-- Lista desordenada -->
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
</ul>

<!-- Lista ordenada -->
<ol>
    <li>Primer paso</li>
    <li>Segundo paso</li>
    <li>Tercer paso</li>
</ol>

<!-- Lista de definiciones -->
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>

<!-- Lista anidada -->
<ul>
    <li>Frutas
        <ul>
            <li>Manzana</li>
            <li>Banana</li>
        </ul>
    </li>
    <li>Verduras
        <ul>
            <li>Zanahoria</li>
            <li>Brócoli</li>
        </ul>
    </li>
</ul>
```

### 📊 Tablas:

```html
<table>
    <caption>Horario de Clases</caption>
    <thead>
        <tr>
            <th>Hora</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>9:00 AM</td>
            <td>Matemáticas</td>
            <td>Historia</td>
            <td>Ciencias</td>
        </tr>
        <tr>
            <td>10:00 AM</td>
            <td>Inglés</td>
            <td>Arte</td>
            <td>Educación Física</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">Total: 6 clases por semana</td>
        </tr>
    </tfoot>
</table>
```

---

## 📝 Formularios {#formularios}

Los formularios permiten recopilar información del usuario:

```html
<form action="/procesar" method="POST">
    <fieldset>
        <legend>Información Personal</legend>
        
        <!-- Campo de texto -->
        <label for="nombre">Nombre completo:</label>
        <input type="text" id="nombre" name="nombre" required>
        
        <!-- Email -->
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required>
        
        <!-- Contraseña -->
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required>
        
        <!-- Número -->
        <label for="edad">Edad:</label>
        <input type="number" id="edad" name="edad" min="18" max="100">
        
        <!-- Fecha -->
        <label for="nacimiento">Fecha de nacimiento:</label>
        <input type="date" id="nacimiento" name="nacimiento">
        
        <!-- Radio buttons -->
        <fieldset>
            <legend>Género:</legend>
            <input type="radio" id="masculino" name="genero" value="masculino">
            <label for="masculino">Masculino</label>
            
            <input type="radio" id="femenino" name="genero" value="femenino">
            <label for="femenino">Femenino</label>
            
            <input type="radio" id="otro" name="genero" value="otro">
            <label for="otro">Otro</label>
        </fieldset>
        
        <!-- Checkboxes -->
        <fieldset>
            <legend>Intereses:</legend>
            <input type="checkbox" id="deportes" name="intereses" value="deportes">
            <label for="deportes">Deportes</label>
            
            <input type="checkbox" id="musica" name="intereses" value="musica">
            <label for="musica">Música</label>
            
            <input type="checkbox" id="lectura" name="intereses" value="lectura">
            <label for="lectura">Lectura</label>
        </fieldset>
        
        <!-- Select dropdown -->
        <label for="pais">País:</label>
        <select id="pais" name="pais">
            <option value="">Selecciona un país</option>
            <option value="mx">México</option>
            <option value="es">España</option>
            <option value="ar">Argentina</option>
            <option value="co">Colombia</option>
        </select>
        
        <!-- Textarea -->
        <label for="comentarios">Comentarios:</label>
        <textarea id="comentarios" name="comentarios" rows="4" cols="50"
                  placeholder="Escribe tus comentarios aquí..."></textarea>
        
        <!-- Botones -->
        <button type="submit">Enviar formulario</button>
        <button type="reset">Limpiar campos</button>
    </fieldset>
</form>
```

### 📋 Tipos de Input más Utilizados:

| Tipo | Propósito | Ejemplo |
|------|-----------|---------|
| `text` | Texto general | `<input type="text">` |
| `email` | Direcciones de email | `<input type="email">` |
| `password` | Contraseñas | `<input type="password">` |
| `number` | Números | `<input type="number">` |
| `date` | Fechas | `<input type="date">` |
| `tel` | Números telefónicos | `<input type="tel">` |
| `url` | URLs | `<input type="url">` |
| `search` | Campos de búsqueda | `<input type="search">` |
| `file` | Subir archivos | `<input type="file">` |
| `hidden` | Datos ocultos | `<input type="hidden">` |

---

## 🎵 Multimedia {#multimedia}

### 🖼️ Imágenes:

```html
<!-- Imagen básica -->
<img src="ruta/imagen.jpg" alt="Descripción de la imagen">

<!-- Imagen con dimensiones -->
<img src="logo.png" alt="Logo de la empresa" width="200" height="100">

<!-- Imagen con figure -->
<figure>
    <img src="grafico.png" alt="Gráfico de ventas 2025">
    <figcaption>Figura 1: Crecimiento de ventas durante 2025</figcaption>
</figure>

<!-- Imagen responsive -->
<img src="imagen-grande.jpg" 
     srcset="imagen-pequena.jpg 480w, imagen-mediana.jpg 768w, imagen-grande.jpg 1200w"
     sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
     alt="Imagen responsive">
```

### 🎵 Audio:

```html
<!-- Audio básico -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Tu navegador no soporta audio HTML5.
</audio>

<!-- Audio con configuraciones -->
<audio controls autoplay loop muted>
    <source src="musica.mp3" type="audio/mpeg">
    Mensaje para navegadores sin soporte.
</audio>
```

### 🎥 Video:

```html
<!-- Video básico -->
<video controls width="640" height="480">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <track src="subtitulos-es.vtt" kind="subtitles" srclang="es" label="Español">
    Tu navegador no soporta video HTML5.
</video>

<!-- Video con poster -->
<video controls poster="miniatura.jpg">
    <source src="presentacion.mp4" type="video/mp4">
</video>
```

---

## 🏷️ Atributos Importantes {#atributos-importantes}

### 🌐 Atributos Globales:

```html
<!-- ID único -->
<div id="contenedor-principal">Contenido único</div>

<!-- Clases CSS -->
<p class="destacado importante">Texto con clases múltiples</p>

<!-- Título (tooltip) -->
<span title="Información adicional">Pasa el mouse aquí</span>

<!-- Datos personalizados -->
<article data-id="123" data-categoria="tecnologia">
    Contenido del artículo
</article>

<!-- Idioma -->
<span lang="en">Hello World</span>

<!-- Dirección del texto -->
<p dir="rtl">نص باللغة العربية</p>

<!-- Contenido editable -->
<div contenteditable="true">Este texto se puede editar</div>

<!-- Ocultar elemento -->
<p hidden>Este párrafo está oculto</p>
```

### ♿ Atributos de Accesibilidad:

```html
<!-- Etiquetas para formularios -->
<label for="usuario">Nombre de usuario:</label>
<input type="text" id="usuario" name="usuario">

<!-- Descripción alternativa -->
<img src="grafico.png" alt="Gráfico que muestra el crecimiento del 25%">

<!-- Roles ARIA -->
<div role="button" tabindex="0">Botón personalizado</div>

<!-- Propiedades ARIA -->
<input type="text" aria-label="Buscar productos" aria-required="true">
<div aria-live="polite">Mensajes dinámicos</div>

<!-- Describir elementos -->
<input type="password" aria-describedby="ayuda-password">
<div id="ayuda-password">La contraseña debe tener al menos 8 caracteres</div>
```

---

## ✅ Buenas Prácticas {#buenas-prácticas}

### 1. 📝 **Semántica Correcta:**
```html
<!-- ❌ Incorrecto -->
<div class="titulo">Mi Blog</div>
<div class="parrafo">Contenido del blog...</div>

<!-- ✅ Correcto -->
<h1>Mi Blog</h1>
<p>Contenido del blog...</p>
```

### 2. 🏷️ **Atributos Alt en Imágenes:**
```html
<!-- ❌ Incorrecto -->
<img src="foto.jpg">

<!-- ✅ Correcto -->
<img src="foto.jpg" alt="Estudiante trabajando en laptop">
```

### 3. 📋 **Formularios Accesibles:**
```html
<!-- ❌ Incorrecto -->
<input type="text" placeholder="Nombre">

<!-- ✅ Correcto -->
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre" placeholder="Ej: Juan Pérez">
```

### 4. 🔤 **Jerarquía de Encabezados:**
```html
<!-- ❌ Incorrecto -->
<h1>Título Principal</h1>
<h3>Subtítulo</h3> <!-- Se saltó h2 -->

<!-- ✅ Correcto -->
<h1>Título Principal</h1>
<h2>Sección Principal</h2>
<h3>Subsección</h3>
```

### 5. 🌐 **Idioma y Caracteres:**
```html
<!-- ✅ Siempre incluir -->
<html lang="es">
<meta charset="UTF-8">
```

### 6. 📱 **Viewport para Responsive:**
```html
<!-- ✅ Esencial para móviles -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 🏋️ Ejercicios Prácticos {#ejercicios-prácticos}

### 📝 **Ejercicio 1: Página Personal Básica**
Crea una página HTML que incluya:
- Encabezado con tu nombre
- Párrafo de presentación
- Lista de hobbies
- Tabla con tu horario
- Formulario de contacto básico

### 📝 **Ejercicio 2: Blog Post**
Crea un artículo de blog que tenga:
- Título del artículo
- Fecha de publicación
- Contenido con párrafos, listas y citas
- Sección de comentarios con formulario
- Barra lateral con artículos relacionados

### 📝 **Ejercicio 3: Página de Producto**
Diseña una página de producto con:
- Galería de imágenes
- Descripción detallada
- Especificaciones técnicas (tabla)
- Formulario de compra
- Reseñas de usuarios

### 📝 **Ejercicio 4: Sitio Web Completo**
Crea un sitio de 3 páginas:
- Página de inicio (index.html)
- Página "Acerca de" (about.html)
- Página de contacto (contact.html)
- Navegación entre páginas

---

## 🎯 Lista de Verificación - HTML Semántico

### ✅ Estructura Básica:
- [ ] Declaración `<!DOCTYPE html>`
- [ ] Elemento `<html>` con atributo `lang`
- [ ] Sección `<head>` completa
- [ ] Meta charset UTF-8
- [ ] Meta viewport para responsive
- [ ] Título descriptivo

### ✅ Contenido Semántico:
- [ ] Un solo `<h1>` por página
- [ ] Jerarquía correcta de encabezados
- [ ] Uso de `<main>` para contenido principal
- [ ] `<nav>` para navegación
- [ ] `<article>` para contenido independiente
- [ ] `<section>` para secciones temáticas

### ✅ Accesibilidad:
- [ ] Atributos `alt` en todas las imágenes
- [ ] Labels asociados con inputs
- [ ] Contraste adecuado de colores
- [ ] Navegación por teclado funcional
- [ ] Uso correcto de roles ARIA

### ✅ Formularios:
- [ ] Labels correctamente asociados
- [ ] Tipos de input apropiados
- [ ] Atributos `required` donde corresponde
- [ ] Mensajes de error claros
- [ ] Agrupación con `<fieldset>`

---

## 📚 Recursos Adicionales {#recursos-adicionales}

### 🌐 **Documentación Oficial:**
- [MDN Web Docs - HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [HTML5 Specification](https://html.spec.whatwg.org/)
- [W3C HTML Validator](https://validator.w3.org/)

### 🎓 **Tutoriales y Guías:**
- [HTML5 Tutorial - W3Schools](https://www.w3schools.com/html/)
- [Learn HTML - Codecademy](https://www.codecademy.com/learn/learn-html)
- [HTML Semántico - CSS-Tricks](https://css-tricks.com/semantic-html/)

### 🛠️ **Herramientas Útiles:**
- [Can I Use](https://caniuse.com/) - Compatibilidad de navegadores
- [HTML5 Outliner](https://gsnedders.html5.org/outliner/) - Estructura del documento
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)

### 📱 **Extensiones de VS Code Recomendadas:**
- HTML CSS Support
- Auto Rename Tag
- HTML Boilerplate
- Live Server
- Prettier - Code formatter

---

## 🎯 Próximos Pasos

Una vez que domines HTML semántico:

1. **CSS3** - Dale estilo a tu contenido
2. **CSS Responsive** - Diseño para todos los dispositivos  
3. **JavaScript** - Añade interactividad
4. **Frameworks** - Bootstrap, Vue.js, etc.

---

**💡 Consejo Final:** La práctica hace al maestro. Crea proyectos pequeños constantemente y experimenta con diferentes elementos HTML. Recuerda que la semántica es tan importante como la funcionalidad.

**📅 Última actualización:** 18 de Octubre, 2025  
**🎓 Curso:** Front-End Trainee v2.0