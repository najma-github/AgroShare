// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNt0sZwE-anzM0XePRfTtKSSDd7sb5vxg",
  authDomain: "authentication-e01e3.firebaseapp.com",
  projectId: "authentication-e01e3",
  storageBucket: "authentication-e01e3.appspot.com",
  messagingSenderId: "1027205635402",
  appId: "1:1027205635402:web:331c915d866dc7fb77b5b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Input
const email = document.getElementById('farmerRegEmail').value;
const password = document.getElementById('farmerRegPassword').value;

//submit button
const submit = document.getElementById('submit');
submit.addEventListener("click",function(event){
    event.preventDefault()
    alert(5)
})
