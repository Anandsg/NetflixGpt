// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCKmL_hzCvSHw5NApFKOnxivBeFHrzic4",
    authDomain: "netflixgpt-c8497.firebaseapp.com",
    projectId: "netflixgpt-c8497",
    storageBucket: "netflixgpt-c8497.appspot.com",
    messagingSenderId: "701796871004",
    appId: "1:701796871004:web:ccaeca96c2ab464d45af99",
    measurementId: "G-MSJYDZBM2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();