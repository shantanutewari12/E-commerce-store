// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh9V1zbKdKB4RFBabYqP31AelbfL1A99U",
  authDomain: "e-commerce-store-dc67d.firebaseapp.com",
  databaseURL: "https://e-commerce-store-dc67d-default-rtdb.firebaseio.com",
  projectId: "e-commerce-store-dc67d",
  storageBucket: "e-commerce-store-dc67d.appspot.com",
  messagingSenderId: "894250288272",
  appId: "1:894250288272:web:94667e3bab9e34e6934415"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
