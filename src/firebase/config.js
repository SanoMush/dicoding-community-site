// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCkIeFoOwkP0WC4xRUVr4eG6jALx3TvcFY",
  authDomain: "dicoding-community-ipi.firebaseapp.com",
  projectId: "dicoding-community-ipi",
  storageBucket: "dicoding-community-ipi.firebasestorage.app",
  messagingSenderId: "711046807570",
  appId: "1:711046807570:web:1de564896f7e3a6818d8cb"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);