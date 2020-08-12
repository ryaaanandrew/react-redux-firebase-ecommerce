import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () =>  auth.signInWithPopup(GoogleProvider);
export const handleUserProfile = async (userAuth, data) => {
    if(!userAuth) return;
    const { uid, displayName, email } = userAuth;
    const timeStamp = new Date();

    const userRef = firestore.doc(`users/${uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        try {
            await userRef.set({
                displayName: displayName,
                email: email,
                createDate: timeStamp,
                ...data
            });
        } catch(err) {
            console.log('handleUserProfile Error: ', err);
        };
    };

    return userRef;
};