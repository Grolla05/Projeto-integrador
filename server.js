const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir arquivos estáticos (HTML, CSS, JS) (inicializar digitando no terminal: node server.js)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/CassinoHUB', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'CassinoHUB.html'));
});

app.get('/Contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Contact.html'));
});

app.get('/About', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about_us.html'));
});

app.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});

app.get('/Blackjack', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Blackjack.html'));
});

app.get('/Roulette', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Roulette.html'));
});

app.get('/crash', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'crash.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});