# Notas - Lección 2 Ejercicio 2: Estructura HTML Básica

## 📋 Información del Proyecto

- **Nombre del archivo:** index.html
- **Carpeta:** actividad_m2_L2
- **Curso:** Front-End Trainee V2.0
- **Módulo:** M2 - Fundamentos Web y Git
- **Lección:** Lección 2, Ejercicio 2
- **Fecha:** 30 de octubre de 2025

## 🎯 Objetivo del Ejercicio

Crear un proyecto con estructura de carpetas ordenada que contenga una página web básica en HTML aplicando la estructura correcta del documento y utilizando al menos seis etiquetas diferentes.

## 📁 Estructura del Proyecto

```
actividad_m2_L2/
├── index.html          (Página principal)
└── notas.md           (Este archivo de documentación)
```

## 🏷️ Las 6 Etiquetas Principales Utilizadas

### 1. **`<header>`**

- **Propósito:** Encabezado principal de la página
- **Contenido:** Título principal (h1) y descripción
- **Ubicación:** Inicio del body

### 2. **`<nav>`**

- **Propósito:** Navegación del sitio
- **Contenido:** Lista de enlaces a diferentes secciones
- **Ubicación:** Después del header

### 3. **`<main>`**

- **Propósito:** Contenedor del contenido principal
- **Contenido:** Todas las secciones y artículos principales
- **Ubicación:** Cuerpo central del documento

### 4. **`<section>`**

- **Propósito:** Agrupar contenido por temas
- **Contenido:** Bienvenida, acerca de, contacto
- **Ubicación:** Dentro de main
- **Cantidad:** 3 secciones diferentes

### 5. **`<article>`**

- **Propósito:** Contenido independiente y auto-contenido
- **Contenido:** Servicios de desarrollo web
- **Ubicación:** Dentro de main

### 6. **`<footer>`**

- **Propósito:** Pie de página con información adicional
- **Contenido:** Información del curso, autor, copyright
- **Ubicación:** Final del body

## 📝 Etiquetas Adicionales Utilizadas

Además de las 6 principales, se utilizaron otras etiquetas para completar la estructura:

- **`<h1>` - `<h3>`:** Jerarquía de encabezados
- **`<p>`:** Párrafos de texto
- **`<ul>` y `<ol>`:** Listas ordenadas y no ordenadas
- **`<li>`:** Elementos de lista
- **`<a>`:** Enlaces (internos y externos)
- **`<strong>`:** Texto en negrita (énfasis fuerte)
- **`<small>`:** Texto de menor importancia
- **`<hr>`:** Línea horizontal separadora
- **`<address>`:** Información de contacto

## ✅ Estructura del Documento HTML

```
<!DOCTYPE html>
<html lang="es">
  <head>
    - meta charset
    - meta viewport
    - meta description
    - title
  </head>
  <body>
    - header
    - nav
    - main
      - section #inicio
      - section #acerca
      - article #servicios
      - section #contacto
    - footer
  </body>
</html>
```

## 🎨 Contenido de la Página

### Secciones Principales:

1. **Bienvenida (#inicio)**

   - Introducción al proyecto
   - Explicación de HTML

2. **Acerca de (#acerca)**

   - Lista de etiquetas utilizadas
   - Propósito del proyecto

3. **Servicios (#servicios)**

   - Áreas del desarrollo web
   - Mejores prácticas (lista ordenada)

4. **Contacto (#contacto)**
   - Información de contacto
   - Uso de etiqueta `<address>`

## 📚 Conceptos Aplicados

✅ **Estructura correcta de documento HTML5**

- DOCTYPE declaration
- Etiquetas html, head, body
- Meta tags esenciales

✅ **Semántica HTML**

- Uso de etiquetas con significado
- Estructura lógica del contenido

✅ **Navegación interna**

- Enlaces con anclas (#id)
- Atributo href con referencias internas

✅ **Jerarquía de encabezados**

- h1 para título principal (único)
- h2 para títulos de sección
- h3 para subtítulos

✅ **Listas**

- Lista no ordenada (ul) para items sin orden específico
- Lista ordenada (ol) para pasos secuenciales

✅ **Accesibilidad básica**

- Lang attribute en html
- Estructura semántica clara
- Texto descriptivo en enlaces

## 🔍 Diferencias con Ejercicio 1

| Aspecto     | Ejercicio 1               | Ejercicio 2               |
| ----------- | ------------------------- | ------------------------- |
| Complejidad | Mayor, más contenido      | Básico, enfocado          |
| Comentarios | Extensos en cada etiqueta | Comentarios simples       |
| Etiquetas   | 7+ etiquetas semánticas   | 6 etiquetas principales   |
| Estructura  | Más secciones y artículos | Estructura simplificada   |
| Propósito   | Demostración completa     | Ejercicio práctico básico |

## 💡 Puntos Clave

1. ✔️ **Estructura ordenada:** Carpeta específica para el ejercicio
2. ✔️ **6 etiquetas diferentes:** header, nav, main, section, article, footer
3. ✔️ **HTML válido:** Estructura correcta del documento
4. ✔️ **Contenido significativo:** Texto relacionado con desarrollo web
5. ✔️ **Navegación funcional:** Enlaces internos con IDs
6. ✔️ **Organización lógica:** Flujo claro de información

## 🎓 Habilidades Desarrolladas

- [x] Crear estructura básica de HTML5
- [x] Utilizar etiquetas semánticas correctamente
- [x] Organizar contenido en secciones lógicas
- [x] Implementar navegación interna
- [x] Aplicar jerarquía de encabezados
- [x] Crear listas ordenadas y no ordenadas
- [x] Usar etiquetas de texto para énfasis

## 📖 Próximos Pasos

- [ ] Agregar estilos CSS en ejercicios posteriores
- [ ] Implementar formularios HTML
- [ ] Agregar imágenes y multimedia
- [ ] Crear tablas de datos
- [ ] Mejorar accesibilidad con ARIA
- [ ] Validar código con W3C Validator

## 🔗 Recursos Relacionados

- **Ejercicio anterior:** actividad_m2_L1/leccion2-Ej1.html
- **Documentación:** [MDN Web Docs - HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- **Validación:** [W3C Markup Validator](https://validator.w3.org/)

---

**Autor:** Eduardo Javier Perez Espindola
**Estado:** Completado ✅  
**Última actualización:** 30 de octubre de 2025
