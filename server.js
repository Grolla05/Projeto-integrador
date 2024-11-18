const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir arquivos estáticos (HTML, CSS, JS)
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
    res.sendFile(path.join(__dirname, 'public', 'About.html'));
});

app.get('/Services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Services.html'));
});

app.get('/Portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Portfolio.html'));
});

app.get('/Blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Blog.html'));
});

app.get('/FAQ', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'FAQ.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});