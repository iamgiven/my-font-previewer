document.addEventListener('DOMContentLoaded', () => {
    const fontSizeInput = document.getElementById('font-size');
    const customTextInput = document.getElementById('custom-text');
    const previewText = document.querySelector('.custom-font');
    const charPreview = document.getElementById('char-preview');

    // Characters to preview
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!;:",.?';

    // Function to render character preview
    const renderCharPreview = () => {
        charPreview.innerHTML = '';
        characters.split('').forEach(char => {
            const charSpan = document.createElement('span');
            charSpan.textContent = char;
            charPreview.appendChild(charSpan);
        });
    };

    // Initial character preview
    renderCharPreview();

    // Update font size
    fontSizeInput.addEventListener('input', (event) => {
        const newSize = event.target.value;
        previewText.style.fontSize = `${newSize}px`;
    });

    // Update custom text
    customTextInput.addEventListener('input', (event) => {
        previewText.textContent = event.target.value;
    });
});