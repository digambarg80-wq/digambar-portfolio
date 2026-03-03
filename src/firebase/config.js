// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_jKRp0O0taFbtxDQJ-HF58K8h63eUAdA",
  authDomain: "digambar-portfolio.firebaseapp.com",
  projectId: "digambar-portfolio",
  storageBucket: "digambar-portfolio.firebasestorage.app",
  messagingSenderId: "10716079042",
  appId: "1:10716079042:web:4e7aac3e3b3dbe28976c5b",
  measurementId: "G-66TNE5757J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app;