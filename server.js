const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Обслуживание статических файлов
app.use(express.static(path.join(__dirname)));

// Маршрутизация для уроков
app.get('/lessons/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'lessons', `${req.params.id}.html`));
});

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
}); 