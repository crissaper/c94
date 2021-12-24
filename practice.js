var firebaseConfig = {
    apiKey: "AIzaSyCxalXnc1g4X1xE8ui4bfNKPPTS_5oPCW0",
    authDomain: "kwitter-162ef.firebaseapp.com",
    databaseURL: "https://kwitter-162ef-default-rtdb.firebaseio.com",
    projectId: "kwitter-162ef",
    storageBucket: "kwitter-162ef.appspot.com",
    messagingSenderId: "910013876778",
    appId: "1:910013876778:web:5ea0311c1f663bcb111153"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  
function addUser(){
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
    
});


}
//ADD YOUR FIREBASE LINKS