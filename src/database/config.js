// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import * as firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
  apiKey: "AIzaSyBU9sDB5ZHAVo5YhjIh51PqVeyJbx6Q3W4",
  authDomain: "photowall-6746b.firebaseapp.com",
  databaseURL: "https://photowall-6746b-default-rtdb.firebaseio.com",
  projectId: "photowall-6746b",
  storageBucket: "photowall-6746b.appspot.com",
  messagingSenderId: "877634816513",
  appId: "1:877634816513:web:6a7cff68b0cc6d1d088e00",
  measurementId: "G-9PSQQKE4CB"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(config)
const database = firebase.database()
export {database}