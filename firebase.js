
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyDPY7PlsEtMqA_xzsNjEMxwweTPtV_Y9j4",
    authDomain: "lmsproject26.firebaseapp.com",
    projectId: "lmsproject26",
    storageBucket: "lmsproject26.firebasestorage.app",
    messagingSenderId: "1030336843426",
    appId: "1:1030336843426:web:1371c8f9526eaf0eaa11fb",
    measurementId: "G-GEP927RCP4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
