function validateForm() {
    //Varibales con las que se va a trabajar junto con una variable de mensaje para cada caso de error
    let emailInput = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let nameInput = document.getElementById('nombre');
    let nameError = document.getElementById('nameError');
    let celInput = document.getElementById('cel');
    let celError = document.getElementById('celError');
    let fechaNacimientoInput = document.getElementById('fechaNacimiento');
    let fechaNacimientoError = document.getElementById('fechaNacimientoError');
    let generoInput = document.getElementById('genero');
    let generoError = document.getElementById('generoError');
    let contrasenaInput = document.getElementById('contrasena');
    let contrasenaError = document.getElementById('contrasenaError');
    //expresiones Regulares para la validacion
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //esctructura normal de un correo  
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{5,40}$/; //Solo acepta letras mayusculas y minusculas, de 5 a 40 caracteres
    const passRegex = /^(?=.*[A-Z]).{8,}$/; //Un minimo de 8 caracteres y una mayuscula
    const celRegex = /^\d{10}$/;
    // Puedes definir expresiones regulares para fecha de nacimiento y contraseña según tus requisitos.
    //validacion email
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'El formato del correo electrónico no es válido.';
        return false;
    } else {
        emailError.textContent = '';
    }
    //validacion nombre
    if (!nameRegex.test(nameInput.value)) {
        nameError.textContent = 'El nombre debe tener entre 5 y 40 caracteres.';
        return false;
    } else {
        nameError.textContent = '';
    }
    //Validacion Celular
    if (!celRegex.test(celInput.value)) {
        celError.textContent = 'El numero de celular debe tener 10 caracteres';
        return false;
    } else {
        celError.textContent = '';
    }

    // Validación de la fecha de nacimiento
    if (!fechaNacimientoInput.value) {
        fechaNacimientoError.textContent = 'Por favor, seleccione una fecha de nacimiento.';
        return false;
    } else {
        fechaNacimientoError.textContent = '';
    }

    // Validación del género
    if (!generoInput.value) {
        generoError.textContent = 'Por favor, seleccione su género.';
        return false;
    } else {
        generoError.textContent = '';
    }

    // Validación de la contraseña
    if (!passRegex.test(contrasenaInput.value)) {
        contrasenaError.textContent = 'La contraseña debe tener minimo 8 caracteres y una mayuscula';
        return false;
    } else {
        contrasenaError.textContent = '';
    }
    //PRegunta si esta seguro de seguir con el registro, de ser asi se envia a la pagina de inicio 
    if (confirm('¿Estás seguro de registrarte?')) {
        window.location.href = 'inicio.html';
    }

    return true;
}