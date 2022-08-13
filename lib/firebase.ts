import firebase from 'firebase/compat/app'
import 'firebase/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDlJ4v9H9dGfbp3azLALGB_iKlT-vRtBeI",
    authDomain: "austin-hood-s-portfolio.firebaseapp.com",
    projectId: "austin-hood-s-portfolio",
    storageBucket: "austin-hood-s-portfolio.appspot.com",
    messagingSenderId: "107482554856",
    appId: "1:107482554856:web:eec963941a80ae6e09c45d",
    measurementId: "G-3XHE2DY0QJ"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
