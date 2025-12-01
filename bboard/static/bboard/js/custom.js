
console.log('Сайт загружен');

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Вход выполнен');
        });
    }
});