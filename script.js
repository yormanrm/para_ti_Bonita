// Selecciona el botón y el contenedor del texto
const button = document.querySelector('.frase-button button');
const fraseTexto = document.querySelector('.frase-texto');

// Agrega un evento click al botón
button.addEventListener('click', () => {
    // Alterna la clase 'show' en el texto
    fraseTexto.classList.toggle('show');

    // Cambia el texto del botón dependiendo si el texto está visible o no
    if (fraseTexto.classList.contains('show')) {
        button.textContent = 'Ocultar';
    } else {
        button.textContent = 'Toca aquí';
    }
});