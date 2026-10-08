import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCCauxLPEHuyZj0Gd8-ut1ls5H6oPbfOho",
  authDomain: "e-commerce-auth-84a29.firebaseapp.com",
  projectId: "e-commerce-auth-84a29",
  storageBucket: "e-commerce-auth-84a29.firebasestorage.app",
  messagingSenderId: "50302839432",
  appId: "1:50302839432:web:cc8dba99f44f766fa54d3d",
  measurementId: "G-X414YXF1P0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
