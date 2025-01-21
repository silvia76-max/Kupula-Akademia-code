// JavaScript para manejar el menú hamburguesa
const hamburgerButton = document.getElementById('hamburgerButton');
const menu = document.getElementById('menu');

hamburgerButton.addEventListener('click', () => {
  menu.classList.toggle('active'); // Alternamos la clase activa
});


// JavaScript para manejar el despliegue del formulario

const toggleButton = document.getElementById('toggleButton'); // Botón para mostrar/ocultar formulario
const formContainer = document.getElementById('formContainer'); // Contenedor del formulario

toggleButton.addEventListener('click', () => {
    // Verificar el estado de visibilidad del formulario
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block'; // Mostrar formulario
        toggleButton.textContent = 'Ocultar Formulario'; // Cambiar texto del botón
    } else {
        formContainer.style.display = 'none'; // Ocultar formulario
        toggleButton.textContent = 'Registrate'; // Cambiar texto del botón
    }
});

