document.addEventListener('DOMContentLoaded', () => {

    const navButtons = document.querySelectorAll('.nav-btn');
    const pageSections = document.querySelectorAll('.page-section');
    const navLinksContainer = document.querySelector('.nav-links');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPageId = button.getAttribute('data-target');

            // remove a class ativa
            navButtons.forEach(btn => btn.classList.remove('active'));
            // adiciona a classe
            button.classList.add('active');

            //
            pageSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetPageId) {
                    section.classList.add('active');
                }
            });

            // Fecha automaticamente o menu mobile após o clique
            navLinksContainer.classList.remove('active');
        });
    });

    // mudar claro escuro
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
        }
    });

    // burg menu
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    // validar o algo
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        formMessage.className = 'form-alert hidden';
        formMessage.textContent = '';

        if (!name || !email || !message) {
            showValidationMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showValidationMessage('Por favor, insira um e-mail com formato válido (exemplo: usuario@dominio.com).', 'error');
            return;
        }

        showValidationMessage('Mensagem enviada com sucesso!', 'success');
        contactForm.reset();
    });

    function showValidationMessage(text, type) {
        formMessage.textContent = text;
        formMessage.classList.remove('hidden');
        formMessage.classList.add(type);
    }
});
