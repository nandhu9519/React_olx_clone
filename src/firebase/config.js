import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDR1se8mx2NWF2Z9FbEwML7u3cdn3aMSLU",
    authDomain: "olxclone-26546.firebaseapp.com",
    projectId: "olxclone-26546",
    storageBucket: "olxclone-26546.appspot.com",
    messagingSenderId: "887685177986",
    appId: "1:887685177986:web:09b4e7e8c8dc33c96e0a9b",
    measurementId: "G-67R4EQ8X4M"
  };

export default firebase.initializeApp(firebaseConfig)