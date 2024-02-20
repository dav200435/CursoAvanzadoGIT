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

function createCard(id, task) {
  //<div class="card text-white bg-info mb-6  offset-md-4" style="max-width: 20rem;">
  const principalDiv = document.createElement("div");
  principalDiv.setAttribute("class", "card bg-light mb-3");
  principalDiv.style = "max-width: 20rem;";
  principalDiv.setAttribute("name", id);
  //<div class="card-header">Formulario Tareas</div>
  const headerDiv = document.createElement("div");
  const contentDiv = document.createTextNode("Id: " + id);
  headerDiv.setAttribute("class", "card-header");

  headerDiv.appendChild(contentDiv);
  principalDiv.appendChild(headerDiv);
  // <div class="card-body">
  const bodyDiv = document.createElement("div");
  const pTitle = document.createElement("p");
  const pTitleText = document.createTextNode("Title: " + task.title);
  const hr = document.createElement("hr");
  const pDesc = document.createElement("p");
  const pDescText = document.createTextNode("Description: " + task.description);

  pTitle.appendChild(pTitleText);
  bodyDiv.appendChild(pTitle);
  bodyDiv.appendChild(hr);
  pDesc.appendChild(pDescText);
  bodyDiv.appendChild(pDesc);
  bodyDiv.appendChild(hr);

  var input = document.createElement("input");
  input.type = "button";
  input.value = "Borrar Tarea";
  input.setAttribute("name", "delete");
  input.setAttribute("id", id);
  bodyDiv.appendChild(input);

  principalDiv.appendChild(bodyDiv);

  document.body.appendChild(principalDiv);
  const br = document.createElement("br");
  document.body.appendChild(br);
}

export function getTasks() {
  querySnapshot.forEach((doc) => {
    createCard(doc.id, doc.data());
  });
}
function generateRandomIdTask(num) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
export async function insertTask(task) {
  await setDoc(doc(db, "users", generateRandomIdTask(20)), task);
  alert("Insertada la tarea: " + task.title);
}

export async function deleteTask(id) {
  await deleteDoc(doc(db, "users", id));
  alert("Borrada la tarea: " + id);
}


