import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyDrrUYRW98rVk6gcHT1vlNBLKrFItV0NkE",
    authDomain: "reactnativepos.firebaseapp.com",
    databaseURL: "https://reactnativepos.firebaseio.com",
    projectId: "reactnativepos",
    storageBucket: "reactnativepos.appspot.com",
    messagingSenderId: "220625332616",
    appId: "1:220625332616:web:0d2a09cfb1f1d14d4f323d",
    measurementId: "G-Q30LBNEXXG"

}

firebase.initializeApp(config)

export default firebase