# Ejercicio de CSS - Nivel 2: El Modelo de Caja (Box Model)

## 📘 Descripción del Ejercicio

Este ejercicio está diseñado para que practiques uno de los conceptos **más importantes de CSS**: el **Modelo de Caja (Box Model)**.

## 🎯 Objetivo

Aprender cómo los elementos HTML ocupan espacio en la página, utilizando las propiedades:

- `width` y `height` (dimensiones)
- `padding` (espaciado interno)
- `margin` (espaciado externo)
- `border` (bordes)
- `display` (tipo de visualización)

## 📦 ¿Qué es el Box Model?

Cada elemento HTML es una **"caja"** que consta de 4 capas:

```
┌─────────────────────────────────┐
│         MARGIN (exterior)        │
│  ┌───────────────────────────┐  │
│  │      BORDER (borde)       │  │
│  │  ┌─────────────────────┐  │  │
│  │  │   PADDING (interno) │  │  │
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │   CONTENT     │  │  │  │
│  │  │  │  (contenido)  │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

## 📁 Estructura del Proyecto

```
Pra-05/
├── index.html       # Página HTML con 3 tarjetas
├── style.css        # Archivo CSS para completar
└── README.md        # Este archivo (instrucciones)
```

---

## ✅ Tareas a Completar

### **TAREA 1: Resetear Estilos del Body**

Elimina los márgenes y padding por defecto del navegador.

**Propiedades a usar:**

- `margin`
- `padding`

**Código sugerido:**

```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}
```

**¿Por qué?** Los navegadores aplican estilos por defecto que pueden causar espacios no deseados.

---

### **TAREA 2: Aplicar Padding a las Tarjetas**

Aplica un `padding` de **16px** a todas las tarjetas (`.card`) para que el contenido no toque los bordes.

**Propiedad a usar:**

- `padding`

**Código sugerido:**

```css
.card {
  padding: 16px;
}
```

**¿Qué hace?** Crea espacio INTERNO entre el contenido y el borde de la tarjeta.

**Visualización:**

```
┌────────────────────────┐
│  ← padding: 16px →     │
│  ┌──────────────────┐  │
│  │   CONTENIDO      │  │
│  └──────────────────┘  │
└────────────────────────┘
```

---

### **TAREA 3: Añadir Border a las Tarjetas**

Añade un `border` sólido de **1px** y color gris (`#ccc`) alrededor de cada tarjeta.

**Propiedad a usar:**

- `border`

**Código sugerido:**

```css
.card {
  border: 1px solid #ccc;
}
```

**Sintaxis de border:**

```css
border: [grosor] [estilo] [color];
```

**Estilos disponibles:**

- `solid` - Línea sólida
- `dashed` - Línea discontinua
- `dotted` - Línea de puntos
- `double` - Línea doble

---

### **TAREA 4: Establecer Width Fijo**

Establece un `width` fijo de **300px** para todas las tarjetas (`.card`).

**Propiedad a usar:**

- `width`

**Código sugerido:**

```css
.card {
  width: 300px;
}
```

**¿Por qué?** Sin un ancho definido, los elementos de bloque ocupan todo el ancho disponible.

**Nota importante:** Por defecto, `width` solo afecta al CONTENIDO. El tamaño total incluye padding + border + margin.

---

### **TAREA 5: Mostrar Tarjetas en Línea**

Logra que las tarjetas se muestren **una al lado de la otra** (en lugar de una debajo de la otra) usando `display: inline-block;`.

**Propiedad a usar:**

- `display`

**Código sugerido:**

```css
.card {
  display: inline-block;
}
```

**Valores de display más comunes:**

- `block` - Elemento de bloque (ocupa todo el ancho)
- `inline` - Elemento en línea (no acepta width/height)
- `inline-block` - En línea pero acepta width/height ✅
- `flex` - Contenedor flexible (lo verás en niveles avanzados)
- `none` - Oculta el elemento

**Resultado esperado:**

```
Antes (block):           Después (inline-block):
┌──────────┐             ┌─────┐ ┌─────┐ ┌─────┐
│ Tarjeta 1│             │ T1  │ │ T2  │ │ T3  │
└──────────┘             └─────┘ └─────┘ └─────┘
┌──────────┐
│ Tarjeta 2│
└──────────┘
┌──────────┐
│ Tarjeta 3│
└──────────┘
```

