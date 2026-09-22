const themeButton = document.getElementById('theme-toggle');
const body = document.body;

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});