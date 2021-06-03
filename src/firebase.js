// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWGF3WOe3ro9tNgdADsSpigYSprAjpIM8",
  authDomain: "the-odin-project-6358b.firebaseapp.com",
  projectId: "the-odin-project-6358b",
  storageBucket: "the-odin-project-6358b.appspot.com",
  messagingSenderId: "62799390857",
  appId: "1:62799390857:web:7b1e3150764c47bb787e58",
  measurementId: "G-K9RFDD6DJ1",
  databaseUrl: "https://the-odin-project-6358b-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
// create ref from db object
const dbRefObject = database.ref("leaderboard");
// create ref for leaderboard 1
const pushScore = (lb, n, t) => {
  dbRefObject.child(lb).child(n).set({
    name: n,
    time: t,
  });
};

export { pushScore, dbRefObject };
