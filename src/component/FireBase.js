
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAIkY_zC550xQePeEEM35BL_txMo3cBF4o",
  authDomain: "uplodingfile-bfa7b.firebaseapp.com",
  projectId: "uplodingfile-bfa7b",
  storageBucket: "uplodingfile-bfa7b.appspot.com",
  messagingSenderId: "773276776742",
  appId: "1:773276776742:web:6087c7209d2e88bb0a29e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)