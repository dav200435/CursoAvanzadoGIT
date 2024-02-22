import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBgEi69uoQg1ej3IPRBSBOZxkeMWl6PZo",
  authDomain: "quiz-v3-7bd31.firebaseapp.com",
  projectId: "quiz-v3-7bd31",
  storageBucket: "quiz-v3-7bd31.appspot.com",
  messagingSenderId: "336623719831",
  appId: "1:336623719831:web:0ee8f133929c264ed7e0d2"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const Users = await getDocs(collection(db, "Users"));
export const Ranking = await getDocs(collection(db, "Ranking"));
export const Quiz = await getDocs(collection(db, "Preguntas"));

function getUsers() {
  Users.forEach((doc) => {
    var id = JSON.parse(doc.id);
    var usuario = JSON.parse(doc.data())[0];
    console.log(id, usuario);
  });
}

export function getRanking() {
  Ranking.forEach((doc) => {
    var usuario = doc.usuario;
    var aciertos = doc.aciertos;
  });
}

export function getPreguntas() {
  Quiz.forEach((doc) => {
    var categoria = doc.category;
    var correcta = doc.correct_answer;
    var dificultad = doc.difficulty;
    var incorrectas = doc.incorrect_answers;
    var preguntas = doc.question;
    var tipoPregunta = doc.type;
  });
}

getUsers()