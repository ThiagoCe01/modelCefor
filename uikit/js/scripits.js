document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeStylesheet = document.getElementById('themeStylesheet');

    // Verifica o estado inicial do toggle switch
    themeToggle.checked = themeStylesheet.getAttribute('href') === 'css/responsivelDark.css';

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            themeStylesheet.setAttribute('href', 'css/responsivelDark.css');
        } else {
            themeStylesheet.setAttribute('href', 'css/responsiveLight.css');
        }
    });
});
