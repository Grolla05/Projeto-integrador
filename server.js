// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDacw_vn8GMxF-J42Hr1n1JuYTZow3kSeM",
    authDomain: "projeto-integrador-pucbet.firebaseapp.com",
    projectId: "projeto-integrador-pucbet",
    storageBucket: "projeto-integrador-pucbet.firebasestorage.app",
    messagingSenderId: "898894824955",
    appId: "1:898894824955:web:a1d85eb33ebcfbdd86375e",
    measurementId: "G-JW2HFW9GVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const server = express();
const port = 3000;

// Middleware para analisar o corpo das requisições
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rotas de autenticação
app.post('/register', (req, res) => {
    const { email, password } = req.body;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            res.status(201).send('Usuário registrado com sucesso');
        })
        .catch((error) => {
            res.status(400).send(error.message);
        });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            res.status(200).send('Usuário logado com sucesso');
        })
        .catch((error) => {
            res.status(400).send(error.message);
        });
});

// Outras rotas
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

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});