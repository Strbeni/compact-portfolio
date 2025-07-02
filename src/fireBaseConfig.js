// fireBaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqFQp1i9HceSYUjOpnDSPmrp-IafwP5Fo",
  authDomain: "bento-3dc2e.firebaseapp.com",
  projectId: "bento-3dc2e",
  storageBucket: "bento-3dc2e.appspot.com",
  messagingSenderId: "133190296847",
  appId: "1:133190296847:web:52902bb2042bdaf4bb8a7a",
  measurementId: "G-JEV59BSN1R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
