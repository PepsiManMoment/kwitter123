//YOUR FIREBASE LINKS
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


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0    
  });

  document.getElementById("msg").value = "";
}

