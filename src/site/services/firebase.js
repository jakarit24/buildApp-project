// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//เรียกใช้ service firebase/auth
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
import firebaseConfig from "./firebase_config";
/*const firebaseConfig = {
  apiKey: "AIzaSyDauaAOpt60ZQfFInexhytNOOMfPp_Ph1Y",
  authDomain: "app-project-ae493.firebaseapp.com",
  projectId: "app-project-ae493",
  storageBucket: "app-project-ae493.appspot.com",
  messagingSenderId: "758662978319",
  appId: "1:758662978319:web:c2ef2741d35434da89bc7a"
};*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app

//ใช้ service auth ผ่าน named import
export const auth = getAuth(app)