importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyD47cpoGUMd1Lfx__qxe7csMtINbGtH8EQ",
  authDomain: "proyectopepetest.firebaseapp.com",
  projectId: "proyectopepetest",
  storageBucket: "proyectopepetest.appspot.com",
  messagingSenderId: "73339312817",
  appId: "1:73339312817:web:8b20120ce391fb4b7aa090",
  measurementId: "G-7N0WKPVPBL"
});
const messaging = firebase.messaging();
