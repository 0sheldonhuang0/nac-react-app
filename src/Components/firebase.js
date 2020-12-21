import firebase from "firebase/app";
require('firebase/analytics')
const EnvironmentFirebase = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyB4KpNt_TjCoaDx4iA4KP80Ompm4cc1ymk",
    authDomain: "fir-rtc-aff50.firebaseapp.com",
    projectId: "fir-rtc-aff50",
    storageBucket: "fir-rtc-aff50.appspot.com",
    messagingSenderId: "900710198529",
    appId: "1:900710198529:web:0ec5f5be44756ef2e9ff00",
    measurementId: "G-267VZRPMW4",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};
export default EnvironmentFirebase;
