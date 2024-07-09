// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "ceifoot-test.firebaseapp.com",
  projectId: "ceifoot-test",
  storageBucket: "ceifoot-test.appspot.com",
  messagingSenderId: "835862718095",
  appId: "1:835862718095:web:62f6a1d4257e72568af2fa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);