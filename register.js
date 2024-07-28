// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

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

firebase.initializeApp(firebaseConfig);

// Handle Farmer Registration
document.getElementById('farmerRegisterForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('farmerRegEmail').value;
  const password = document.getElementById('farmerRegPassword').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Farmer Registered Successfully!');
      document.getElementById('farmerRegisterForm').reset();
    })
    .catch((error) => {
      alert('Error: ' + error.message);
    });
});

// Handle Farmer Login
document.getElementById('farmerLoginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('farmer-email').value;
  const password = document.getElementById('farmer-password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Farmer Logged In Successfully!');
      document.getElementById('farmerLoginForm').reset();
    })
    .catch((error) => {
      alert('Error: ' + error.message);
    });
});

// Handle Elderly Care Home Registration
document.getElementById('elderlyRegisterForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('elderly-reg-email').value;
  const password = document.getElementById('elderly-reg-password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Elderly Care Home Registered Successfully!');
      document.getElementById('elderlyRegisterForm').reset();
    })
    .catch((error) => {
      alert('Error: ' + error.message);
    });
});

// Handle Elderly Care Home Login
document.getElementById('elderlyLoginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('elderly-email').value;
  const password = document.getElementById('elderly-password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Elderly Care Home Logged In Successfully!');
      document.getElementById('elderlyLoginForm').reset();
    })
    .catch((error) => {
      alert('Error: ' + error.message);
    });
});

// Handle Password Reset
document.getElementById('forgotPasswordModal').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('reset-email').value;

  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      alert('Password Reset Email Sent!');
      document.getElementById('forgotPasswordModal').reset();
    })
    .catch((error) => {
      alert('Error: ' + error.message);
    });
});