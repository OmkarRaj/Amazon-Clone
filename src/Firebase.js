import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCRbCicYo-Gqnm6RHsoseZ2rT8X8cNyBz0",
    authDomain: "clone-e74fb.firebaseapp.com",
    projectId: "clone-e74fb",
    storageBucket: "clone-e74fb.appspot.com",
    messagingSenderId: "1034857499095",
    appId: "1:1034857499095:web:fdc3af794eadc9dd8a6392",
    measurementId: "G-D261XKJB61"
  
});

const auth = firebase.auth();

export {auth};