// JavaScript para la validación del formulario
(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                // Prevenir la recarga del formulario
                event.preventDefault();
                
                if (form.checkValidity() === false) {
                    event.stopPropagation();
                } else {
                    // Redirigir a la página deseada si el formulario es válido
                    window.location.href = "../index.html"; // Ajusta la ruta según sea necesario
                }  
                
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();