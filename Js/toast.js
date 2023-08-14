const toastContainer = document.querySelector("#toast-container");
document.querySelector("#create-account").addEventListener("click", () => {
  let newToast = document.createElement("div");
  newToast.className = "toast toast-success";
  newToast.textContent = "Success! Confirmation email sent.";
  toastContainer.append(newToast);

  setTimeout(() => {
    newToast.remove();
  }, 10000);
});


document.querySelector("#subscribe").addEventListener("click", () => {
    let newToast = document.createElement("div");
    newToast.className = "toast toast-success";
    newToast.textContent = "Success! Please check your email.";
    toastContainer.append(newToast);
  
    setTimeout(() => {
      newToast.remove();
    }, 10000);
  });