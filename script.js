document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const submitButton = document.getElementById("submit-button");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        alert("Form submitted!");
    });
});
