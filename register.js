// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to store form data
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        let name = document.querySelector("input[type='text']").value;
        let age = document.querySelector("input[type='number']").value;
        let gender = document.querySelector("input[name='Gender']:checked")?.value;
        let email = document.querySelector("input[type='email']").value;
        let course = document.querySelector("select").value;

        if (!name || !age || !gender || !email || !course) {
            alert("Please fill in all fields!");
            return;
        }

        // Store data in Firestore
        db.collection("registrations").add({
            name: name,
            age: age,
            gender: gender,
            email: email,
            course: course,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            alert("Registration successful!");
            form.reset();
        })
        .catch(error => {
            console.error("Error storing data:", error);
        });
    });
});
