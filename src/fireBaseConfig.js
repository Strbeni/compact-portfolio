// fireBaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDqFQp1i9HceSYUjOpnDSPmrp-IafwP5Fo",
  authDomain: "bento-3dc2e.firebaseapp.com",
  projectId: "bento-3dc2e",
  storageBucket: "bento-3dc2e.firebasestorage.app",
  messagingSenderId: "133190296847",
  appId: "1:133190296847:web:52902bb2042bdaf4bb8a7a",
  measurementId: "G-JEV59BSN1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
console.log(db)

export { db };
