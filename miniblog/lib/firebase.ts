import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
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
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

/// Helper functions

export async function getUserWithUsername(username: string) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}
