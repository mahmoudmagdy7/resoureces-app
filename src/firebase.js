// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBNL3e7GAjyZ2ELCB_93wsMYSp9DJ0yDzQ",
  authDomain: "imposing-league-384412.firebaseapp.com",
  projectId: "imposing-league-384412",
  storageBucket: "imposing-league-384412.appspot.com",
  messagingSenderId: "204289184263",
  appId: "1:204289184263:web:7686a5b94a7db46bb050a2",
  measurementId: "G-CR0C2S3NMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app)