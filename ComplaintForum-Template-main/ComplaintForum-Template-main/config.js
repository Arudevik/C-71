import firebase from 'firebase'
require("@firebase/firestore")
import  "firebase/auth";

const firebaseConfig = {
  //Add configuration here
  apiKey: "AIzaSyB7yAbTa4q5fVJ6eE0eUOgz_g1mQKm_6CM",
  authDomain: "complaint-form-1ffe6.firebaseapp.com",
  projectId: "complaint-form-1ffe6",
  storageBucket: "complaint-form-1ffe6.appspot.com",
  messagingSenderId: "1063315482078",
  appId: "1:1063315482078:web:f0a94e42a59aa3a8bea94f"
  
 
};
if(!firebase.app.lenght) {


  firebase.initializeApp(firebaseConfig);
}
  export default firebase.firestore()

