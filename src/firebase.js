import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBUDnZw-FwYzi1XH0eddKcHaO8OiTCx31c",
    authDomain: "linkedin-clone-21bab.firebaseapp.com",
    projectId: "linkedin-clone-21bab",
    storageBucket: "linkedin-clone-21bab.appspot.com",
    messagingSenderId: "953500027346",
    appId: "1:953500027346:web:bc11fa64a77647e895a00b",
    measurementId: "G-YP35KPGBR5"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth}