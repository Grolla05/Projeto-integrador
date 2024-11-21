const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configurar o body-parser para lidar com dados de formulários
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Adicionado para lidar com JSON

// Configurar a conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'projeto_integrador'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado ao banco de dados MySQL');
});

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
    res.sendFile(path.join(__dirname, 'public', 'about_us.html'));
});

app.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});

app.get('/Roulette', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Roulette.html'));
});

app.get('/Blackjack', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Blackjack.html'));
});

// Rota para registrar um novo usuário
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao registrar usuário');
        }
        res.send('Usuário registrado com sucesso');
    });
});

// Rota para login de usuário
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao fazer login');
        }
        if (results.length > 0) {
            res.send('Login bem-sucedido');
        } else {
            res.send('Usuário ou senha incorretos');
        }
    });
});

// Rota para salvar mensagem de contato
app.post('/contact', (req, res) => {
    const { nome, email, mensagem } = req.body;
    const query = 'INSERT INTO mensagens (nome, email, mensagem) VALUES (?, ?, ?)';
    db.query(query, [nome, email, mensagem], (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao salvar mensagem');
        }
        res.send('Mensagem enviada com sucesso');
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});