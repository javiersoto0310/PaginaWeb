document.addEventListener("DOMContentLoaded", function() {
    // Código para el menú de navegación
    const hamburguesa = document.querySelector(".hamburguesa");
    const menuNavegacion = document.querySelector(".menu-navegacion");

    hamburguesa.addEventListener("click", () => {
        menuNavegacion.classList.toggle("desplegar");
    });

    window.addEventListener("click", (e) => {
        if (menuNavegacion.classList.contains("desplegar") &&
            e.target !== menuNavegacion && e.target !== hamburguesa) {
            menuNavegacion.classList.toggle("desplegar");
        }
    });

    // Código para la validación del formulario
    document.querySelector('form').addEventListener('submit', function(e) {
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const horario = document.getElementById('horario').value.trim();
        const motivo = document.getElementById('motivo').value.trim();

        // Validación de que el nombre sea un string
        const nombreRegex = /^[a-zA-Z\s]+$/;
        if (!nombre || !nombreRegex.test(nombre)) {
            e.preventDefault();
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, ingrese un nombre válido (solo letras y espacios).'
            });
            return;
        }

        // Validación de que el teléfono sea un número entero
        const telefonoRegex = /^[0-9]+$/;
        if (!telefono || !telefonoRegex.test(telefono)) {
            e.preventDefault();
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, ingrese un número de teléfono válido (solo números).'
            });
            return;
        }

        // Validación del correo electrónico
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correo || !correoRegex.test(correo)) {
            e.preventDefault();
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, ingrese un correo electrónico válido.'
            });
            return;
        }

        // Validación de campos vacíos
        if (!horario || !motivo) {
            e.preventDefault();
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, complete todos los campos.'
            });
            return;
        }

        // Si todas las validaciones pasan, redirigir a la página de agradecimiento
        e.preventDefault();
        window.location.href = "mensaje.html";
    });
});









