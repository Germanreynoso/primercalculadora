document.addEventListener('DOMContentLoaded', function () {
    // Variables globales
    let expression = '';
    let display = document.querySelector('.total');
  
    // Funciones
    function appendToDisplay(value) {
      expression += value;
      display.textContent = expression;
    }
  
    function calculate() {
      try {
        expression = eval(expression);
        display.textContent = expression;
      } catch (error) {
        display.textContent = 'Error';
      }
    }
  
    function clearDisplay() {
      expression = '';
      display.textContent = '0';
    }
  
    // Agregar eventos a los botones
    document.querySelectorAll('.item').forEach(function (button) {
      button.addEventListener('click', function () {
        if (button.textContent === '=') {
          calculate();
        } else if (button.textContent === 'C') {
          clearDisplay();
        } else {
          appendToDisplay(button.textContent);
        }
      });
    });
  });
  