// Função para habilitar o scroll suave apenas em links internos
function initSmoothScrolling() {
    // Seleciona apenas links que começam com "#" (âncoras)
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            
            // Verifica se o link é uma âncora e se o elemento existe
            if (targetId.startsWith('#') && targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                
                // Se o elemento de destino existir, aplica o scroll suave
                if (targetElement) {
                    event.preventDefault();
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start' // Alinha o topo do elemento com a janela
                    });
                }
            }
            // Se não for uma âncora válida, mantém o comportamento padrão
        });
    });
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', initSmoothScrolling);
