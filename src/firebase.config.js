import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAH4JiBvnsVf72z-aho6miJoQUk6XL4GS8",
  authDomain: "arizonahtm-fd9e7.firebaseapp.com",
  projectId: "arizonahtm-fd9e7",
  storageBucket: "arizonahtm-fd9e7.appspot.com",
  messagingSenderId: "374894113508",
  appId: "1:374894113508:web:fd8ad76f859a65ce6572f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;