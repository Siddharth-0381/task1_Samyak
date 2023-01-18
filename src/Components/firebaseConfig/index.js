import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function startFirebase(){
const firebaseConfig = {
    apiKey: "AIzaSyAKQH2XMU6SNPy-0BcvjqDbPNPbiZZUHMQ",
    authDomain: "fir-react-4e241.firebaseapp.com",
    databaseURL: "https://fir-react-4e241-default-rtdb.firebaseio.com",
    projectId: "fir-react-4e241",
    storageBucket: "fir-react-4e241.appspot.com",
    messagingSenderId: "499886441331",
    appId: "1:499886441331:web:ede80dc3d2193667eafb06"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  return getDatabase(app);
}

export default startFirebase;