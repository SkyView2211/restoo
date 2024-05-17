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
        var name = document.getElementById('cust_name').value;
        var phone = document.getElementById('cust_phoneno').value;
        var email = document.getElementById('cust_email').value;
        var address = document.getElementById('cust_address').value;
        var cookingInstructions = document.getElementById('inputcook').value || '';
    
        // Validate required fields
    
        // Save customer details
        const customerData = {
            name: name,
            phone: phone,
            email: email,
            address: address,
            cookingInstructions: cookingInstructions,
        };
    
        // Save customer order data under 'customer_orders' with a fixed key
        database.ref('customer_order').set(customerData)
            .then(() => {
                console.log('Data saved successfully');
            })
            .catch(error => {
                console.error('Error saving data:', error);
                alert('An error occurred while saving data.');
            });
    }
        
    
    
      // Event listeners for input fields
      document.getElementById('cust_name').addEventListener('input', save);
      document.getElementById('cust_phoneno').addEventListener('input', save);
      document.getElementById('cust_email').addEventListener('input', save);
      document.getElementById('cust_address').addEventListener('input', save);
      document.getElementById('inputcook').addEventListener('input', save);