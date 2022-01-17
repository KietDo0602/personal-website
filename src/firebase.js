import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBElvA3fMasSJac0z0aUJYojozIsP0qDmM",
    authDomain: "personal-website-e92f8.firebaseapp.com",
    projectId: "personal-website-e92f8",
    storageBucket: "personal-website-e92f8.appspot.com",
    messagingSenderId: "1026064552575",
    appId: "1:1026064552575:web:bccadd80074454d599a54a",
    measurementId: "G-SY0SD678T4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);