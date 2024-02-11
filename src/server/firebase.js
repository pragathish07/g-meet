import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAQODho0wiUhhsMMFSjoTwjdde2eiUlvCM",
  authDomain: "video-chat-190f4.firebaseapp.com",
  projectId: "video-chat-190f4",
  storageBucket: "video-chat-190f4.appspot.com",
  messagingSenderId: "383546734947",
  appId: "1:383546734947:web:815529fac85d323da87b56"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
