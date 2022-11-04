import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCSacwqC_FzazYvUMBITZRDzsiLA-CCtzU",
    authDomain: "olx-clone-da313.firebaseapp.com",
    projectId: "olx-clone-da313",
    storageBucket: "olx-clone-da313.appspot.com",
    messagingSenderId: "274668225540",
    appId: "1:274668225540:web:7e791512b7c3fe083fe151",
    measurementId: "G-EVNT5NE6M6"
  };
 export default firebase.initializeApp(firebaseConfig)
