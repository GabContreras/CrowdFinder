document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario

    // Obtener los valores de usuario y contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

     // Muestra un mensaje de éxito
     alert('¡Se ha iniciado sesión con éxito!');

    // Redirigir a la página de inicio
    window.location.href = "Pages/inicio.html";
});
