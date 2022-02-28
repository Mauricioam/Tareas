 

    const $botonCalcular = document.querySelector("#calcular");

    $botonCalcular.onclick = function(){

    const  $salarioAnual = (document.querySelector("#salario-anual").value);
    const  $salarioMensual = $salarioAnual / 12;  
      
     (document.querySelector("#salario-mensual").value) = $salarioMensual;
    
     return false;
   
    
