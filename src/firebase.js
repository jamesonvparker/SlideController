import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfHUbVW8mxLbcVkMl_eMcfAccFNsAV-j4",
  authDomain: "slidecontroller-43511.firebaseapp.com",
  projectId: "slidecontroller-43511",
  storageBucket: "slidecontroller-43511.appspot.com",
  messagingSenderId: "344633352168",
  appId: "1:344633352168:web:1e83090e57441e17098e5d",
  measurementId: "G-PR59J14DLG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      console.log(result);

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const db = getFirestore(app);

// const analytics = getAnalytics(app);
