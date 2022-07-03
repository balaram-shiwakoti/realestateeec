import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDx20qc6yf1hxpZRg1kkP4l0N4fvEdXB7M",
    authDomain: "house-project-6c819.firebaseapp.com",
    projectId: "house-project-6c819",
    storageBucket: "house-project-6c819.appspot.com",
    messagingSenderId: "689972053842",
    appId: "1:689972053842:web:84536f1ca90b50f6f09c8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()