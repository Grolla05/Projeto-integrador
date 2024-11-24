// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
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
const auth = getAuth(app);

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const server = express();
const port = 3000;

// Middleware para analisar o corpo das requisições
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Rotas de autenticação
server.post('/register', (req, res) => {
    const { email, password } = req.body;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            res.status(201).send('Usuário registrado com sucesso');
        })
        .catch((error) => {
            res.status(400).send(error.message);
        });
});

server.post('/login', (req, res) => {
    const { email, password } = req.body;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            res.status(200).send('Usuário logado com sucesso');
        })
        .catch((error) => {
            res.status(400).send(error.message);
        });
});

// Outras rotas
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

server.get('/CassinoHUB', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'CassinoHUB.html'));
});

server.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about_us.html'));
});

server.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Contact.html'));
});

server.get('/roulette', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Roulette.html'));
});

// Iniciar o servidor
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// Iniciar o servidor
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});