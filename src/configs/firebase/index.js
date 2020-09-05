import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

  const fireConfig = {
    // apiKey: "apikey_Firebase",
    // authDomain: "example-7f0c5.firebaseapp.com",
    // databaseURL: "https://example-7f0c5.firebaseio.com",
    // projectId: "example-7f0c5",
    // storageBucket: "example-7f0c5.appspot.com",
    // messagingSenderId: "asdasd132123",
    // appId: "1:876244665078:web:f68a84b67626305147a2d7",
    // measurementId: "G-asd"
  }

  firebase.initializeApp(fireConfig);


export default firebase;
