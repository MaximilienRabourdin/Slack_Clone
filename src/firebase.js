// Intrégration de firebase
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCx3Rf6bpmidOy1yjv6cUVxH6CHGST2KyI",
  authDomain: "slack-clone-fa7da.firebaseapp.com",
  projectId: "slack-clone-fa7da",
  storageBucket: "slack-clone-fa7da.appspot.com",
  messagingSenderId: "5325137386",
  appId: "1:5325137386:web:a68540f80d1df2e957fe93",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
