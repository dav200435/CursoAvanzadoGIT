  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import {
    getFirestore,
    collection,
    getDocs,
    doc,
    setDoc,
    deleteDoc,
  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBc2xhKum4CHUAthuDVUydfZMGK4YXjBQI",
    authDomain: "quiz-c63f8.firebaseapp.com",
    projectId: "quiz-c63f8",
    storageBucket: "quiz-c63f8.appspot.com",
    messagingSenderId: "127201688248",
    appId: "1:127201688248:web:15e1d416172abd72fa124d"
  };
  
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const Users = await getDocs(collection(db, "Users"));
  export const Ranking = await getDocs(collection(db, "ranking"));