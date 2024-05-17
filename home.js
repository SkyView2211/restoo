// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyCn0uMuq_BEdFiPQIFX05x2fSFDl2DuhOo",
    authDomain: "menu-f8f49.firebaseapp.com",
    databaseURL: "https://menu-f8f49-default-rtdb.firebaseio.com",
    projectId: "menu-f8f49",
    storageBucket: "menu-f8f49.appspot.com",
    messagingSenderId: "509062402871",
    appId: "1:509062402871:web:bdea96cf2e0984743f80b2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    // Set database variable
    var database = firebase.database()
    
    function save() {
      var name = document.getElementById('cust_name').value
      var mail = document.getElementById('cust_mail').value
      var msg = document.getElementById('cust_msg').value
     
    
      database.ref('suggestions/' + name).set({
        name : name,
        mail : mail,
        msg : msg,
      })
    
      alert('Saved')
    }
    
  
  