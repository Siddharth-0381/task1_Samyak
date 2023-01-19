import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function startFirebase(){
const firebaseConfig = {
    apiKey: "AIzaSyA2oreemcnQwHgdEOxF_CWE3bsEvstQJss",
    authDomain: "forms-26251.firebaseapp.com",
    databaseURL: "https://forms-26251-default-rtdb.firebaseio.com",
    projectId: "forms-26251",
    storageBucket: "forms-26251.appspot.com",
    messagingSenderId: "444284315706",
    appId: "1:444284315706:web:3fb78eb45c51f88142ed03"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  return getDatabase(app);
}

export default startFirebase;