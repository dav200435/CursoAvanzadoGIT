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