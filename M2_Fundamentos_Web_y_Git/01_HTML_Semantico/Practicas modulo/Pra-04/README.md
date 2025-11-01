# Ejercicio de Fundamentos de CSS

## 📘 Descripción del Ejercicio

Este ejercicio está diseñado para practicar los **conceptos básicos de CSS**. El objetivo es que apliques selectores y propiedades CSS fundamentales para estilizar una página HTML con estructura semántica.

A través de este ejercicio, aprenderás a:

- Utilizar selectores CSS (elementos, clases)
- Aplicar propiedades de texto y color
- Trabajar con el modelo de caja (margin, padding)
- Estilizar diferentes elementos HTML

## 📁 Estructura del Proyecto

```
Pra-04/
├── index.html       # Página HTML con estructura semántica
├── style.css        # Archivo CSS para completar
└── README.md        # Este archivo (instrucciones)
```

## 🎯 Objetivo

Completar el archivo `style.css` siguiendo las tareas indicadas a continuación. El archivo HTML ya está listo, solo necesitas agregar los estilos CSS.

---

## ✅ Tareas a Completar

### **TAREA 1: Estilizar el Body**

Cambia el color de fondo (`background-color`) del `<body>` a un gris claro.

**Propiedades a usar:**

- `background-color`

**Ejemplo:**

```css
body {
  background-color: #f4f4f4;
}
```

**Valores sugeridos de color gris:**

- `#f0f0f0` (gris muy claro)
- `#f4f4f4` (gris claro)
- `#e0e0e0` (gris medio claro)

---

### **TAREA 2: Estilizar el H1**

Centra el `<h1>` y cambia su color (`color`) a azul.

**Propiedades a usar:**

- `text-align`
- `color`

**Ejemplo:**

```css
h1 {
  text-align: center;
  color: #0066cc;
}
```

**Valores sugeridos de azul:**

- `blue` (azul estándar)
- `#0066cc` (azul medio)
- `#1e90ff` (azul cielo)
- `#4169e1` (azul royal)

---

### **TAREA 3: Estilizar el Container**

Aplica un `margin` y `padding` al `div` con la clase `'container'`.

**Propiedades a usar:**

- `margin`
- `padding`

**Ejemplo:**

```css
.container {
  margin: 20px;
  padding: 30px;
}
```

**Valores sugeridos:**

- `margin: 20px;` (margen uniforme)
- `margin: 20px auto;` (centrado horizontal)
- `padding: 20px;` a `padding: 40px;` (espaciado interno)

**Extra (opcional):**
Puedes agregar también:

- `background-color: white;` (fondo blanco)
- `border-radius: 8px;` (bordes redondeados)
- `box-shadow: 0 2px 8px rgba(0,0,0,0.1);` (sombra sutil)

---

### **TAREA 4: Estilizar los Párrafos**

Cambia el tamaño de fuente (`font-size`) de todos los párrafos (`<p>`).

**Propiedades a usar:**

- `font-size`

**Ejemplo:**

```css
p {
  font-size: 18px;
}
```

**Valores sugeridos:**

- `16px` (tamaño estándar)
- `18px` (ligeramente más grande)
- `1.1rem` (relativo al tamaño base)

**Extra (opcional):**
Puedes agregar también:

- `line-height: 1.6;` (altura de línea para mejor legibilidad)
- `color: #333;` (color del texto)
- `margin-bottom: 15px;` (espacio entre párrafos)

---

### **TAREA 5: Estilizar los Enlaces**

Quita el subrayado (`text-decoration`) de los enlaces (`<a>`).

**Propiedades a usar:**

- `text-decoration`

**Ejemplo:**

```css
a {
  text-decoration: none;
}
```

**Extra (opcional):**
Puedes agregar también:

- `color: #0066cc;` (color del enlace)
- `font-weight: bold;` (texto en negrita)

**Efecto hover:**

```css
a:hover {
  text-decoration: underline;
  color: #004499;
}
```

---

## 🌟 Tareas Adicionales (Opcional)

Si completaste las 5 tareas principales, intenta estos desafíos adicionales:

### **TAREA 6: Estilizar la Lista**

Aplica estilos a la lista no ordenada (`<ul>`) y sus elementos (`<li>`).

**Sugerencias:**

```css
ul {
  list-style-type: square; /* O circle, disc */
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
  line-height: 1.5;
}
```

---

### **TAREA 7: Estilizar el Botón**

Crea un estilo atractivo para el `<button>`.

**Sugerencias:**

```css
button {
  background-color: #0066cc;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #004499;
}
```

---

### **TAREA 8: Estilizar el Header**

Aplica estilos al `<header>` para que se destaque.

**Sugerencias:**

```css
header {
  background-color: #333;
  color: white;
  padding: 30px;
  text-align: center;
}

header h1 {
  margin: 0;
  color: white; /* Sobrescribe el color azul de la Tarea 2 */
}

header p {
  margin: 10px 0 0 0;
  font-size: 18px;
}
```

---

### **TAREA 9: Estilizar el Footer**

Aplica estilos al `<footer>`.

**Sugerencias:**

