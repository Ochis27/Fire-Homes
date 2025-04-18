// Import the functions you need from the SDKs you need
import {getApps, initializeApp} from "firebase/app";
import {Auth, getAuth} from "firebase/auth";
import {FirebaseStorage, getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6rm6zMM8Zrs5ZSX65dRtpBiLic8XqfYw",
  authDomain: "fire-homes-5be46.firebaseapp.com",
  projectId: "fire-homes-5be46",
  storageBucket: "fire-homes-5be46.firebasestorage.app",
  messagingSenderId: "651884796057",
  appId: "1:651884796057:web:c906940d8b746e72ef4008",
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
  storage = getStorage(app);
}

export {auth, storage};
