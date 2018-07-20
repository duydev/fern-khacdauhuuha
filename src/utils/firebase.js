import * as firebase from 'firebase'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${
    process.env.REACT_APP_FIREBASE_PROJECT_ID
  }.firebaseio.com`,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSENGER_SENDER_ID
}

firebase.initializeApp(config)

const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots: true })
export const db = firestore
