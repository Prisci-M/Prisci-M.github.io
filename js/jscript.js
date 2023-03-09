const buttons = document.querySelectorAll('.botonImportante');
const textElements = document.querySelectorAll('.infoExtra');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const textElement = textElements[index];
        textElement.classList.toggle('infoExtraVisible');
  });
});