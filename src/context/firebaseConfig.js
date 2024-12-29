import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuuOS_A4uv0vJijoKMOivJh9H1x_6_yJA",
  authDomain: "proyecto-final-react-365d5.firebaseapp.com",
  projectId: "proyecto-final-react-365d5",
  storageBucket: "proyecto-final-react-365d5.firebasestorage.app",
  messagingSenderId: "961615306133",
  appId: "1:961615306133:web:9c4e752a4d8e13f4edaa9c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
