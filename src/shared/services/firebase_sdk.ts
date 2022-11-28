import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAHE2DrRbdVoAzStJT6J_P1ni8GJAQdAoM",
  authDomain: "vue-todo-665c4.firebaseapp.com",
  projectId: "vue-todo-665c4",
  storageBucket: "vue-todo-665c4.appspot.com",
  messagingSenderId: "884541901403",
  appId: "1:884541901403:web:378d0e3782b4711a1a8d7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
