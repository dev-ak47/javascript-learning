let calculation = '';
    
    function updateCalculation(value){
      calculation += value;
      document.querySelector('.calculator-final').innerHTML = calculation;
    }

    function calculateResult(){
      try {
        calculation = eval(calculation);
        document.querySelector('.calculator-final').innerHTML = calculation;
      } catch(error){
        document.querySelector('.calculator-final').innerHTML = 'Error';
      }
    }

    function clearCalculation(){
      calculation = '';
      document.querySelector('.calculator-final').innerHTML = calculation;
    }