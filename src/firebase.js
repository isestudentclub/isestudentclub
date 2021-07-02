import firebase from 'firebase/app'
require('firebase/analytics')


var firebaseConfig = {
  apiKey: "AIzaSyAelflmRvd13OCJjD6QE86Vkqygdt2RErU",
  authDomain: "isesc-e299a.firebaseapp.com",
  projectId: "isesc-e299a",
  storageBucket: "isesc-e299a.appspot.com",
  messagingSenderId: "390745618119",
  appId: "1:390745618119:web:970f741ead82d84ffd30e2",
  measurementId: "G-YGKLSQ12WD"
};
firebase.initializeApp(firebaseConfig);
  

export default firebase;  