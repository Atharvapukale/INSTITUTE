document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    // Add code to handle form submission, such as sending the data to a server.
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add code to handle login functionality.
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});
