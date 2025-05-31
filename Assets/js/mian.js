document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const setaDown = document.querySelector('.seta-down');
    const menuLinks = document.querySelectorAll('.item-nav a');

    function abrirMenu() {
        menu.style.transition = 'opacity 0.3s ease-in-out';
        menu.style.display = 'block';
        menu.style.opacity = '0';

        // Força um reflow para a animação funcionar
        menu.offsetHeight; 

        menu.style.opacity = '1';
        menu.classList.add('ativa');
        setaDown.style.transform = 'rotate(180deg)';
    }

    function fecharMenu() {
        menu.style.transition = 'opacity 0.3s ease-in-out';
        menu.style.opacity = '0';
        setaDown.style.transform = 'rotate(0deg)';
        
        // Espera a animação terminar antes de esconder o menu
        setTimeout(() => {
            menu.style.display = 'none';
            menu.classList.remove('ativa');
        }, 300);
    }

    menuToggle.addEventListener('click', function () {
        if (!menu.classList.contains('ativa')) {
            abrirMenu();
        } else {
            fecharMenu();
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', fecharMenu);
    });

    let lastScrollTop = window.scrollY;

    window.addEventListener('scroll', function () {
        let currentScroll = window.scrollY;
        if (currentScroll < lastScrollTop) {
            // Scroll para cima: mostra o menu se não estiver visível
            if (!menu.classList.contains('ativa')) {
                abrirMenu();
            }
        }
        lastScrollTop = currentScroll;
    });
});