---

### **TAREA 6: Añadir Margin entre Tarjetas**

Añade un `margin` de **10px** a las tarjetas para que se separen entre sí.

**Propiedad a usar:**

- `margin`

**Código sugerido:**

```css
.card {
  margin: 10px;
}
```

**Formas de usar margin:**

```css
/* Un valor: todos los lados */
margin: 10px;

/* Dos valores: vertical | horizontal */
margin: 10px 20px;

/* Cuatro valores: arriba | derecha | abajo | izquierda (sentido horario) */
margin: 10px 20px 30px 40px;

/* Individual */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;
```

---

### **TAREA 7: Centrar el Contenedor de Tarjetas**

Centra el contenedor de tarjetas (`.card-container`) en la página usando `margin: 0 auto;` y un `width` de **90%** o **1000px**.

**Propiedades a usar:**

- `width`
- `margin`
- `text-align` (opcional)

**Código sugerido:**

```css
.card-container {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
```

**¿Cómo funciona `margin: 0 auto;`?**

- `0` - Margin superior e inferior de 0
- `auto` - Margin izquierdo y derecho automático (centra el elemento)

**Requisitos para que funcione:**

1. El elemento debe tener un `width` definido
2. El elemento debe ser de tipo `block` o `inline-block`

---

### **TAREA 8 (BONUS): Añadir Box-Shadow al Hover**

Añade una sombra suave (`box-shadow`) a la tarjeta cuando el usuario pase el mouse sobre ella usando la pseudo-clase `:hover`.

**Propiedades a usar:**

- `box-shadow`
- `:hover`
- `transition` (para efecto suave)

**Código sugerido:**

```css
.card {
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

**Sintaxis de box-shadow:**

```css
box-shadow: offset-x offset-y blur-radius spread-radius color;
```

**Ejemplos:**

```css
/* Sombra básica */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

/* Sombra grande */
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

