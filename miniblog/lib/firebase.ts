import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestorage';
import 'firebase/compat/storage';

const firebaseConfig = {
	apiKey: "AIzaSyDC8RQoGsTUUvkdt5fof70AkyS7cdPVKVM",
  authDomain: "mini-blog-2e8ea.firebaseapp.com",
  projectId: "mini-blog-2e8ea",
  storageBucket: "mini-blog-2e8ea.appspot.com",
  messagingSenderId: "559028407146",
  appId: "1:559028407146:web:0d86d8ad02111e15cc3313",
  measurementId: "G-VMVYCMXSTK",
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
