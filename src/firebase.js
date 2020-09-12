import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAuFpYEqmJ4xXV5kVbx0Pt_EqgGWctRWbk",
  authDomain: "clone-24712.firebaseapp.com",
  databaseURL: "https://clone-24712.firebaseio.com",
  projectId: "clone-24712",
  storageBucket: "clone-24712.appspot.com",
  messagingSenderId: "889621686471",
  appId: "1:889621686471:web:b63ea7f4add5559589f6e2",
  measurementId: "G-SBGBK88RM6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };