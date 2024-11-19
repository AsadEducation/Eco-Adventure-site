import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);





// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyA1h15iXu7gqDY7pgPC5Tzu6scwCyksIM4",
//   authDomain: "eco-adventure-experience32.firebaseapp.com",
//   projectId: "eco-adventure-experience32",
//   storageBucket: "eco-adventure-experience32.firebasestorage.app",
//   messagingSenderId: "170769930392",
//   appId: "1:170769930392:web:5c0b9bf1e5c3d40af1d8ed"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

