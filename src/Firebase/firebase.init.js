// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMJ3AkIMiGXraxJCWvsrS5lO1Xbdy4hQs",
  authDomain: "pet-care-winter-79bb0.firebaseapp.com",
  projectId: "pet-care-winter-79bb0",
  storageBucket: "pet-care-winter-79bb0.firebasestorage.app",
  messagingSenderId: "1043378541325",
  appId: "1:1043378541325:web:7a66b0704f199fa755d644"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);