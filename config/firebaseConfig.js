// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "binaryqubit-f06cc.firebaseapp.com",
  projectId: "binaryqubit-f06cc",
  storageBucket: "binaryqubit-f06cc.firebasestorage.app",
  messagingSenderId: "394069570049",
  appId: "1:394069570049:web:bda4aafa91aabfdf8a0600",
  measurementId: "G-J08K7ENR95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const analytics = getAnalytics(app);