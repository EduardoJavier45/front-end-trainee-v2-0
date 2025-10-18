/**
 * JavaScript para Proyecto Integrador M4
 * Front-End Trainee v2.0
 * 
 * Funcionalidades básicas e interactividad
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Mensaje de bienvenida en consola
    console.log('🚀 Proyecto Integrador M4 - Front-End Trainee v2.0');
    console.log('✅ JavaScript cargado correctamente');
    
    // Agregar interactividad a las secciones
    initSectionInteractions();
    
    // Inicializar animaciones suaves
    initSmoothAnimations();
    
    // Mostrar información del proyecto
    displayProjectInfo();
});

/**
 * Inicializar interacciones de las secciones
 */
function initSectionInteractions() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        // Efecto hover mejorado
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Efecto click
        section.addEventListener('click', function() {
            console.log('📋 Sección clickeada:', this.querySelector('h2').textContent);
        });
    });
}

/**
 * Inicializar animaciones suaves al hacer scroll
 */
function initSmoothAnimations() {
    // Observer para animaciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observar elementos para animación
    const elementsToAnimate = document.querySelectorAll('section, footer');
    elementsToAnimate.forEach(el => observer.observe(el));
}

/**
 * Mostrar información del proyecto
 */
function displayProjectInfo() {
    const projectInfo = {
        name: 'Proyecto Integrador M4',
        course: 'Front-End Trainee v2.0',
        technologies: ['HTML5', 'CSS3', 'JavaScript ES6+'],
        features: [
            'Diseño responsive y mobile-first',
            'Variables CSS personalizadas',
            'Animaciones fluidas',
            'Código semántico y accesible',
            'Optimizado para rendimiento'
        ],
        developer: 'EduardoJavier45',
        date: new Date().toLocaleDateString('es-ES')
    };
    
    console.table(projectInfo);
    
    // Agregar información dinámica al footer si es necesario
    const footer = document.querySelector('footer');
    if (footer) {
        footer.setAttribute('title', `Proyecto actualizado: ${projectInfo.date}`);
    }
}

/**
 * Utilidad para logging mejorado
 */
function logWithStyle(message, type = 'info') {
    const styles = {
        info: 'color: #2563eb; font-weight: bold;',
        success: 'color: #059669; font-weight: bold;',
        warning: 'color: #d97706; font-weight: bold;',
        error: 'color: #dc2626; font-weight: bold;'
    };
    
    console.log(`%c${message}`, styles[type]);
}

// Exportar funciones para uso global si es necesario
window.ProjectM4 = {
    logWithStyle,
    displayProjectInfo
};

// Log final de inicialización
logWithStyle('🎯 Proyecto M4 inicializado correctamente', 'success');