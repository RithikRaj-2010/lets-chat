
var firebaseConfig = {
      apiKey: "AIzaSyDubQz6MMxPtnlDgvTjlP_LHAy01Z1pXEg",
      authDomain: "kwitter-3409e.firebaseapp.com",
      databaseURL: "https://kwitter-3409e-default-rtdb.firebaseio.com",
      projectId: "kwitter-3409e",
      storageBucket: "kwitter-3409e.appspot.com",
      messagingSenderId: "1046934642655",
      appId: "1:1046934642655:web:fcea204c647f2680576e6a"
    };
    
    
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("username");
    document.getElementById("Username").innerHTML="Welcome "+user_name+"!";
    function add_room(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
          
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name="+Room_names);
      row='<div class="room_name" id="'+Room_names+'" onclick="redirect_to_room_name(this.id)"># '+Room_names+'</div> <hr>';
      document.getElementById("output").innerHTML+=row;
      
      });});}
getData();
function redirect_to_room_name(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}