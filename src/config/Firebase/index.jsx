import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCx5WmFFHPpBjRft_t75IOH3weNjC_FCJY",
    authDomain: "sistem-belajar-online.firebaseapp.com",
    projectId: "sistem-belajar-online",
    storageBucket: "sistem-belajar-online.appspot.com",
    messagingSenderId: "728392384031",
    appId: "1:728392384031:web:9d8a66dd6b8592f0ac9f2a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase