import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBhPdit38CKPZc5-BxmrW-m2RPt8oXmhU",
  authDomain: "photo-gala-8f771.firebaseapp.com",
  projectId: "photo-gala-8f771",
  storageBucket: "photo-gala-8f771.appspot.com",
  messagingSenderId: "34999808260",
  appId: "1:34999808260:web:6b730a9836244779a1a051",
  measurementId: "G-HESZPW0FK6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = firebase.getAnalytics(app);
const projectStorage = firebase.storage();
const fireStorage = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {
  projectStorage,
  fireStorage,
  timeStamp,
}
