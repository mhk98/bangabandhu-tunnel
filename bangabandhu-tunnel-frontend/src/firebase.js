// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBXeRt9fquVuxNsgLHsNKsQAC3YJ2YBP9E',
  authDomain: 'projman-tech-ktp.firebaseapp.com',
  projectId: 'projman-tech-ktp',
  storageBucket: 'projman-tech-ktp.appspot.com',
  messagingSenderId: '312693488825',
  appId: '1:312693488825:web:d51797c3e1d1691e0faf68',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
