import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

/* ne pas oublier d'adpater à votre propre base de données Firebase */
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBmwTAuuGTsk0zYgDqBSRua5ILnFN0Rt0k",
    authDomain: "chatbox25std.firebaseapp.com",
    databaseURL: "https://chatbox25std-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatbox25std",
    storageBucket: "chatbox25std.firebasestorage.app",
    messagingSenderId: "694761406877",
    appId: "1:694761406877:web:3fa65f323f95c5198c2f74"
})

const database = getDatabase(firebaseApp)
export default database