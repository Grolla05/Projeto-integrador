// public/auth.js

// Reference to the Firebase Authentication service
const auth = firebase.auth();

// Reference to the Firebase Realtime Database service
const database = firebase.database();

// Function to handle user registration
function registerUser(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Save additional user info to the database
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

// Function to handle user login
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

// Function to get the user's puccoins
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

// Function to update the user's puccoins
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