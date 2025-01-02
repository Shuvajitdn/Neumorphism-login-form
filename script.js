function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulating login functionality
    alert(`Welcome, ${username}! You have logged in successfully.`);
}

document.getElementById('forgotPassword').addEventListener('click', function() {
    window.location.href = 'forgot-password.html';
});

document.getElementById('signUp').addEventListener('click', function() {
    window.location.href = 'signup.html';
});