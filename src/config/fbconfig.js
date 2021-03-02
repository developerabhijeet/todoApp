import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyA4ngJB9JPPPQFKglVmFC_CtKfWuhlmekY",
  authDomain: "evernote-2dc93.firebaseapp.com",
  databaseURL: "https://evernote-2dc93-default-rtdb.firebaseio.com",
  projectId: "evernote-2dc93",
  storageBucket: "evernote-2dc93.appspot.com",
  messagingSenderId: "86996026157",
  appId: "1:86996026157:web:6dc1fb165d776d89cc09a4"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  export default firebase;