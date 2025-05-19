// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Show an alert when the form is submitted
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        alert(`Thank you for registering, ${name}!\nConfirmation sent to: ${email}`);
    });

    // Highlight the name field when it gets focus
    const nameInput = document.getElementById("name");
    nameInput.addEventListener("focus", function () {
        nameInput.style.backgroundColor = "#e0f7fa";
    });

    nameInput.addEventListener("blur", function () {
        nameInput.style.backgroundColor = "";
    });
});
