// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCulDjQmQhCWe5XCanI5QajYf22zO93IaM",
  authDomain: "ai-study-assistant-8b9de.firebaseapp.com",
  projectId: "ai-study-assistant-8b9de",
  storageBucket: "ai-study-assistant-8b9de.appspot.com",
  messagingSenderId: "584487523526",
  appId: "1:584487523526:web:177863ff3d0f2ca337f3c7",
  measurementId: "G-ZH9QBSGLDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth= getAuth(app);

export {app,auth}
