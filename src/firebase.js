import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBeH7Bh9zASRkhaQ82_cy973VNVv8Pu0Vw",
  authDomain: "todo-app-321a2.firebaseapp.com",
  projectId: "todo-app-321a2",
  storageBucket: "todo-app-321a2.appspot.com",
  messagingSenderId: "447822790128",
  appId: "1:447822790128:web:b08f6296410db3cba33135",
  measurementId: "G-6HM6PVVM2K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