/* Múltiples sombras */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
```

---

## 🎨 Tareas Adicionales (Opcional)

### **TAREA 9: Estilizar las Imágenes**

Haz que las imágenes se adapten al ancho del contenedor.

**Código sugerido:**

```css
.card img {
  width: 100%;
  height: auto;
  display: block;
}
```

**¿Por qué `display: block;`?** Las imágenes son `inline` por defecto, lo que puede causar espacios no deseados debajo de ellas.

---

### **TAREA 10: Estilizar los Botones**

Crea un botón atractivo con padding, border-radius y efectos hover.

**Código sugerido:**

```css
.card button {
  width: 100%;
  padding: 10px 20px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.card button:hover {
  background-color: #357abd;
}
```

---

### **TAREA 11: Border-Radius en las Tarjetas**

Añade bordes redondeados a las tarjetas para un diseño más moderno.

**Código sugerido:**

```css
.card {
  border-radius: 8px;
  overflow: hidden; /* Para que la imagen también tenga esquinas redondeadas */
}
```

---

### **TAREA 12: Estilizar el Header y Footer**

Completa los estilos del header y footer para un diseño coherente.

**Código sugerido:**

```css
header {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 15px;
  margin-top: 40px;
}
```

---

## 📚 Conceptos Clave del Box Model

### **1. Width y Height**

```css
.elemento {
  width: 300px; /* Ancho del contenido */
  height: 200px; /* Alto del contenido */
}
```

### **2. Padding (Espaciado Interno)**

```css
.elemento {
  padding: 20px; /* Todos los lados */
  padding: 10px 20px; /* Vertical | Horizontal */
  padding: 10px 20px 30px 40px; /* Arriba | Derecha | Abajo | Izquierda */
}
```

### **3. Border (Borde)**

```css
.elemento {
  border: 1px solid #ccc; /* Todos los lados */
  border-top: 2px solid red; /* Solo arriba */
  border-radius: 8px; /* Bordes redondeados */
}
```

### **4. Margin (Espaciado Externo)**

```css
.elemento {
  margin: 20px; /* Todos los lados */
  margin: 0 auto; /* Centrar horizontalmente */
  margin-bottom: 30px; /* Solo abajo */
}
```

### **5. Box-Sizing**

Por defecto, `width` solo afecta al contenido. Usa `box-sizing: border-box;` para incluir padding y border en el ancho total.

```css
* {
  box-sizing: border-box;
}
```

**Diferencia:**

```
content-box (por defecto):
Ancho total = width + padding + border

border-box:
Ancho total = width (incluye padding y border)
```

---

## 🔍 Cálculo del Tamaño Total

Si tienes:

```css
.card {
  width: 300px;
  padding: 16px;
  border: 1px solid #ccc;
  margin: 10px;
}
```

**Ancho total que ocupa:**

- Contenido: 300px
- Padding: 16px × 2 = 32px
- Border: 1px × 2 = 2px
- Margin: 10px × 2 = 20px
- **Total: 354px**

---

## 💡 Consejos

1. **Usa el Inspector de Elementos (F12):**

   - Ve el Box Model gráficamente
   - Experimenta con valores en tiempo real

2. **Margin vs Padding:**

   - `margin`: Espacio FUERA del elemento (separa de otros)
   - `padding`: Espacio DENTRO del elemento (separa contenido del borde)

3. **Display: inline vs block vs inline-block:**

   - `inline`: No acepta width/height (ejemplo: `<span>`)
   - `block`: Ocupa todo el ancho disponible (ejemplo: `<div>`)
   - `inline-block`: En línea pero acepta width/height ✅

4. **Box-Sizing: border-box:**
   - Facilita cálculos
   - Incluye padding y border en el width total
   - Usa `* { box-sizing: border-box; }` al inicio del CSS

---

## 🚀 Cómo Completar el Ejercicio

1. **Abre `index.html`** en tu navegador para ver la página sin estilos.

2. **Abre `style.css`** en tu editor de código.

3. **Completa las tareas en orden**, una por una.

4. **Guarda el archivo** y recarga el navegador para ver los cambios.

5. **Experimenta** con diferentes valores hasta lograr el diseño deseado.

6. **Usa el Inspector** (F12 → pestaña "Elements") para ver el Box Model de cada elemento.

---

## ✅ Checklist de Completitud

**Tareas Obligatorias:**

- [ ] Tarea 1: Resetear estilos del body
- [ ] Tarea 2: Aplicar padding de 16px a las tarjetas
- [ ] Tarea 3: Añadir border de 1px sólido gris
- [ ] Tarea 4: Establecer width de 300px
- [ ] Tarea 5: Usar display: inline-block
- [ ] Tarea 6: Añadir margin de 10px
- [ ] Tarea 7: Centrar el card-container

**Tareas Bonus:**

- [ ] Tarea 8: Box-shadow al hacer hover
- [ ] Tarea 9: Estilizar imágenes
- [ ] Tarea 10: Estilizar botones
- [ ] Tarea 11: Border-radius en tarjetas
- [ ] Tarea 12: Estilizar header y footer

---

## 🎓 Resultado Esperado

Al completar el ejercicio, deberías ver:

✅ Tres tarjetas alineadas horizontalmente  
✅ Cada tarjeta con 300px de ancho  
✅ Espaciado interno (padding) visible  
✅ Bordes grises alrededor de cada tarjeta  
✅ Separación (margin) entre las tarjetas  
✅ Contenedor centrado en la página  
✅ Efecto de sombra al pasar el mouse (hover)

---

## 📖 Recursos Adicionales

- [MDN - Box Model](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model)
- [CSS-Tricks - Box Model](https://css-tricks.com/the-css-box-model/)
- [Interactive Box Model Demo](https://www.w3schools.com/css/css_boxmodel.asp)
- [Box-Sizing Explained](https://css-tricks.com/box-sizing/)

---

## 📝 Notas Finales

El **Modelo de Caja** es uno de los conceptos más fundamentales de CSS. Una vez que lo domines, tendrás mucho más control sobre el diseño y espaciado de tus páginas web.

**Recuerda:**

- Todo elemento HTML es una caja
- El tamaño total = content + padding + border + margin
- Usa `box-sizing: border-box` para cálculos más fáciles
- El Inspector de Elementos es tu mejor amigo

**¡Feliz codificación! 📦✨**

---

**Fecha:** 31 de octubre de 2025  
**Proyecto:** Pra-05 - Ejercicio CSS Nivel 2: Box Model  
**Módulo:** M2 - Fundamentos Web y Git
