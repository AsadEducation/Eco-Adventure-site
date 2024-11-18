// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuQNvTl-AOuAIW-RSKUaDPep8NZTjJOGc",
  authDomain: "dragon-news-7b7fc.firebaseapp.com",
  projectId: "dragon-news-7b7fc",
  storageBucket: "dragon-news-7b7fc.firebasestorage.app",
  messagingSenderId: "178241992962",
  appId: "1:178241992962:web:fff91c06666f7cc229ea1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
