
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
const firebaseConfig = {
     apiKey: "AIzaSyBFvhjxdyKfqFbMABBWL2SD30E6NpW4G8M",
     authDomain: "silmarillion-f9e63.firebaseapp.com",
     projectId: "silmarillion-f9e63",
     storageBucket: "silmarillion-f9e63.appspot.com",
     messagingSenderId: "385975573275",
     appId: "1:385975573275:web:13d9b0614dbd26881211be",
     measurementId: "G-VZWFSDP9X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = collection(getFirestore(), "Users");
let user_data = [];
getDocs(db).then((snapshot) => {
     user_data = snapshot.docs.map((element) =>
          ({ id: element.id, ...element.data() }));
     console.log(user_data);
});

     
export {
     user_data
};