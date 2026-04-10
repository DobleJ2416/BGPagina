// Esperar a que todo el HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleccionamos todos los elementos que tienen la clase 'oculto'
    const elementosOcultos = document.querySelectorAll('.oculto');
    
    // Configuramos el observador
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            // Si el elemento entra en la pantalla del usuario
            if(entrada.isIntersecting){
                // Le agregamos la clase que lo hace visible y lo desliza hacia arriba
                entrada.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    });

    // Le decimos al observador que vigile cada elemento
    elementosOcultos.forEach(el => observador.observe(el));
    
});