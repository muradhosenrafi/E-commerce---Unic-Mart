// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXRkA863x-HUKrdBhTq3woFvxHU2G5Qyc",
  authDomain: "my-farst-app-220e4.firebaseapp.com",
  projectId: "my-farst-app-220e4",
  storageBucket: "my-farst-app-220e4.firebasestorage.app",
  messagingSenderId: "896590910210",
  appId: "1:896590910210:web:f3f623490e28a1db4a281b",
  measurementId: "G-FMS0L508KK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig