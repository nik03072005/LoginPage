const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const container = document.querySelector('.container');

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    const errorMessage = document.getElementById('signInErrorMessage');

    if (email === "user@example.com" && password === "password123") {
        alert("Sign In successful!");
        window.location.href = "homepage.html";
    } else {
        errorMessage.textContent = "Invalid email or password. Please try again.";
    }
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('signUpErrorMessage');

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
    } else {
        alert("Sign Up successful!");
        window.location.href = "homepage.html";
    }
});

function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // Redirect to homepage or handle authentication
    window.location.href = "homepage.html";
}

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Email: ${email}\nPassword: ${password}`);
    // Perform sign-in logic here
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert(`Full Name: ${fullName}\nEmail: ${email}`);
        // Perform sign-up logic here
    }
});

