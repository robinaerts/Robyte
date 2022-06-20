// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE8OFQXrKC1ASP_plGy9gEmBWIqWUbnVE",
  authDomain: "robyte-942b6.firebaseapp.com",
  projectId: "robyte-942b6",
  storageBucket: "robyte-942b6.appspot.com",
  messagingSenderId: "997492722498",
  appId: "1:997492722498:web:d21a196910f2243a1596db",
  measurementId: "G-XXWW0F2G37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
