const form = document.getElementById('form');
const username = document.getElementById('username-input');
const email = document.getElementById('email-input');
const password = document.getElementById('password-input');
const password2 = document.getElementById('confirm-input');
const toastContainer1 = document.querySelector('.ca-toast-container');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (validateInputs()) {
        clearInputs();
        showToastt('success', 'Account created successfully!');
    }
});

function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isValidEmaill(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    let isValid = true;

    if (usernameValue === '') {
        setError(username, 'Username is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmaill(emailValue)) {
        setError(email, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
        isValid = false;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords don't match");
        isValid = false;
    } else {
        setSuccess(password2);
    }

    return isValid;
}

function clearInputs() {
    username.value = '';
    email.value = '';
    password.value = '';
    password2.value = '';

    const inputControls = document.querySelectorAll('.input-container');
    inputControls.forEach(inputControl => {
        inputControl.classList.remove('error', 'success');
    });
}

function showToastt(type, message) {
    const toast = document.createElement('div');
    toast.classList.add(`ca-toast-${type}`);
    
    const toastMessage = document.createElement('div');
    toastMessage.innerText = message;
    toast.appendChild(toastMessage);
    
    const icon = document.createElement('img');
    icon.src = `./Images/Icons/toast-${type}.svg`;
    icon.alt = type;
    toast.appendChild(icon);

    toastContainer1.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}
