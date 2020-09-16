import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD9HM-VXegdIrNT6v7Fs9fMCgKvjY-WX_w",
    authDomain: "cloneamz-74746.firebaseapp.com",
    databaseURL: "https://cloneamz-74746.firebaseio.com",
    projectId: "cloneamz-74746",
    storageBucket: "cloneamz-74746.appspot.com",
    messagingSenderId: "677771521794",
    appId: "1:677771521794:web:8122fd1bf5d93b86741c1b"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();
  
  const auth=firebase.auth();

  export {db,auth};