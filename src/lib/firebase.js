import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
	apiKey: 'AIzaSyAXN_nQtpZ_f7uG-a6jgghz06Soptk8A0Q',
	authDomain: 'instagram-294dd.firebaseapp.com',
	projectId: 'instagram-294dd',
	storageBucket: 'instagram-294dd.appspot.com',
	messagingSenderId: '523955225466',
	appId: '1:523955225466:web:cf3e9e12fa1c0ad6f50cc3',
};
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
