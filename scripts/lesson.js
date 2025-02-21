document.addEventListener('DOMContentLoaded', function() {
    const htmlInput = document.querySelector('.html-input');
    const cssInput = document.querySelector('.css-input');
    const runButton = document.querySelector('.run-button');
    const previewFrame = document.querySelector('.preview-frame');
    const tabs = document.querySelectorAll('.tab');

    // Переключение между вкладками HTML и CSS
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            if (tab.textContent === 'HTML') {
                htmlInput.style.display = 'block';
                cssInput.style.display = 'none';
            } else {
                htmlInput.style.display = 'none';
                cssInput.style.display = 'block';
            }
        });
    });

    // Запуск кода
    runButton.addEventListener('click', () => {
        const html = htmlInput.value;
        const css = cssInput.value;
        
        // Создаем документ для предпросмотра
        const preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
        preview.open();
        preview.write(`
            ${html}
            <style>${css}</style>
        `);
        preview.close();
    });
}); 