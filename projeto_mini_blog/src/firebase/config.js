import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnRGTw-oZbCJmW5JxchbizGjiXRXCT350",
  authDomain: "miniblog-4001d.firebaseapp.com",
  projectId: "miniblog-4001d",
  storageBucket: "miniblog-4001d.appspot.com",
  messagingSenderId: "135084688086",
  appId: "1:135084688086:web:99b7943a6145fcd35d7f77",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
