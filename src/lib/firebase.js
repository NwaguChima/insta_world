import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAjP36R_igrR05Fkgb_rj_zLZb-5ieF4zQ",
  authDomain: "instaworld-5dba2.firebaseapp.com",
  projectId: "instaworld-5dba2",
  storageBucket: "instaworld-5dba2.appspot.com",
  messagingSenderId: "1006355019116",
  appId: "1:1006355019116:web:5fc5f7608b823f0a40af49",
};
// seedDatabase(dataBase);

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
