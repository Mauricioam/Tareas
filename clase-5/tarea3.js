const $calcular = document.querySelector("#calcular");
let arrayNumeros = [];
let $numeros = document.querySelectorAll(".numeros");

for (let i = 0; i < $numeros.length; i++){
    arrayNumeros.push(`${Number($numeros[i].innerText)}`)
};


    
    



$calcular.onclick = function(){
    let promedio = 0;
    let suma = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        suma = suma + Number(arrayNumeros[i]);
         
    }
    promedio = suma / arrayNumeros.length;

    const textoPromedio = document.querySelector("#promedio");

    textoPromedio.innerText = textoPromedio.innerText + " " + promedio
    

// estas funciones las encontre en internet.
   let NumeroMax = Math.max(...arrayNumeros)

   const textoNumeroMax = document.querySelector("#numero-grande");

    textoNumeroMax.innerText = textoNumeroMax.innerText + " " + NumeroMax;

    let NumeroMin = Math.min(...arrayNumeros);

    const textoNumeroMin = document.querySelector("#numero-pequeno");

    textoNumeroMin.innerText = textoNumeroMin.innerText + " " + NumeroMin;



  

    
    

 return false    
}