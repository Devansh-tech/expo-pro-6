import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB_rR7-EWYKBRExBaZzH_pXt-FL77LPDLY",
    authDomain: "news-letter-app.firebaseapp.com",
    databaseURL: "https://news-letter-app.firebaseio.com",
    projectId: "news-letter-app",
    storageBucket: "news-letter-app.appspot.com",
    messagingSenderId: "760597915414",
    appId: "1:760597915414:web:ca762ee7d5f70de997d237",
    measurementId: "G-X7CHW41BEX"
  };
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.database();
