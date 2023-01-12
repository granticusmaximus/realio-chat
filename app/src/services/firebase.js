import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBbf5pxgFRiex9yh39QoKduu1Sa8DWf0ws",
  authDomain: "really-cha.firebaseapp.com",
  projectId: "really-cha",
  storageBucket: "really-cha.appspot.com",
  messagingSenderId: "1010986413786",
  appId: "1:1010986413786:web:028433db8fe97caa6b3fe3",
  measurementId: "G-VX0GJ247D3"
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();