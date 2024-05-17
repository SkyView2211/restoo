document.addEventListener("DOMContentLoaded", function() {
  const firebaseConfig = {
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
    const database = firebase.database();

    const registrationForm = document.getElementById("registrationForm");

    if (registrationForm) {
        registrationForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;
            const time = document.getElementById("time").value;
            const date = document.getElementById("date").value;

            // Store the data in Firebase
            const userData = {
                name: name,
                phone: phone,
                email: email,
                time: time,
                date: date
            };

            // Push the data to Firebase
            const usersRef = database.ref(('reservation/') + (name));
            usersRef.push(userData)
                .then(function() {
                    console.log('User registration successful');
                    alert('User registration successful');
                })
                .catch(function(error) {
                    console.error('Error registering user: ', error);
                    alert('An error occurred while registering user');
                });

            // Reset form fields after submission (optional)
            registrationForm.reset();
        });
    } else {
        console.error("Registration form element not found.");
    }
});
