// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-46f7b.firebaseapp.com",
  projectId: "mern-estate-46f7b",
  storageBucket: "mern-estate-46f7b.appspot.com",
  messagingSenderId: "836791321819",
  appId: "1:836791321819:web:92da18df2d7e31704b78fe",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
