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
const Users = await getDocs(collection(db, "Users"));
const Ranking = await getDocs(collection(db, "Ranking"));
const Quiz = await getDocs(collection(db, "Preguntas"));

export function getUsers() {
  Users.forEach((doc) => {
    var id = doc.id;
    var usuario = doc.data()["Users"];
    var contraseña = doc.data()["contraseña"];
  });
}

export function getRanking() {
  Ranking.forEach((doc) => {
    var id = doc.id;
    var aciertos = doc.data()["aciertos"];
    var usuario = doc.data()["usuario"]["id"];
    Users.forEach((doc) => {
      doc.id == usuario ? usuario = doc.data()["Users"]: usuario = usuario;
    });
    return id
  });
}

export function getPreguntas() {
  Quiz.forEach((doc) => {
    var id = doc.id;
    var categoria = doc.data()["category"];
    var correcta = doc.data()["correct_answer"];
    var dificultad = doc.data()["difficulty"];
    var incorrectas = doc.data()["incorrect_answers"];
    var preguntas = doc.data()["question"];
    var tipoPregunta = doc.data()["type"];
  });
}

console.log(getRanking());