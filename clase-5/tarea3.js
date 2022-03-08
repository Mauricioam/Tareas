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

function numeroFrecuente (){

}





const $calcular = document.querySelector("#calcular");

$calcular.onclick = function (){
const $promedio = document.querySelector("#promedio");
$promedio.innerText = $promedio.innerText + " " + obtenerPromedio();
const $maximo = document.querySelector("#numero-maximo");
$maximo.innerText = $maximo.innerText + " " + numeroMaximo();
const $minimo = document.querySelector("#numero-minimo");
$minimo.innerText = $minimo.innerText + " " + numeroMinimo();


return false;
}
