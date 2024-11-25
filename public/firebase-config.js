import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Importa o serviço de banco de dados

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
export const auth = getAuth(app);
export const database = getDatabase(app); // Inicializa e exporta o banco de dados