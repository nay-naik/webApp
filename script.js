document.getElementById('signup').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Implement your signup logic here (e.g., send data to a server).
    // You should consider security and server-side validation.
    alert(`User signed up with username: ${username}`);
});

document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;
    // Implement your login logic here (e.g., check against a database).
    // You should consider security and authentication mechanisms.
    alert(`User logged in with username: ${loginUsername}`);
});
