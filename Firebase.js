import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDjbRYPTQgznEW3KSpJcGqZJnr12tz44h8",
    authDomain: "blood-alcohol.firebaseapp.com",
    databaseURL: "https://blood-alcohol.firebaseio.com",
    projectId: "blood-alcohol",
    storageBucket: "",
    messagingSenderId: "690194146239"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig,"BloodAlcoholFirebase"); 
export default firebaseApp;