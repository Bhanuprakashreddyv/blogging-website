import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC_E0-6nE9Q9MinRPOZ4rhEdnj6O4AiPVs",
  authDomain: "blogger-web-ebd77.firebaseapp.com",
  projectId: "blogger-web-ebd77",
  storageBucket: "blogger-web-ebd77.appspot.com",
  messagingSenderId: "37703432791",
  appId: "1:37703432791:web:0f320a8b4668ec318dc112"
};

const app = initializeApp(firebaseConfig);


//google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
    let user = null;
    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}