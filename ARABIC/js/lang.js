document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('lang-select');
    
    languageSelect.addEventListener('change', function() {
        if (this.value === 'en') {
            window.location.href = '../index.html';
        } else if (this.value === 'ar') {
            window.location.href = 'index.html';
        }
    });
});
