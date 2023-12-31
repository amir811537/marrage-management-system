// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_APIKEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "event-managementsystem-auth.firebaseapp.com",
  projectId: "event-managementsystem-auth",
  storageBucket: "event-managementsystem-auth.appspot.com",
  messagingSenderId: "703880788687",
  appId: "1:703880788687:web:0bf85712ea33f0e3e155ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;