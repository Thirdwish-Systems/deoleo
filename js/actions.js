    
        function toggleFaq(element) {
            const answer = element.nextElementSibling;
            const isActive = element.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.faq-question').forEach(el => {
                el.classList.remove('active');
                el.nextElementSibling.style.display = 'none';
                el.querySelector('span').textContent = '+';
            });

            if (!isActive) {
                element.classList.add('active');
                answer.style.display = 'block';
                element.querySelector('span').textContent = '-';
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.roadmap .step');

    steps.forEach((step) => {
        // Al pasar el ratón sobre un paso
        step.addEventListener('mouseenter', () => {
            // 1. Quitamos la clase active de todos los pasos
            steps.forEach(s => s.classList.remove('active'));
            
            // 2. Se la ponemos solo al que estamos tocando
            step.classList.add('active');
        });
    });

    // Opcional: Si quieres que al sacar el ratón del área vuelva a brillar la Fase 1
    const roadmapContainer = document.querySelector('.roadmap');
    if (roadmapContainer) {
        roadmapContainer.addEventListener('mouseleave', () => {
            steps.forEach(s => s.classList.remove('active'));
            steps[0].classList.add('active'); // La Fase 1 vuelve a ser la principal
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Selección de las dos columnas de alcance
    const scopeCols = document.querySelectorAll('.scope-col');

    scopeCols.forEach((col) => {
        col.addEventListener('mouseenter', () => {
            // Aplicamos un efecto de enfoque: la actual resalta, la otra se suaviza
            scopeCols.forEach(c => {
                c.style.opacity = '0.4';
                c.style.transform = 'scale(0.98)';
                c.style.transition = 'all 0.3s ease';
            });
            
            // Resaltamos la columna activa
            col.style.opacity = '1';
            col.style.transform = 'scale(1.02)';
            col.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        });

        col.addEventListener('mouseleave', () => {
            // Al salir, restauramos ambas columnas a su estado original
            scopeCols.forEach(c => {
                c.style.opacity = '1';
                c.style.transform = 'scale(1)';
                c.style.boxShadow = 'none';
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos las cajas de escenarios en la sección de Arquitectura
    const scenarioBoxes = document.querySelectorAll('.scenario-box');

    scenarioBoxes.forEach((box) => {
        // Transiciones suaves añadidas por JS para no tocar el CSS original
        box.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        box.style.cursor = 'pointer';

        box.addEventListener('mouseenter', () => {
            // Efecto de crecimiento y elevación
            box.style.transform = 'scale(1.05)';
            box.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
            box.style.zIndex = '10';
            box.style.borderColor = 'var(--accent)'; // Resalta el borde con el color corporativo
        });

        box.addEventListener('mouseleave', () => {
            // Retorno al estado original
            box.style.transform = 'scale(1)';
            box.style.boxShadow = 'none';
            box.style.zIndex = '1';
            box.style.borderColor = '#eee'; // Vuelve al color neutro
        });
    });
});
  