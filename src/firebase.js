
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "/firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyABQI6705CXK7mWbrRB-Me9qCMfJjFQhsY",
    authDomain: "mindgeek-60f9a.firebaseapp.com",
    projectId: "mindgeek-60f9a",
    storageBucket: "mindgeek-60f9a.appspot.com",
    messagingSenderId: "111523513658",
    appId: "1:111523513658:web:d0014c563b79d042c3fc03",
    measurementId: "G-FWRCQB4FMR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log(app)


// src/index.js
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

const firebaseApp = initializeApp({ /* config */ });
const db = getFirestore(firebaseApp);

async function loadCity(name) {
  const cityDoc = doc(db, `cities/${name}`);
  const snapshot = await getDoc(cityDoc);
  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}