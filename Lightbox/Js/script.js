// JavaScript para manejar el formulario y otras interacciones

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("#contact form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Previene el envío del formulario
        alert("Gracias por contactarnos. Te responderemos pronto.");
    });
});
