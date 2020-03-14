import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDRUk5m3bbQ-7sDejjLuitDXUNnfDNSDpQ',
  authDomain: 'bgstore-db.firebaseapp.com',
  databaseURL: 'https://bgstore-db.firebaseio.com',
  projectId: 'bgstore-db',
  storageBucket: 'bgstore-db.appspot.com',
  messagingSenderId: '410464343161',
  appId: '1:410464343161:web:7338a05155ba8116ecb0a8',
  measurementId: 'G-MLVY86FR70',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
