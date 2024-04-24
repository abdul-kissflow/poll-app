// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "gopal1996.firebaseapp.com",
  databaseURL: "https://gopal1996-default-rtdb.firebaseio.com",
  projectId: "gopal1996",
  storageBucket: "gopal1996.appspot.com",
  messagingSenderId: "906010475810",
  appId: "1:906010475810:web:7a739e853cd5d9b9ea797b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, db };
