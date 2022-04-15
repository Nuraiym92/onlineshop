import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup ,signOut} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCnMZrXE3-0YbNchEsM8O1joiQo9uGDp-U",
  authDomain: "online-shop-d216b.firebaseapp.com",
  projectId: "online-shop-d216b",
  storageBucket: "online-shop-d216b.appspot.com",
  messagingSenderId: "235657233305",
  appId: "1:235657233305:web:607ce3216dee34e2248908"
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

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
   
};

export const logout = () => {
  signOut(auth);
};