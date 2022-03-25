const $numeros = document.querySelectorAll(".numeros");


function obtenerPromedio(){
let suma = 0;
for (let i = 0; i < $numeros.length; i++) {
    suma = suma + Number($numeros[i].innerText)   
}
 let promedio = suma / $numeros.length;
 return promedio;
} 

function numeroMaximo (){
    let maximo = Number($numeros[0].innerText);
    for (let i = 0; i < $numeros.length; i++) {
            if (Number($numeros[i].innerText) > maximo) {
                maximo = Number($numeros[i].innerText);
            }    
          
    }
     return maximo;   
    }

function numeroMinimo (){
    let minimo = Number($numeros[0].innerText);
    for (let i = 0; i < $numeros.length; i++) {
        if (Number($numeros[i].innerText) < minimo){
            minimo = Number($numeros[i].innerText);
        }
      
        
    } return minimo;
}
// aca intente hacer un contador que me digas las veces q se repite el numero para luego determinar ese numero
// asociando al contador ,  
function numeroFrecuente (){
    let contador = 0;
    let frecuente =0;
    for (let i = 0; i < $numeros.length; i++){
            for (let l = 0; l < $numeros.length; l++) {
                if (Number($numeros[l].innerText === Number($numeros[i].innerText))) {
                    contador += 1;
                
                }
                
            }
    }

return ;
}





const $calcular = document.querySelector("#calcular");

$calcular.onclick = function (){
const $promedio = document.querySelector("#promedio");
$promedio.innerText = $promedio.innerText + " " + obtenerPromedio();
const $maximo = document.querySelector("#numero-maximo");
$maximo.innerText = $maximo.innerText + " " + numeroMaximo();
const $minimo = document.querySelector("#numero-minimo");
$minimo.innerText = $minimo.innerText + " " + numeroMinimo();
const $numeroFrecuente = document.querySelector("#numero-frecuente");
$numeroFrecuente.innerText= $numeroFrecuente.innerText + " " + numeroFrecuente();


return false;
}
