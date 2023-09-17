import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBRZD6gYWRR3NhAqqQhG4iEZT8HzdKjVag",
  authDomain: "your-laundry-e9a0d.firebaseapp.com",
  projectId: "your-laundry-e9a0d",
  storageBucket: "your-laundry-e9a0d.appspot.com",
  messagingSenderId: "207493842669",
  appId: "1:207493842669:web:b59950618ea7ab7830eee4",
  measurementId: "G-1K9KEEWYQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getFirestore()

export {auth, db}