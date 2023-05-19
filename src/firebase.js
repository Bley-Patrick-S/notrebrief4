// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABQI6705CXK7mWbrRB-Me9qCMfJjFQhsY",
  authDomain: "mindgeek-60f9a.firebaseapp.com",
  projectId: "mindgeek-60f9a",
  storageBucket: "mindgeek-60f9a.appspot.com",
  messagingSenderId: "111523513658",
  appId: "1:111523513658:web:d0014c563b79d042c3fc03",
  measurementId: "G-FWRCQB4FMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);