// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsCrQJb4fHeMhszcV0OlBHJG34MKK1O2k",
  authDomain: "pelatihan-sintak-2025.firebaseapp.com",
  projectId: "pelatihan-sintak-2025",
  storageBucket: "pelatihan-sintak-2025.firebasestorage.app",
  messagingSenderId: "333588329460",
  appId: "1:333588329460:web:6fc5172a0b59bde5a43fa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };