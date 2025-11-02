import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTGXD3AMTOfeqgXCia6GVpd2SdLhrqFjg",
  authDomain: "smartfinance-10645.firebaseapp.com",
  projectId: "smartfinance-10645",
  storageBucket: "smartfinance-10645.firebasestorage.app",
  messagingSenderId: "766556511409",
  appId: "1:766556511409:web:94d1ab6c7d8f2a5bd5d690",
  measurementId: "G-SCS4W34N0V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

