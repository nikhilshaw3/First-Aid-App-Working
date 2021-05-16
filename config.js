import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCywgFDGdfjd_mhBwFHt_01765RPZysXF0",
  authDomain: "first-aid-c9c78.firebaseapp.com",
  projectId: "first-aid-c9c78",
  storageBucket: "first-aid-c9c78.appspot.com",
  messagingSenderId: "329835139594",
  appId: "1:329835139594:web:6e2a30820313d802d205f3",
  measurementId: "G-7E2BTH36BH"
};

// Initialize Firebase
if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig)
}

export default firebase.firestore();