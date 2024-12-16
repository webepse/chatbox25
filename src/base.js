import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/* ne pas oublier d'adpater à votre propre base de données Firebase */
const firebaseConfig = {
    apiKey: "AIzaSyBmwTAuuGTsk0zYgDqBSRua5ILnFN0Rt0k",
    authDomain: "chatbox25std.firebaseapp.com",
    projectId: "chatbox25std",
    storageBucket: "chatbox25std.firebasestorage.app",
    messagingSenderId: "694761406877",
    appId: "1:694761406877:web:3fa65f323f95c5198c2f74"
}

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
export default firestore