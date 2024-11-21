import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyASgvXCDVROqjurTuKF4NweWA6DNI9kFEk",
    authDomain: "manager-c27af.firebaseapp.com",
    projectId: "manager-c27af",
    storageBucket: "manager-c27af.firebasestorage.app",
    messagingSenderId: "857863636955",
    appId: "1:857863636955:web:8466e134f23f9ee676c9fe",
    measurementId: "G-15VZ5DK9FW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
