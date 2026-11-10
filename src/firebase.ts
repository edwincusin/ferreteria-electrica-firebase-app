// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATd5DfWxrLG3P3ZKLIu9ev0wLyjH0_qg4",
  authDomain: "taller3-nosql.firebaseapp.com",
  projectId: "taller3-nosql",
  storageBucket: "taller3-nosql.firebasestorage.app",
  messagingSenderId: "998550385944",
  appId: "1:998550385944:web:3764437051c87468e81a6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);