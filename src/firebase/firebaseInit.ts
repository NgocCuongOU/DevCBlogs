import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCn6FcDCMmtJmBh17T1-h_03d7a211qiYI",
  authDomain: "fireblogsdevc.firebaseapp.com",
  projectId: "fireblogsdevc",
  storageBucket: "fireblogsdevc.appspot.com",
  messagingSenderId: "1079391793549",
  appId: "1:1079391793549:web:c2d16991ca1d0693460dc4",
  measurementId: "G-HML3DZFLF2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()