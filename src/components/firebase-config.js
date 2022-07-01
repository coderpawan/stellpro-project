import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBN9IIjTkeYiZyiSYqHgtVyqJqq6HaTlxY",
  authDomain: "demdeeauthentication.firebaseapp.com",
  projectId: "demdeeauthentication",
  storageBucket: "demdeeauthentication.appspot.com",
  messagingSenderId: "623108237135",
  appId: "1:623108237135:web:4498c74f33a276ec97073a",
  measurementId: "G-CSH8JSZG4S",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
