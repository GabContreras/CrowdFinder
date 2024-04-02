document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que se envíe el formulario por defecto

        // Validación de campos obligatorios
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');


        // Verificar si todos los campos son válidos
        if (!form.checkValidity() || nameInput.value.trim() === '' || emailInput.value.trim() === '') {
            alert('Por favor completa todos los campos obligatorios.');
            return;
        }

         // Muestra un mensaje de éxito
         alert('¡La reserva ha sido enviada con éxito!');
         
        // Restablecer valores de los campos
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";

    
    });
});