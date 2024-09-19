document.addEventListener('DOMContentLoaded', () => {
    const fontSizeInput = document.getElementById('font-size');
    const customTextInput = document.getElementById('custom-text');
    const previewText = document.querySelector('.custom-font');
    const charPreview = document.getElementById('char-preview');

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!;:",.?';

    const renderCharPreview = () => {
        charPreview.innerHTML = '';
        characters.split('').forEach(char => {
            const charSpan = document.createElement('span');
            charSpan.textContent = char;
            charPreview.appendChild(charSpan);
        });
    };

    renderCharPreview();

    fontSizeInput.addEventListener('input', (event) => {
        const newSize = event.target.value;
        previewText.style.fontSize = `${newSize}px`;
    });

    customTextInput.addEventListener('input', (event) => {
        previewText.textContent = event.target.value;
    });
});