// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA73LbCLEwh4NJUhJx1oIZanN67CvHZ1KY",
  authDomain: "car-doctor-cl.firebaseapp.com",
  projectId: "car-doctor-cl",
  storageBucket: "car-doctor-cl.appspot.com",
  messagingSenderId: "57250434827",
  appId: "1:57250434827:web:8fe8b0abc969ca6fbbdc0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;