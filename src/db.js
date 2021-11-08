// Conveniently import this file anywhere to use db

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDFfSEpleoLcylZAk-H3c9kinVN5Z12dYo",
    authDomain: "prueba1-9c87e.firebaseapp.com",
    projectId: "prueba1-9c87e",
    storageBucket: "prueba1-9c87e.appspot.com",
    messagingSenderId: "92573683610",
    appId: "1:92573683610:web:20fa1df8ba9ff423973423"
  };

var app=firebase.initializeApp(firebaseConfig)

export const db = app.firestore()
export const storage = app.storage()


// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
