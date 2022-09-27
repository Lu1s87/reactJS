import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeI2MBI56VyZ61UzAE_kSbx95aX7uuVg8",
  authDomain: "coderhouse-ecommerce-b06c8.firebaseapp.com",
  projectId: "coderhouse-ecommerce-b06c8",
  storageBucket: "coderhouse-ecommerce-b06c8.appspot.com",
  messagingSenderId: "685725741693",
  appId: "1:685725741693:web:edd403ab3d4b82cc1af714"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);
