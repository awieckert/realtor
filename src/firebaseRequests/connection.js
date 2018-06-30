import firebase from 'firebase';
import constants from '../constants.js';

const firebaseApp = () => {
  return firebase.initializeApp(constants.firebaseConfig);
};

export default firebaseApp;
