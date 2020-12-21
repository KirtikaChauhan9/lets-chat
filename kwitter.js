 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBxSderMlZo-_ewsybvvPlsFEvWt_z9qq0",
    authDomain: "chatproject-cae2f.firebaseapp.com",
    databaseURL: "https://chatproject-cae2f-default-rtdb.firebaseio.com",
    projectId: "chatproject-cae2f",
    storageBucket: "chatproject-cae2f.appspot.com",
    messagingSenderId: "303770078270",
    appId: "1:303770078270:web:658a6c1f4a15a5ae4f956f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   
  
    function adduser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding data"
      });
      window.location="kwitter_room.html";
  }