const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3000;

// Configurar o body-parser para lidar com dados de formulários
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Adicionado para lidar com JSON

// Configurar o express-session
app.use(session({
    secret: 'e5b0c8e5b0c8e5b0c8e5b0c8e5b0c8e5b0c8e5b0c8e5b0c8e5b0c8e5b0c8e5b0c8e5b0c8e5b0c8e5b0c8e5b0c8', // Troque por um segredo seguro
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Defina como true se estiver usando HTTPS
}));

// Configurar a conexão com o banco de dados SQLite
const db = new sqlite3.Database('./projeto_integrador.db', (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    console.log('Conectado ao banco de dados SQLite');

    // Criar a tabela de usuários se não existir
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        puccoins INTEGER DEFAULT 1000
    )`, (err) => {
        if (err) {
            console.error('Erro ao criar tabela de usuários', err.message);
        } else {
            console.log('Tabela de usuários criada ou já existe');
        }
    });
});

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/CassinoHUB', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'CassinoHUB.html'));
});

app.get('/about', (req, res) => {
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

// Rota para verificar a disponibilidade de nome de usuário e email
app.post('/check-availability', (req, res) => {
    const { username, email } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? OR email = ?';
    db.get(query, [username, email], (err, row) => {
        if (err) {
            return res.status(500).send('Erro ao verificar disponibilidade');
        }
        if (row) {
            return res.status(400).send('Nome de usuário ou email já estão em uso');
        }
        res.send('Disponível');
    });
});

// Rota para registrar um novo usuário
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const checkQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
    db.get(checkQuery, [username, email], (err, row) => {
        if (err) {
            return res.status(500).send('Erro ao verificar disponibilidade');
        }
        if (row) {
            return res.status(400).send('Nome de usuário ou email já estão em uso');
        }
        const query = 'INSERT INTO users (username, email, password, puccoins) VALUES (?, ?, ?, 1000)';
        db.run(query, [username, email, password], function(err) {
            if (err) {
                return res.status(500).send('Erro ao registrar usuário');
            }
            res.send('Usuário registrado com sucesso');
        });
    });
});

// Rota para login de usuário
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.get(query, [email, password], (err, row) => {
        if (err) {
            return res.status(500).send('Erro ao fazer login');
        }
        if (row) {
            req.session.userId = row.id;
            req.session.username = row.username;
            res.send('Login bem-sucedido');
        } else {
            res.send('Usuário ou senha incorretos');
        }
    });
});

// Middleware para verificar se o usuário está logado
function isAuthenticated(req, res, next) {
    if (req.session.userId) {
        next();
    } else {
        res.redirect('/');
    }
}

app.get('/getPuccoins', (req, res) => {
    if (!req.session.userId) {
        return res.status(401).send('Usuário não autenticado');
    }

    const query = 'SELECT puccoins FROM users WHERE id = ?';
    db.get(query, [req.session.userId], (err, row) => {
        if (err) {
            return res.status(500).send('Erro ao obter puccoins');
        }
        res.json({ puccoins: row.puccoins });
    });
});

app.post('/updatePuccoins', (req, res) => {
    const { puccoins } = req.body;
    const userId = req.session.userId; // Usando o ID do usuário da sessão

    if (typeof puccoins !== 'number') {
        return res.status(400).json({ success: false, message: 'Valor de puccoins inválido' });
    }

    const query = 'UPDATE users SET puccoins = ? WHERE id = ?';
    db.run(query, [puccoins, userId], function(err) {
        if (err) {
            console.error('Erro ao atualizar puccoins:', err);
            return res.status(500).json({ success: false, message: 'Erro ao atualizar puccoins' });
        }

        if (this.changes === 0) {
            return res.status(404).json({ success: false, message: 'Usuário não encontrado' });
        }

        res.json({ success: true, message: 'Puccoins atualizados com sucesso' });
    });
});

// Exemplo de rota protegida
app.get('/profile', isAuthenticated, (req, res) => {
    res.send(`Bem-vindo, ${req.session.username}`);
});

// Rota para logout
app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Erro ao fazer logout');
        }
        res.send('Logout bem-sucedido');
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});