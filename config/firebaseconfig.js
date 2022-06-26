import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCE8OFQXrKC1ASP_plGy9gEmBWIqWUbnVE",
  authDomain: "robyte-942b6.firebaseapp.com",
  projectId: "robyte-942b6",
  storageBucket: "robyte-942b6.appspot.com",
  messagingSenderId: "997492722498",
  appId: "1:997492722498:web:d21a196910f2243a1596db",
  measurementId: "G-XXWW0F2G37",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
