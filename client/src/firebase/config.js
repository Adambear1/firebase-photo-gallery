import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBgb9K2ydAaL5O4jYTvovtb-H1UWQGHDAE",
  authDomain: "fir-photos-66240.firebaseapp.com",
  databaseURL: "https://fir-photos-66240.firebaseio.com",
  projectId: "fir-photos-66240",
  storageBucket: "fir-photos-66240.appspot.com",
  messagingSenderId: "481955847384",
  appId: "1:481955847384:web:3446154cbf89f35adecbad",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
