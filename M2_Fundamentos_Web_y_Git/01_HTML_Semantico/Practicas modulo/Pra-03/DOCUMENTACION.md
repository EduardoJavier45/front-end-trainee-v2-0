# 📘 Práctica 03 - CSS Moderno: Guía Completa

## 📋 Información del Proyecto

- **Carpeta:** Practicas modulo/Pra-03
- **Archivos:** index.html, styles.css, DOCUMENTACION.md
- **Curso:** Front-End Trainee V2.0
- **Módulo:** M2 - Fundamentos Web y Git
- **Tema:** Propiedades CSS Modernas
- **Fecha:** 31 de octubre de 2025

---

## 🎯 Objetivo del Proyecto

Este proyecto es una **guía práctica e interactiva** de las propiedades CSS más importantes del desarrollo web moderno. Está diseñado como material de aprendizaje para estudiantes, con cada propiedad CSS exhaustivamente comentada y demostrada visualmente.

### Características Principales:

✅ **Código totalmente documentado** - Cada línea explicada  
✅ **Ejemplos visuales interactivos** - Ver el CSS en acción  
✅ **Diseño responsive** - Adaptable a todos los dispositivos  
✅ **Estructura pedagógica** - Organizado por conceptos  
✅ **Comentarios educativos** - Para facilitar el aprendizaje

---

## 📁 Estructura del Proyecto

```
Pra-03/
├── index.html              # Página HTML con demostraciones visuales
├── styles.css              # Hoja de estilos completamente comentada (1000+ líneas)
└── DOCUMENTACION.md        # Este archivo
```

---

## 🎨 Propiedades CSS Cubiertas

### 1. Variables CSS (Custom Properties) 🎨

**¿Qué son?**  
Las variables CSS permiten almacenar valores que se pueden reutilizar en todo el documento.

**Sintaxis:**

```css
:root {
  --color-primary: #6366f1;
  --spacing-md: 1.5rem;
}

.elemento {
  color: var(--color-primary);
  padding: var(--spacing-md);
}
```

**Ventajas:**

- ✅ Mantenimiento más fácil (cambiar un valor afecta todo)
- ✅ Código más limpio y legible
- ✅ Temas dinámicos con JavaScript
- ✅ Cascada de CSS respetada

**Variables Definidas en el Proyecto:**

- **Colores:** `--color-primary`, `--color-secondary`, `--color-accent`
- **Espaciado:** `--spacing-xs` hasta `--spacing-2xl`
- **Tipografía:** `--font-size-sm` hasta `--font-size-4xl`
- **Sombras:** `--shadow-sm` hasta `--shadow-xl`
- **Border radius:** `--radius-sm` hasta `--radius-full`
- **Transiciones:** `--transition-fast`, `--transition-normal`, `--transition-slow`

**Ejemplo Visual:**  
En la página verás tres cajas de colores que demuestran el uso de `var(--color-primary)`, `var(--color-secondary)` y `var(--color-accent)`.

---

### 2. Flexbox - Layout Flexible 📦

**¿Qué es?**  
Flexbox es un modelo de diseño **unidimensional** (fila O columna) que facilita la alineación y distribución de elementos.

**Propiedades del Contenedor (padre):**

