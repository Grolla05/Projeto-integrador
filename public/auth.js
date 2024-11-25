// public/auth.js

import { auth, database } from './firebase-config'; // Importa auth e database

// Função para registrar um novo usuário
function registerUser(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Salva informações adicionais do usuário no banco de dados
            database.ref('users/' + user.uid).set({
                email: user.email,
                puccoins: 1000
            });
            alert('Usuário registrado com sucesso');
        })
        .catch((error) => {
            console.error('Erro ao registrar usuário:', error);
            alert('Erro ao registrar usuário: ' + error.message);
        });
}

// Função para fazer login do usuário
function loginUser(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Login bem-sucedido');
        })
        .catch((error) => {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao fazer login: ' + error.message);
        });
}

// Função para obter os puccoins do usuário
function getUserPuccoins() {
    const user = auth.currentUser;
    if (user) {
        database.ref('users/' + user.uid).once('value')
            .then((snapshot) => {
                const puccoins = snapshot.val().puccoins;
                console.log('Puccoins:', puccoins);
            })
            .catch((error) => {
                console.error('Erro ao obter puccoins:', error);
            });
    } else {
        console.log('Usuário não autenticado');
    }
}

// Função para atualizar os puccoins do usuário
function updateUserPuccoins(puccoins) {
    const user = auth.currentUser;
    if (user) {
        database.ref('users/' + user.uid).update({
            puccoins: puccoins
        })
        .then(() => {
            console.log('Puccoins atualizados com sucesso');
        })
        .catch((error) => {
            console.error('Erro ao atualizar puccoins:', error);
        });
    } else {
        console.log('Usuário não autenticado');
    }
}