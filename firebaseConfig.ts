import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";
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
// Initialize the Gemini Developer API backend service
const ai = getAI(app, { backend: new GoogleAIBackend() });

// Create a `GenerativeModel` instance with a model that supports your use case
const model = getGenerativeModel(ai, { model: "gemini-2.5-flash" });

export { db,ai,model };

