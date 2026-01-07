 let display=document.querySelector('.js-display')
    let calculation = localStorage.getItem('calculation') || '';
    function updateCalculation(numbers){
      calculation += numbers;
     display.innerHTML=(calculation);
      localStorage.setItem('calculation',calculation );

    }
   