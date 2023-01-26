// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj712vSd3PcIfqmwQid4KeKH7y7cMiyv0",
  authDomain: "getstartedfirebase-f7a3c.firebaseapp.com",
  projectId: "getstartedfirebase-f7a3c",
  storageBucket: "getstartedfirebase-f7a3c.appspot.com",
  messagingSenderId: "120480611635",
  appId: "1:120480611635:web:f6b9164c748ca91d661246",
  measurementId: "G-359FEM5GFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);