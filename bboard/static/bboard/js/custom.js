// Кастомный JavaScript для доски объявлений

document.addEventListener('DOMContentLoaded', function() {
    console.log('Доска объявлений загружена!');

    // Валидация формы логина
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email');
            const password = document.getElementById('password');
            let isValid = true;

            // Валидация email
            if (!email.value || !isValidEmail(email.value)) {
                email.classList.add('is-invalid');
                isValid = false;
            } else {
                email.classList.remove('is-invalid');
                email.classList.add('is-valid');
            }

            // Валидация пароля
            if (!password.value || password.value.length < 6) {
                password.classList.add('is-invalid');
                isValid = false;
            } else {
                password.classList.remove('is-invalid');
                password.classList.add('is-valid');
            }

            if (isValid) {
                // Имитация успешного входа
                showAlert('✅ Вход выполнен успешно! Добро пожаловать!', 'success');
                console.log('Форма валидна, данные:', {
                    email: email.value,
                    password: password.value
                });

                // Перенаправление на главную страницу через 2 секунды
                setTimeout(() => {
                    window.location.href = '/';
                }, 2000);
            }
        });
    }

    // Функция проверки email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Функция показа уведомлений
    function showAlert(message, type = 'info') {
        // Удаляем существующие уведомления
        const existingAlerts = document.querySelectorAll('.custom-alert');
        existingAlerts.forEach(alert => alert.remove());

        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} custom-alert alert-dismissible fade show`;
        alertDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1050;
            min-width: 300px;
        `;
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        document.body.appendChild(alertDiv);

        // Автоматическое скрытие через 5 секунд
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 5000);
    }

    // Добавляем интерактивность карточкам объявлений
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            if (!e.target.closest('button') && !e.target.closest('a')) {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                showAlert('🔄 Переход к деталям объявления...', 'info');
            }
        });
    });

    // Анимация счетчиков на главной странице
    const counters = document.querySelectorAll('.card.bg-primary h3, .card.bg-success h3');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 50;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 30);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
});