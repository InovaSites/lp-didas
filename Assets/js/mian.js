document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
        menu.style.transition = 'opacity 0.3s ease-in-out';

        if (!menu.classList.contains('ativa')) {
            menu.style.display = 'block';
            menu.style.opacity = '0';

            // Força um reflow para a animação funcionar
            menu.offsetHeight;

            menu.style.opacity = '1';
            menu.classList.add('ativa');
            document.querySelector('.seta-down').style.transform = 'rotate(180deg)';
        } else {
            menu.style.opacity = '0';
            document.querySelector('.seta-down').style.transform = 'rotate(0deg)';

            // Espera a animação terminar antes de esconder o menu
            setTimeout(() => {
                menu.style.display = 'none';
                menu.classList.remove('ativa');
            }, 300);
        }
    });

    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.item-nav a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.style.opacity = '0';
            document.querySelector('.seta-down').style.transform = 'rotate(0deg)';

            setTimeout(() => {
                menu.style.display = 'none';
                menu.classList.remove('ativa');
            }, 300);
        });
    });
});