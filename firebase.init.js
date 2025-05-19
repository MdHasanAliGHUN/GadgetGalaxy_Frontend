// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD925OxQAu6v_QXXAaUVDDr0Wo-e0JuH7E",
  authDomain: "gadgetgalaxyproject.firebaseapp.com",
  projectId: "gadgetgalaxyproject",
  storageBucket: "gadgetgalaxyproject.firebasestorage.app",
  messagingSenderId: "673885073039",
  appId: "1:673885073039:web:80f577231925dce0458afa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);