| Propiedad         | Descripción                           | Valores                                                                             |
| ----------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| `display: flex`   | Activa flexbox                        | -                                                                                   |
| `flex-direction`  | Dirección de los items                | `row`, `column`, `row-reverse`, `column-reverse`                                    |
| `justify-content` | Alineación horizontal (eje principal) | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` |
| `align-items`     | Alineación vertical (eje secundario)  | `flex-start`, `center`, `flex-end`, `stretch`, `baseline`                           |
| `flex-wrap`       | Permite salto de línea                | `nowrap`, `wrap`, `wrap-reverse`                                                    |
| `gap`             | Espaciado entre items                 | Cualquier unidad (px, rem, etc.)                                                    |

**Propiedades de los Items (hijos):**

| Propiedad     | Descripción            |
| ------------- | ---------------------- |
| `flex-grow`   | Capacidad de crecer    |
| `flex-shrink` | Capacidad de encogerse |
| `flex-basis`  | Tamaño base            |
| `align-self`  | Alineación individual  |
| `order`       | Orden visual           |

**Ejemplo de Código:**

```css
.contenedor {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.item {
  flex: 1; /* Crecen equitativamente */
}
```

**Demostraciones en la Página:**

- ✅ `justify-content: flex-start` - Items al inicio
- ✅ `justify-content: center` - Items centrados
- ✅ `justify-content: space-between` - Espacio entre items
- ✅ `align-items` con diferentes alineaciones verticales

**Cuándo usar Flexbox:**

- ✅ Menús de navegación horizontales
- ✅ Centrar elementos vertical y horizontalmente
- ✅ Distribución de cards en una fila
- ✅ Layouts de componentes individuales

---

### 3. CSS Grid - Layout Bidimensional 🎯

**¿Qué es?**  
CSS Grid es un sistema de diseño **bidimensional** (filas Y columnas) que permite crear layouts complejos.

**Propiedades del Contenedor:**

| Propiedad               | Descripción            | Ejemplo           |
| ----------------------- | ---------------------- | ----------------- |
| `display: grid`         | Activa CSS Grid        | -                 |
| `grid-template-columns` | Define columnas        | `1fr 2fr 1fr`     |
| `grid-template-rows`    | Define filas           | `auto 200px auto` |
| `gap`                   | Espaciado entre celdas | `1rem`            |
| `grid-template-areas`   | Layout con nombres     | `"header header"` |

**Unidades Especiales:**

- **`fr` (fracción):** Representa una fracción del espacio disponible
- **`repeat()`:** Repite un patrón: `repeat(3, 1fr)` = `1fr 1fr 1fr`
- **`minmax()`:** Rango de tamaño: `minmax(200px, 1fr)`
- **`auto-fit` / `auto-fill`:** Columnas automáticas según espacio

**Ejemplo Básico:**

```css
.grid-basico {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

**Ejemplo con Áreas:**

```css
.grid-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
}

.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}
```

**Grid Responsive Automático:**

```css
.grid-responsive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
/* ¡Se adapta automáticamente sin media queries! */
```

**Demostraciones en la Página:**

- ✅ Grid básico de 3 columnas
- ✅ Grid con áreas nombradas (header, sidebar, main, footer)
- ✅ Grid responsive automático

**Cuándo usar Grid:**

- ✅ Layouts completos de página
- ✅ Galerías de imágenes
- ✅ Dashboards con múltiples secciones
- ✅ Grids de productos/tarjetas

**Flexbox vs Grid:**

- **Flexbox:** Unidimensional (fila O columna)
- **Grid:** Bidimensional (filas Y columnas)
- **Combinarlos:** ¡Usar ambos en el mismo proyecto!

---

### 4. Transiciones CSS 🎭

**¿Qué son?**  
Las transiciones permiten animar cambios de propiedades CSS de forma suave.

**Sintaxis Completa:**

```css
transition: property duration timing-function delay;
```

**Propiedades:**

| Propiedad                    | Descripción              | Ejemplo                                |
| ---------------------------- | ------------------------ | -------------------------------------- |
| `transition-property`        | Qué animar               | `background-color`, `transform`, `all` |
| `transition-duration`        | Cuánto dura              | `0.3s`, `300ms`                        |
| `transition-timing-function` | Curva de aceleración     | `ease`, `linear`, `ease-in-out`        |
| `transition-delay`           | Retraso antes de iniciar | `0.1s`                                 |

**Timing Functions (Curvas):**

- **`ease`:** Inicio lento, medio rápido, fin lento (predeterminado)
- **`linear`:** Velocidad constante
- **`ease-in`:** Inicio lento, acelera
- **`ease-out`:** Inicio rápido, desacelera
- **`ease-in-out`:** Similar a ease
- **`cubic-bezier()`:** Curva personalizada

**Ejemplos de Código:**

```css
/* Transición simple de color */
.boton {
  background-color: blue;
  transition: background-color 0.3s ease;
}
.boton:hover {
  background-color: red;
}

/* Transición de transformación */
.card {
  transition: transform 0.3s ease;
}
.card:hover {
  transform: scale(1.1);
}

/* Múltiples propiedades */
.elemento {
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

/* Todas las propiedades (menos recomendado) */
.elemento {
  transition: all 0.3s ease;
}
```

**Propiedades Animables:**

- ✅ Colores: `color`, `background-color`, `border-color`
- ✅ Dimensiones: `width`, `height`, `padding`, `margin`
- ✅ Transformaciones: `transform` (scale, rotate, translate)
- ✅ Opacidad: `opacity`
- ✅ Sombras: `box-shadow`, `text-shadow`
- ❌ NO animables: `display`, `font-family`, `position`

**Demostraciones en la Página:**

- ✅ Transición de color de fondo (hover)
- ✅ Transición de transformación (scale)
- ✅ Transición múltiple (color + transform + shadow)

**Mejores Prácticas:**

- ✅ Usar duraciones cortas (200-400ms)
- ✅ Especificar propiedades concretas en lugar de `all`
- ✅ Usar `transform` y `opacity` (mejor rendimiento)
- ❌ Evitar animar `width`, `height` (peor rendimiento)

---

### 5. Animaciones CSS (@keyframes) 🎬

**¿Qué son?**  
Las animaciones permiten crear movimientos complejos con múltiples estados.

**Diferencia con Transiciones:**

- **Transiciones:** Solo A → B (inicio y fin)
- **Animaciones:** A → B → C → D → ... (múltiples estados)

**Sintaxis:**

```css
/* 1. Definir la animación */
@keyframes nombre-animacion {
  0% {
    /* Estado inicial */
  }
  50% {
    /* Estado medio */
  }
  100% {
    /* Estado final */
  }
}

/* También se puede usar from/to */
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 2. Aplicar la animación */
.elemento {
  animation: nombre-animacion 2s ease-in-out infinite;
}
```

**Propiedades de Animación:**

| Propiedad                   | Descripción             | Valores                                 |
| --------------------------- | ----------------------- | --------------------------------------- |
| `animation-name`            | Nombre del @keyframes   | Cualquier nombre                        |
| `animation-duration`        | Duración                | `2s`, `500ms`                           |
| `animation-timing-function` | Curva de velocidad      | `ease`, `linear`, etc.                  |
| `animation-delay`           | Retraso inicial         | `0.5s`                                  |
| `animation-iteration-count` | Repeticiones            | `1`, `3`, `infinite`                    |
| `animation-direction`       | Dirección               | `normal`, `reverse`, `alternate`        |
| `animation-fill-mode`       | Estado antes/después    | `none`, `forwards`, `backwards`, `both` |
| `animation-play-state`      | Control de reproducción | `running`, `paused`                     |

**Ejemplos Prácticos:**

**1. Animación de Rebote (Bounce):**

```css
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.elemento {
  animation: bounce 1s ease-in-out infinite;
}
```

**2. Animación de Rotación:**

```css
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.icono {
  animation: rotate 3s linear infinite;
}
```

**3. Animación de Pulso:**

```css
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

.boton {
  animation: pulse 2s ease-in-out infinite;
}
```

**4. Animación de Deslizamiento:**

```css
@keyframes slide {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}

.elemento {
  animation: slide 1.5s ease-in-out infinite;
}
```

**Demostraciones en la Página:**

- ✅ Bounce - Rebote vertical
- ✅ Rotate - Rotación continua
- ✅ Pulse - Efecto de latido
- ✅ Slide - Deslizamiento horizontal

**Animation Direction:**

- **`normal`:** 0% → 100%
- **`reverse`:** 100% → 0%
- **`alternate`:** 0% → 100% → 0% → 100% ...
- **`alternate-reverse`:** 100% → 0% → 100% → 0% ...

**Fill Mode:**

- **`none`:** No aplica estilos antes/después
- **`forwards`:** Mantiene último estado (100%)
- **`backwards`:** Aplica primer estado (0%) durante delay
- **`both`:** Combina forwards y backwards

---

### 6. Diseño Responsive - Media Queries 📱

**¿Qué son?**  
Las Media Queries permiten aplicar estilos diferentes según características del dispositivo.

**Sintaxis Básica:**

```css
@media (condición) {
  /* Estilos que solo se aplican cuando se cumple la condición */
}
```

**Breakpoints Comunes:**

| Dispositivo   | Rango          | Media Query                                         |
| ------------- | -------------- | --------------------------------------------------- |
| **Mobile**    | < 768px        | `@media (max-width: 767px)`                         |
| **Tablet**    | 768px - 1023px | `@media (min-width: 768px) and (max-width: 1023px)` |
| **Desktop**   | ≥ 1024px       | `@media (min-width: 1024px)`                        |
| **Desktop L** | ≥ 1440px       | `@media (min-width: 1440px)`                        |

**Características que se pueden consultar:**

- `width`, `min-width`, `max-width`
- `height`, `min-height`, `max-height`
- `orientation`: `portrait` o `landscape`
- `aspect-ratio`
- `resolution`
- `prefers-color-scheme`: `light` o `dark`
- `prefers-reduced-motion`

**Estrategias de Diseño:**

**1. Mobile First (Recomendado):**

```css
/* Estilos base para móvil */
.contenedor {
  flex-direction: column;
}

/* Tablet y superior */
@media (min-width: 768px) {
  .contenedor {
    flex-direction: row;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .contenedor {
    max-width: 1200px;
  }
}
```

**2. Desktop First:**

```css
/* Estilos base para desktop */
.contenedor {
  flex-direction: row;
  max-width: 1200px;
}

/* Tablet */
@media (max-width: 1023px) {
  .contenedor {
    max-width: 768px;
  }
}

/* Móvil */
@media (max-width: 767px) {
  .contenedor {
    flex-direction: column;
  }
}
```

**Ejemplos Prácticos:**

**Cambiar número de columnas:**

```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Desktop: 4 columnas */
  gap: 1rem;
}

@media (max-width: 1023px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columnas */
  }
}

@media (max-width: 767px) {
  .grid {
    grid-template-columns: 1fr; /* Móvil: 1 columna */
  }
}
```

**Cambiar tamaños de fuente:**

```css
h1 {
  font-size: 3rem; /* Desktop */
}

@media (max-width: 1023px) {
  h1 {
    font-size: 2.5rem; /* Tablet */
  }
}

@media (max-width: 767px) {
  h1 {
    font-size: 2rem; /* Móvil */
  }
}
```

**Ocultar/Mostrar elementos:**

```css
.sidebar {
  display: block; /* Visible en desktop */
}

@media (max-width: 767px) {
  .sidebar {
    display: none; /* Oculto en móvil */
  }
}
```

**Grid Responsive Automático (Sin Media Queries):**

```css
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
/* Se adapta automáticamente según el espacio disponible */
```

**Demostraciones en la Página:**

- ✅ Indicadores visuales de breakpoint actual
- ✅ Grid que cambia de 4 → 2 → 1 columna
- ✅ Navegación que se reorganiza en móvil
- ✅ Tamaños de fuente adaptativos

**Modo Oscuro (Bonus):**

```css
/* Detecta preferencia del sistema */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #1a1a1a;
    color: #ffffff;
  }
}
```

**Accesibilidad - Reducir Movimiento:**

```css
/* Respeta preferencia del usuario */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### 7. Transform - Transformaciones 2D 🔄

**¿Qué es?**  
`transform` permite mover, rotar, escalar y sesgar elementos sin afectar el flujo del documento.

**Funciones de Transform:**

| Función           | Descripción             | Ejemplo                      |
| ----------------- | ----------------------- | ---------------------------- |
| `translate(x, y)` | Mover                   | `translate(50px, 100px)`     |
| `translateX(x)`   | Mover horizontalmente   | `translateX(50px)`           |
| `translateY(y)`   | Mover verticalmente     | `translateY(-20px)`          |
| `scale(x, y)`     | Escalar                 | `scale(1.5)` o `scale(2, 1)` |
| `scaleX(x)`       | Escalar horizontalmente | `scaleX(0.5)`                |
| `scaleY(y)`       | Escalar verticalmente   | `scaleY(2)`                  |
| `rotate(deg)`     | Rotar                   | `rotate(45deg)`              |
| `skew(x, y)`      | Sesgar                  | `skew(10deg, 5deg)`          |
| `skewX(x)`        | Sesgar horizontalmente  | `skewX(20deg)`               |
| `skewY(y)`        | Sesgar verticalmente    | `skewY(10deg)`               |

**Múltiples Transformaciones:**

```css
.elemento {
  /* Se aplican de derecha a izquierda */
  transform: translate(50px, 100px) rotate(45deg) scale(1.5);
}
```

**Transform Origin:**

```css
.elemento {
  /* Punto de origen de la transformación */
  transform-origin: center center; /* Por defecto */
  transform-origin: top left;
  transform-origin: 50% 50%;
}
```

**Ejemplos Prácticos:**

```css
/* Centrar elemento absolutamente posicionado */
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Efecto hover de crecimiento */
.card:hover {
  transform: scale(1.05);
}

/* Efecto hover de levitación */
.boton:hover {
  transform: translateY(-5px);
}

/* Rotación con hover */
.icono:hover {
  transform: rotate(90deg);
}

/* Combinación */
.elemento:hover {
  transform: translateY(-10px) scale(1.1) rotate(-2deg);
}
```

**Ventajas de Transform:**

- ✅ **Alto rendimiento** (usa GPU)
- ✅ No afecta el flujo del documento
- ✅ Perfecto para animaciones suaves
- ✅ Combina múltiples transformaciones

---

### 8. Propiedades Bonus 🎁

#### 8.1. Box Shadow - Sombras

**Sintaxis:**

```css
box-shadow: offset-x offset-y blur-radius spread-radius color;
```

**Parámetros:**

- **offset-x:** Desplazamiento horizontal
- **offset-y:** Desplazamiento vertical
- **blur-radius:** Difuminado (opcional)
- **spread-radius:** Expansión (opcional)
- **color:** Color con transparencia

**Ejemplos:**

```css
/* Sombra básica */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

/* Sombra grande */
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

/* Múltiples sombras */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

/* Sombra interior */
box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

/* Sombra de color */
box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
```

---

#### 8.2. Border Radius - Bordes Redondeados

**Sintaxis:**

```css
border-radius: valor;
```

**Variantes:**

```css
/* Un valor: todas las esquinas */
border-radius: 10px;

/* Dos valores: sup-izq/inf-der, sup-der/inf-izq */
border-radius: 10px 20px;

/* Cuatro valores: sup-izq, sup-der, inf-der, inf-izq */
border-radius: 10px 20px 30px 40px;

/* Círculo perfecto */
border-radius: 50%;

/* Esquinas elípticas */
border-radius: 50px / 25px;

/* Individual por esquina */
border-top-left-radius: 10px;
border-top-right-radius: 20px;
border-bottom-right-radius: 30px;
border-bottom-left-radius: 40px;
```

---

#### 8.3. Backdrop Filter - Efectos de Fondo

**¿Qué es?**  
Aplica efectos visuales al contenido DETRÁS del elemento (glassmorphism).

**Funciones:**

```css
/* Desenfoque (más común) */
backdrop-filter: blur(10px);

/* Brillo */
backdrop-filter: brightness(1.5);

/* Contraste */
backdrop-filter: contrast(1.2);

/* Escala de grises */
backdrop-filter: grayscale(50%);

/* Inversión */
backdrop-filter: invert(1);

/* Saturación */
backdrop-filter: saturate(2);

/* Múltiples filtros */
backdrop-filter: blur(10px) brightness(1.1);
```

**Ejemplo - Glassmorphism:**

```css
.glass {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

#### 8.4. Clip Path - Formas Personalizadas

**¿Qué es?**  
Recorta elementos en formas personalizadas.

**Formas:**

```css
/* Polígono */
clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);

/* Círculo */
clip-path: circle(50%);
clip-path: circle(100px at center);

/* Elipse */
clip-path: ellipse(50% 40% at center);

/* Rectángulo con bordes */
clip-path: inset(10px 20px 30px 40px round 15px);
```

**Generadores Online:**

- [Clippy](https://bennettfeely.com/clippy/)
- [CSS Clip Path Maker](https://www.cssportal.com/css-clip-path-generator/)

---

#### 8.5. Object Fit - Control de Medios

**¿Para qué sirve?**  
Controla cómo se ajustan imágenes y videos en sus contenedores.

**Valores:**

```css
img {
  width: 100%;
  height: 300px;
  object-fit: cover; /* Llena el contenedor, puede recortar */
}
```

| Valor        | Comportamiento                                    |
| ------------ | ------------------------------------------------- |
| `fill`       | Estira para llenar (deforma)                      |
| `contain`    | Escala para caber completo (puede sobrar espacio) |
| `cover`      | Llena el contenedor (puede recortar)              |
| `none`       | Tamaño original                                   |
| `scale-down` | El más pequeño entre none y contain               |

**Object Position:**

```css
img {
  object-fit: cover;
  object-position: center top; /* Posición del recorte */
}
```

---

#### 8.6. CSS Filters - Filtros Visuales

**Funciones:**

```css
/* Desenfoque */
filter: blur(5px);

/* Brillo */
filter: brightness(1.5);

/* Contraste */
filter: contrast(1.2);

/* Escala de grises */
filter: grayscale(100%);

/* Inversión */
filter: invert(1);

/* Opacidad (mejor usar opacity) */
filter: opacity(0.5);

/* Saturación */
filter: saturate(2);

/* Sepia */
filter: sepia(50%);

/* Rotación de matiz */
filter: hue-rotate(90deg);

/* Sombra paralela */
filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));

/* Múltiples filtros */
filter: grayscale(50%) brightness(1.1) contrast(1.2);
```

---

#### 8.7. Linear Gradient - Degradados

**Sintaxis:**

```css
background: linear-gradient(direction, color1, color2, ...);
```

**Ejemplos:**

```css
/* Vertical (de arriba hacia abajo) */
background: linear-gradient(to bottom, blue, red);

/* Horizontal */
background: linear-gradient(to right, blue, red);

/* Diagonal */
background: linear-gradient(to bottom right, blue, red);

/* Con ángulo */
background: linear-gradient(135deg, blue, red);

/* Múltiples colores */
background: linear-gradient(to right, red, yellow, green);

/* Con stops (posiciones) */
background: linear-gradient(to right, red 0%, yellow 50%, green 100%);

/* Gradiente con transparencia */
background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
```

**Radial Gradient:**

```css
background: radial-gradient(circle, blue, red);
background: radial-gradient(ellipse at center, blue, red);
```

---

#### 8.8. Position Sticky - Posicionamiento

**¿Qué es?**  
Combina `relative` y `fixed`: se comporta como relativo hasta alcanzar un punto, luego se fija.

**Ejemplo:**

```css
.navbar {
  position: sticky;
  top: 0; /* Se fija al llegar a la parte superior */
  z-index: 100;
}
```

**Posicionamientos CSS:**

| Valor      | Comportamiento                                   |
| ---------- | ------------------------------------------------ |
| `static`   | Por defecto, flujo normal                        |
| `relative` | Relativo a su posición original                  |
| `absolute` | Relativo al ancestro posicionado más cercano     |
| `fixed`    | Relativo al viewport, fijo al scroll             |
| `sticky`   | Relativo hasta alcanzar el threshold, luego fijo |

---

## 📱 Diseño Responsive en el Proyecto

### Breakpoints Implementados:

```css
/* Mobile: < 768px */
@media (max-width: 767px) {
  /* 1 columna en grids */
  /* Navegación vertical */
  /* Tamaños de fuente reducidos */
}

/* Tablet: 768px - 1023px */
@media (max-width: 1023px) {
  /* 2 columnas en grids */
  /* Layout reorganizado */
}

/* Desktop: ≥ 1024px */
@media (min-width: 1024px) {
  /* Layout completo */
}

/* Desktop Grande: ≥ 1200px */
@media (min-width: 1200px) {
  /* Más columnas en grids */
}
```

### Técnicas Responsive Usadas:

1. **Grid Responsive Automático:**

   ```css
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   ```

2. **Flexbox con Wrap:**

   ```css
   display: flex;
   flex-wrap: wrap;
   ```

3. **Unidades Relativas:**

   - `rem` para tamaños de fuente
   - `%` para anchos
   - `vh/vw` para alturas completas

4. **Max-width en Contenedores:**
   ```css
   max-width: 1200px;
   margin: 0 auto;
   ```

---

## 🎓 Guía de Aprendizaje

### Para Principiantes:

1. **Comienza con las Variables CSS**

   - Comprende cómo reutilizar valores
   - Experimenta cambiando colores en :root

2. **Aprende Flexbox**

   - Practica con justify-content y align-items
   - Crea un menú de navegación horizontal

3. **Experimenta con Transiciones**

   - Agrega efectos hover a botones
   - Anima colores y transformaciones

4. **Prueba Media Queries**
   - Redimensiona la ventana del navegador
   - Observa cómo cambia el layout

### Para Intermedios:

5. **Domina CSS Grid**

   - Crea layouts complejos con grid-template-areas
   - Experimenta con repeat() y minmax()

6. **Crea Animaciones**

   - Define tus propios @keyframes
   - Combina múltiples animaciones

7. **Explora Propiedades Avanzadas**
   - Backdrop-filter para glassmorphism
   - Clip-path para formas únicas

### Para Avanzados:

8. **Optimiza Rendimiento**

   - Usa transform y opacity para animaciones
   - Evita animar width y height

9. **Combina Técnicas**

   - Grid + Flexbox en el mismo layout
   - Animaciones + Transiciones

10. **Accesibilidad**
    - Implementa prefers-reduced-motion
    - Asegura contraste de colores

---

## 💡 Mejores Prácticas

### Organización del Código:

✅ **Agrupa propiedades relacionadas**

```css
.elemento {
  /* Posicionamiento */
  position: relative;
  top: 0;
  left: 0;

  /* Box model */
  display: flex;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;

  /* Visuales */
  background-color: white;
  border: 1px solid gray;
  border-radius: 8px;

  /* Tipografía */
  font-size: 1rem;
  color: black;

  /* Efectos */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
```

### Nomenclatura:

✅ **Usa nombres descriptivos**

```css
/* ✅ Bien */
.main-navigation {
}
.card-container {
}
.primary-button {
}

/* ❌ Evitar */
.nav1 {
}
.box {
}
.btn {
}
```

### Variables CSS:

✅ **Sistema consistente**

```css
:root {
  /* Nomenclatura clara */
  --color-primary-500: #6366f1;
  --spacing-md: 1.5rem;
  --font-size-lg: 1.25rem;
}
```

### Performance:

✅ **Anima transform y opacity**

```css
/* ✅ Alto rendimiento */
.elemento {
  transition: transform 0.3s, opacity 0.3s;
}

/* ❌ Bajo rendimiento */
.elemento {
  transition: width 0.3s, height 0.3s;
}
```

### Especificidad:

✅ **Mantén baja especificidad**

```css
/* ✅ Bien */
.card {
}
.card-title {
}

/* ❌ Evitar */
div.container ul.list li.item a.link {
}
```

---

## 🔧 Herramientas Recomendadas

### Editores de Código:

- **Visual Studio Code** (con extensiones CSS)
- **WebStorm**
- **Sublime Text**

### Extensiones VS Code:

- **CSS Peek** - Ve definiciones CSS
- **IntelliSense for CSS** - Autocompletado
- **Live Server** - Preview en vivo
- **Prettier** - Formateador de código

### Herramientas Online:

- **CSS Grid Generator** - https://cssgrid-generator.netlify.app/
- **Flexbox Froggy** - https://flexboxfroggy.com/ (juego)
- **Grid Garden** - https://cssgridgarden.com/ (juego)
- **Clippy (Clip Path)** - https://bennettfeely.com/clippy/
- **Gradient Generator** - https://cssgradient.io/
- **Box Shadow Generator** - https://shadows.brumm.af/

### Documentación:

- **MDN Web Docs** - https://developer.mozilla.org/es/docs/Web/CSS
- **CSS-Tricks** - https://css-tricks.com/
- **Can I Use** - https://caniuse.com/ (compatibilidad)

---

## 🧪 Ejercicios Propuestos

### Ejercicio 1: Card Component

Crea una tarjeta (card) que:

- Use variables CSS para colores
- Tenga sombra y bordes redondeados
- Al hacer hover, crezca y cambie la sombra (transición)
- Sea responsive (cambie de tamaño en móvil)

### Ejercicio 2: Galería de Imágenes

Crea una galería que:

- Use CSS Grid con auto-fit
- Las imágenes usen object-fit: cover
- Al hacer hover, la imagen haga zoom (transform: scale)
- Tenga un overlay con backdrop-filter

### Ejercicio 3: Menú Sticky

Crea un menú de navegación que:

- Use position: sticky
- Tenga backdrop-filter para efecto glassmorphism
- Los enlaces tengan transiciones al hover
- En móvil, cambie a menú vertical

### Ejercicio 4: Botón Animado

Crea un botón que:

- Tenga una animación de pulso continua
- Al hacer hover, pause la animación y crezca
- Use gradiente de fondo
- Tenga sombra de color que cambie con hover

### Ejercicio 5: Layout Completo

Crea un layout de página que:

- Use CSS Grid para estructura general (header, sidebar, main, footer)
- Use Flexbox dentro de cada sección
- Sea completamente responsive
- Use variables CSS para todo el tema de colores

---

## 📚 Recursos Adicionales

### Cursos Online:

- **freeCodeCamp** - Responsive Web Design
- **Scrimba** - Learn CSS Grid/Flexbox
- **Kevin Powell** (YouTube) - CSS avanzado

### Libros:

- "CSS: The Definitive Guide" - Eric Meyer
- "CSS Secrets" - Lea Verou

### Comunidades:

- **Stack Overflow** - Preguntas y respuestas
- **CodePen** - Ejemplos y experimentos
- **Dev.to** - Artículos y tutoriales

### Newsletters:

- **CSS Weekly** - https://css-weekly.com/
- **Frontend Focus** - https://frontendfoc.us/

---

## ✅ Checklist de Aprendizaje

### Básico:

- [ ] Entiendo qué son las variables CSS y cómo usarlas
- [ ] Puedo centrar elementos con Flexbox
- [ ] Sé crear layouts simples con CSS Grid
- [ ] Puedo agregar transiciones a elementos
- [ ] Entiendo cómo funcionan las media queries

### Intermedio:

- [ ] Puedo crear layouts complejos con Grid
- [ ] Sé combinar Flexbox y Grid
- [ ] Puedo crear animaciones con @keyframes
- [ ] Entiendo transform y sus funciones
- [ ] Sé hacer un sitio completamente responsive

### Avanzado:

- [ ] Puedo crear efectos de glassmorphism
- [ ] Uso clip-path para formas personalizadas
- [ ] Optimizo animaciones para rendimiento
- [ ] Implemento temas con variables CSS
- [ ] Considero accesibilidad en mis diseños

---

## 🎯 Conclusión

Este proyecto demuestra las propiedades CSS más importantes del desarrollo web moderno. Cada concepto está explicado detalladamente en el código con comentarios educativos.

### Próximos Pasos:

1. **Explora el código** - Abre los archivos y lee los comentarios
2. **Experimenta** - Cambia valores y observa los resultados
3. **Practica** - Completa los ejercicios propuestos
4. **Construye** - Crea tus propios proyectos aplicando lo aprendido

### Recuerda:

> "La mejor forma de aprender CSS es practicando. No tengas miedo de experimentar y romper cosas. Cada error es una oportunidad de aprendizaje."

---

## 📄 Información del Archivo

**Archivo:** DOCUMENTACION.md  
**Proyecto:** Práctica 03 - CSS Moderno  
**Autor:** Front-End Trainee V2.0  
**Fecha:** 31 de octubre de 2025  
**Versión:** 1.0  
**Licencia:** Educativa

---

## 📞 Soporte

Si tienes preguntas sobre este proyecto:

1. Revisa los comentarios en el código
2. Consulta la documentación de MDN
3. Experimenta con el código en vivo
4. Busca en Stack Overflow

**¡Feliz aprendizaje! 🚀**
