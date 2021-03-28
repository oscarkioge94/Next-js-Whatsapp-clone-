// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBJjI-E1wkfCdLK4P_Lx4MQhmDio8RQY_g",
    authDomain: "next-js-whatsapp.firebaseapp.com",
    projectId: "next-js-whatsapp",
    storageBucket: "next-js-whatsapp.appspot.com",
    messagingSenderId: "829706705294",
    appId: "1:829706705294:web:0817a09351608e91ec2cdf",
    measurementId: "G-X7EPKJR5T3"
  };

  const app =! firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();