// import firebase from "firebase/compat/app"
// import "firebase/compat/auth"
// import "firebase/compat/firestore"

// import { getApp, getApps, initializeApp } from "./firebase/app";
// import { getFireStore } from "./firebase/firestore";
// import { getStorage } from "./firebase/storage";

// const firebaseConfig = {

// };

// const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

// const firestore = getFireStore(app);

// const storage = getStorage(app);

// export { firestore, storage, app };

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDvttSF6QCKmiSXv-og95pY6UdREUUQB5g",
  authDomain: "restaurant-app-20796.firebaseapp.com",
  databaseURL: "https://restaurant-app-20796-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-20796",
  storageBucket: "restaurant-app-20796.appspot.com",
  messagingSenderId: "114588466362",
  appId: "1:114588466362:web:0c1caec74da0b01a3a1683",
};

export const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
