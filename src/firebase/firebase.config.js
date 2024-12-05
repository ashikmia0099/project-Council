// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTuMwr-0yrVwYcYV1Fb4BHHtYwAZ3WyYE",
  authDomain: "ocean-council.firebaseapp.com",
  projectId: "ocean-council",
  storageBucket: "ocean-council.firebasestorage.app",
  messagingSenderId: "524183613296",
  appId: "1:524183613296:web:59e92745602f3dd65769b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;