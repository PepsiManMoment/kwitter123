
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyAkaA2Wej5OTvLK3UWs69hzKwCQxKLeJdA",
  authDomain: "kwitter-29f79.firebaseapp.com",
  projectId: "kwitter-29f79",
  storageBucket: "kwitter-29f79.appspot.com",
  messagingSenderId: "552233855767",
  appId: "1:552233855767:web:fd018b2a035e994ebd2552",
  measurementId: "G-P6S4TYGDKT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHtml
Room_names = childKey;
console.log ("Room Name - " + Room_names);
row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;

});}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
