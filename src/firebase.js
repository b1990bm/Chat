import firebase from 'firebase/app';
import "firebase/auth";

export const auth =firebase.initializeApp( {
    apiKey: "AIzaSyAv3cp9iNIfaOk9lQDvKIYoRV3_Bw_n2Gc",
    authDomain: "chat-6995e.firebaseapp.com",
    projectId: "chat-6995e",
    storageBucket: "chat-6995e.appspot.com",
    messagingSenderId: "218297658160",
    appId: "1:218297658160:web:8ec8bf7e97864ce3c776f5"
  }).auth();