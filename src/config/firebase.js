import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDdkRG1b0pyk6pRufX60vrGcejpKAeqjcg",
    authDomain: "propvr.firebaseapp.com",
    databaseURL: "https://realvr-eb62c.firebaseio.com",
    projectId: "realvr-eb62c",
    storageBucket: "realvr-eb62c.appspot.com",
    messagingSenderId: "172924419383",
    appId: "1:172924419383:web:36e814bf67356da9"
  };
const fire=  firebase.initializeApp(firebaseConfig);
export default fire;