function validateForm() {
    //Variables con las que se va a trabajar
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var emailError = document.getElementById('emailError');
    //expresion regular para validar correo
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación del correo electrónico
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'El formato del correo electrónico no es válido.';
        return false;
    } else {
        emailError.textContent = '';
    }


    // Redirigir solo si los campos están llenos y son válidos, se cambiaria con el aspecto de la base de datos a ver si coinciden con algun registro
    if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        window.location.href = 'inventario.html'; 
    }

    return false;
}