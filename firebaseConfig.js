// IOS: 732352481699-jljje4rpjdkts5n38bk9okrtgnu934r3.apps.googleusercontent.com
// Android: 732352481699-0ubmgd56228e9nv4qg31pt0dc7j0gv23.apps.googleusercontent.com

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIS0JaKD6GuVck4GiV-GslGpQekOSBHNo",
  authDomain: "reunionesindama.firebaseapp.com",
  projectId: "reunionesindama",
  storageBucket: "reunionesindama.appspot.com",
  messagingSenderId: "52311084680",
  appId: "1:52311084680:web:f6b6a57c2ae1769a4cd93d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
