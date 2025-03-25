
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1uAmESS2eSsJudbLHstAWcm3VzOc5s7U",
    authDomain: "prep-bd700.firebaseapp.com",
    projectId: "prep-bd700",
    storageBucket: "prep-bd700.firebasestorage.app",
    messagingSenderId: "222673125609",
    appId: "1:222673125609:web:ad79559d6842f9613c3078",
    measurementId: "G-94NECRTEG8"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app);
export const db = getFirestore(app);