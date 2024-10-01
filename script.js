document.getElementById('signup-tab').addEventListener('click', function() {
    document.getElementById('signup-tab').classList.add('active');
    document.getElementById('register-tab').classList.remove('active');
});

document.getElementById('register-tab').addEventListener('click', function() {
    document.getElementById('register-tab').classList.add('active');
    document.getElementById('signup-tab').classList.remove('active');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle login logic here
    alert("Form submitted successfully!");
});
