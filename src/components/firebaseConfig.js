import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD-HmLLhNvgbq1Yqj38aRx-tk2LwxNoSA",
  authDomain: "netflix-3a59b.firebaseapp.com",
  projectId: "netflix-3a59b",
  storageBucket: "netflix-3a59b.firebasestorage.app",
  messagingSenderId: "252305328",
  appId: "1:252305328:web:6956ff82e30fce42d9c075",
  measurementId: "G-E5L2414QXY"
};

// ✅ Initialize Firebase once
const app = initializeApp(firebaseConfig);

// ✅ Export Firebase Auth
export const auth = getAuth(app);
