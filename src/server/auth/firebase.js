// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIDxOCDN_IFynE63rFgQHirdP25KenouQ",
  authDomain: "our-set.firebaseapp.com",
  projectId: "our-set",
  storageBucket: "our-set.appspot.com",
  messagingSenderId: "270958923618",
  appId: "1:270958923618:web:5d982b4dea4adbecf8e63b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

module.exports = auth ;