import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//FIREBASE

var config = {
  apiKey: "AIzaSyCpeOtbDXyjAjbJN8sjOxKAE8WeqZ-al1U",
  authDomain: "catpics-d106c.firebaseapp.com",
  databaseURL: "https://catpics-d106c.firebaseio.com",
  storageBucket: "<catpics-d106c.appspot.com",
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
