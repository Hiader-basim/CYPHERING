// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXaoR8sM7AZ-LxtURBl1SQSNPojDgE7QU",
  authDomain: "ciphering-18c30.firebaseapp.com",
  projectId: "ciphering-18c30",
  storageBucket: "ciphering-18c30.appspot.com",
  messagingSenderId: "298419745507",
  appId: "1:298419745507:web:a2ec0496262d92d1240bd6",
  measurementId: "G-Y42GG929TT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
