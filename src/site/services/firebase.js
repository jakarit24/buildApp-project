// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//เรียกใช้ service firebase/auth
import { getAuth } from "firebase/auth"

import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
import firebaseConfig from "./firebase_config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app

//ใช้ service auth ผ่าน named import
export const auth = getAuth(app)
export const db = getDatabase(app);