```css
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
}

footer p {
  margin: 5px 0;
  font-size: 14px;
}
```

---

### **TAREA 10: Estilizar la Info-Box**

Aplica estilos al `div` con clase `'info-box'`.

**Sugerencias:**

```css
.info-box {
  background-color: #e8f4f8;
  border-left: 4px solid #0066cc;
  padding: 20px;
  margin: 30px 20px;
  border-radius: 4px;
}

.info-box h3 {
  margin-top: 0;
  color: #0066cc;
}
```

---

## 📚 Conceptos CSS que Practicarás

| Propiedad          | Descripción          | Valores Comunes                            |
| ------------------ | -------------------- | ------------------------------------------ |
| `color`            | Color del texto      | `red`, `#0066cc`, `rgb(0, 102, 204)`       |
| `background-color` | Color de fondo       | `white`, `#f4f4f4`, `rgba(0,0,0,0.1)`      |
| `font-size`        | Tamaño de fuente     | `16px`, `1.2rem`, `18px`                   |
| `text-align`       | Alineación del texto | `left`, `center`, `right`                  |
| `text-decoration`  | Decoración del texto | `none`, `underline`, `line-through`        |
| `margin`           | Margen exterior      | `10px`, `20px auto`, `10px 20px`           |
| `padding`          | Relleno interior     | `15px`, `10px 20px`, `20px 30px 20px 30px` |
| `border`           | Borde del elemento   | `1px solid #ccc`, `2px dashed red`         |
| `border-radius`    | Bordes redondeados   | `5px`, `10px`, `50%`                       |
| `box-shadow`       | Sombra del elemento  | `0 2px 4px rgba(0,0,0,0.1)`                |

---

## 🎨 Selectores CSS que Usarás

### **Selector de Elemento**

Selecciona todos los elementos de un tipo.

```css
p {
  color: black;
} /* Todos los párrafos */
h1 {
  font-size: 32px;
} /* Todos los h1 */
```

### **Selector de Clase**

Selecciona elementos con una clase específica (usa un punto `.`).

```css
.container {
  padding: 20px;
} /* Elementos con class="container" */
.info-box {
  background-color: lightblue;
} /* Elementos con class="info-box" */
```

### **Selector de Pseudo-clase**

Selecciona estados especiales de elementos.

```css
a:hover {
  color: red;
} /* Enlaces al pasar el mouse */
button:hover {
  background-color: darkblue;
} /* Botones al pasar el mouse */
```

---

## 🚀 Cómo Completar el Ejercicio

1. **Abre el archivo `index.html`** en tu navegador para ver la página sin estilos.

2. **Abre el archivo `style.css`** en tu editor de código (VS Code, Sublime, etc.).

3. **Completa las tareas una por una**, siguiendo las instrucciones de este README.

4. **Guarda el archivo CSS** y recarga la página en el navegador para ver los cambios.

5. **Experimenta** con diferentes valores y propiedades.

6. **Valida tu código** asegurándote de que:
   - No hay errores de sintaxis
   - Los estilos se aplican correctamente
   - La página se ve bien visualmente

---

## 💡 Consejos

- **Usa el Inspector de Elementos** del navegador (F12) para ver qué estilos se están aplicando.
- **Experimenta con valores** diferentes hasta encontrar el que más te guste.
- **Escribe comentarios** en tu CSS para explicar qué hace cada sección.
- **Guarda frecuentemente** y recarga el navegador para ver los cambios.
- **No tengas miedo de equivocarte** - CSS es visual, si algo no se ve bien, simplemente cámbialo.

---

## 🔍 Recursos Adicionales

- [MDN Web Docs - CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [W3Schools - CSS Tutorial](https://www.w3schools.com/css/)
- [Google Fonts](https://fonts.google.com/) (para agregar fuentes personalizadas)
- [Coolors.co](https://coolors.co/) (generador de paletas de colores)

---

## ✅ Checklist de Completitud

Marca las tareas que hayas completado:

- [ ] Tarea 1: Color de fondo del body
- [ ] Tarea 2: Centrar y colorear el h1
- [ ] Tarea 3: Margin y padding del container
- [ ] Tarea 4: Tamaño de fuente de los párrafos
- [ ] Tarea 5: Quitar subrayado de los enlaces

**Tareas Opcionales:**

- [ ] Tarea 6: Estilizar la lista
- [ ] Tarea 7: Estilizar el botón
- [ ] Tarea 8: Estilizar el header
- [ ] Tarea 9: Estilizar el footer
- [ ] Tarea 10: Estilizar la info-box

---

## 📝 Notas Finales

Este ejercicio es parte del **Módulo 2: Fundamentos Web y Git** del curso **Front-End Trainee V2.0**.

Recuerda que la práctica es clave para dominar CSS. Una vez que completes este ejercicio, intenta crear tus propias páginas y experimentar con diferentes estilos.

**¡Feliz codificación! 🎨✨**

---

**Fecha:** 31 de octubre de 2025  
**Proyecto:** Pra-04 - Ejercicio de Fundamentos de CSS  
**Módulo:** M2 - Fundamentos Web y Git
