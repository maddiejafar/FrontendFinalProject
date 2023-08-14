document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const usernameInput = document.getElementById("username-input");
      const emailInput = document.getElementById("email-input");
      const passwordInput = document.getElementById("password-input");
      const confirmInput = document.getElementById("confirm-input");
  
      const errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach((message) => message.remove());
  
      let isValid = true;
  
      if (!usernameInput.value.trim()) {
        isValid = false;
        showError(usernameInput, "Username is required.");
      }
  
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        isValid = false;
        showError(emailInput, "Please enter a valid email address.");
      }
  
      if (!passwordInput.value.trim()) {
        isValid = false;
        showError(passwordInput, "Password is required.");
      }
  
      if (passwordInput.value !== confirmInput.value) {
        isValid = false;
        showError(confirmInput, "Passwords do not match.");
      }
  
      if (isValid) {
        showSuccessToast();
      }
    });
  
    function showError(input, message) {
      const errorMessage = document.createElement("span");
      errorMessage.className = "error-message";
      errorMessage.textContent = message;
      input.parentNode.appendChild(errorMessage);
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function showSuccessToast() {
      const toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = "Successfully registered!";
      document.body.appendChild(toast);
  
      setTimeout(function () {
        toast.remove();
      }, 3000);
    }
  });
  