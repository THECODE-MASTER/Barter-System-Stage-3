import firebase from 'firebase';
require("@firebase/firestore");

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyABFda74JoId9zZhgyHIsFkay_vAA-GGJg",
    authDomain: "barter-system-101.firebaseapp.com",
    databaseURL: "https://barter-system-101-default-rtdb.firebaseio.com",
    projectId: "barter-system-101",
    storageBucket: "barter-system-101.appspot.com",
    messagingSenderId: "319144364913",
    appId: "1:319144364913:web:e64b5c239cd19a9d58c4d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();