const subscribeButtons = document.querySelectorAll('.subscribe-btn');
const subscribeInputs = document.querySelectorAll('.subscribe-input');
const toastContainers = document.querySelectorAll('.toast-container');

subscribeButtons.forEach((subscribeButton, index) => {
    subscribeButton.addEventListener('click', () => {
        const email = subscribeInputs[index].value.trim();
        const toastContainer = toastContainers[index];

        if (isValidEmail(email)) {
            showToast('success', 'Successfully subscribed!', toastContainer);
            subscribeInputs[index].value = '';
        } else {
            showToast('error', 'Invalid email address.', toastContainer);
        }
    });
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showToast(type, message, container) {
    const toast = document.createElement('div');
    toast.classList.add(`toast-${type}`);

    const toastMessage = document.createElement('div');
    toastMessage.innerText = message;
    toast.appendChild(toastMessage);

    const icon = document.createElement('img');
    icon.src = `./Images/Icons/toast-${type}.svg`;
    icon.alt = type;
    toast.appendChild(icon);

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}







  