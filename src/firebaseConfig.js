import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdAVmvdyyHAObePtbecKVIeLzhWROHzU6I",
  authDomain: "tienda-saludable-59659.firebaseapp.com",
  projectId: "tienda-saludable-59659",
  storageBucket: "tienda-saludable-59659.appspot.com",
  messagingSenderId: "464131585203",
  appId: "1:464131585203:web:ea94ac3660730ad3758ecc6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
