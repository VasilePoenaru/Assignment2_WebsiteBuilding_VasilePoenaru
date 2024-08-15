document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous messages
    const messageContainer = document.getElementById('message-container');
    messageContainer.innerHTML = '';

    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Elements
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameIcon = usernameInput.nextElementSibling;
    const passwordIcon = passwordInput.nextElementSibling;

    // Reset styles and icons
    usernameInput.classList.remove('error-input', 'success-input');
    passwordInput.classList.remove('error-input', 'success-input');
    usernameIcon.className = 'icon';
    passwordIcon.className = 'icon';

    let errors = [];
    let isValid = true;

    // Validate username
    if (!username) {
        errors.push('Please enter username.');
        usernameInput.classList.add('error-input');
        usernameIcon.classList.add('fas', 'fa-times-circle', 'error-icon');
        isValid = false;
    } else if (username !== 'new_user') {
        errors.push('Please enter a valid username.');
        usernameInput.classList.add('error-input');
        usernameIcon.classList.add('fas', 'fa-times-circle', 'error-icon');
        isValid = false;
    } else {
        usernameInput.classList.add('success-input');
        usernameIcon.classList.add('fas', 'fa-check-circle', 'success-icon');
    }

    // Validate password
    if (!password) {
        errors.push('Please enter password.');
        passwordInput.classList.add('error-input');
        passwordIcon.classList.add('fas', 'fa-times-circle', 'error-icon');
        isValid = false;
    } else if (password !== '123456789') {
        errors.push('Please enter a valid password.');
        passwordInput.classList.add('error-input');
        passwordIcon.classList.add('fas', 'fa-times-circle', 'error-icon');
        isValid = false;
    } else {
        passwordInput.classList.add('success-input');
        passwordIcon.classList.add('fas', 'fa-check-circle', 'success-icon');
    }

    // Display errors or success message
    if (!isValid) {
        errors.forEach(error => {
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            errorMessage.textContent = error;
            messageContainer.appendChild(errorMessage);
        });
    } else {
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = 'Successful login!';
        messageContainer.appendChild(successMessage);
    }
});
