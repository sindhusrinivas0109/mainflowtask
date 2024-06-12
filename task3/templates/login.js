document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        var enteredUsername = document.querySelector("input[name='username']").value;
        var enteredPassword = document.querySelector("input[name='password']").value;

        // Retrieve stored user credentials from local storage
        var storedUsername = localStorage.getItem("username");
        var storedPassword = localStorage.getItem("password");

        // Check if entered credentials match stored credentials
        if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
            // Redirect to home page after successful login
            window.location.href = "home.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
