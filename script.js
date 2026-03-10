const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
        themeToggleBtn.textContent = 'Dark Mode';
    } else {
        themeToggleBtn.textContent = 'Light Mode';
    }
});