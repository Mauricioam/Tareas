// preguntar cuantos integrantes de la familia. En base a eso crear tanto inputs/labels.
// agregar botones para agregar inputs en caso de que tengan salario para calculo de salario anual.
let $integrantesFamilia = document.getElementById("integrantes-familia");

function crearInputsLabels ($integrantesFamilia){
    const nodoFormularioEdades =  document.getElementById("formulario-edades")
for (let i = 0; i < $integrantesFamilia; i++) {
    let crearLabel = document.createElement("label");
    crearLabel.textContent = `Edad intregante `
    let crearInput = document.createElement("input");
    crearInput.type = "number";
    crearInput.setAttribute("class","inputEdades");
    let espacio = document.createElement("br");

    
    crearInput.appendChild(crearLabel);
    nodoFormularioEdades.appendChild(espacio);
    nodoFormularioEdades.appendChild(crearLabel);
    nodoFormularioEdades.appendChild(crearInput);
    nodoFormularioEdades.reset();
   

    
    
}


}
let edadesValor = document.getElementsByClassName("inputEdades");
function promedioEdades (){
    let suma = 0;
    let promedio;
  
    for (let i = 0; i < edadesValor.length; i++) {
        suma = suma + Number(edadesValor[i].value)
        
    }
    promedio = suma / edadesValor.length
    return promedio ;

}
function mayorEdad (){
let numeroMaximo = Number(edadesValor[0].value);
for (let i = 0; i < edadesValor.length; i++) {
    if (Number(edadesValor[i].value) > numeroMaximo) {
        numeroMaximo = Number(edadesValor[i].value)
    }
    
    
}
return numeroMaximo;
}

function menorEdad(){
    let numeroMinimo = Number(edadesValor[0].value);
    for (let i = 0; i < edadesValor.length; i++) {
        if (Number(edadesValor[i].value < numeroMinimo)) {
            numeroMinimo = Number(edadesValor[i].value)
        }
        
        
    }
    return numeroMinimo;
}




const botonIngresar = document.querySelector("#ingresar");
const botonCalcular = document.querySelector("#calcular");
const promedio = document.getElementById("promedio");
const botonBorrarTodo = document.getElementById("boton-borrar_todo")

botonIngresar.onclick = function(){
   crearInputsLabels($integrantesFamilia.value);

    return false;
}
const $textoPromedio = document.getElementById("promedio-de-edad");
const $textoMayordeEdad = document.getElementById("mayor-de-edad");
const $textoMenordeEdad = document.getElementById("menor-de-edad");

botonCalcular.onclick = function(){
    $textoPromedio.textContent = $textoPromedio.textContent + " " + promedioEdades();
    $textoMayordeEdad.textContent = $textoMayordeEdad.textContent + " " + mayorEdad();
    $textoMenordeEdad.textContent = $textoMenordeEdad.textContent + " " + menorEdad();
    

return false;
}
botonBorrarTodo.onclick = function(){
    document.getElementById("formulario-edades").removeChild(document.getElementsByClassName("inputEdades"));
    return false;
}



//tarea 2da parte 
const botonAgregarSalarios = document.getElementById("agregar-inputs_salarios")
botonAgregarSalarios.onclick = function(){
    const nodoFormularioSalarios = document.getElementById("formulario-salarios")
    let crearLabelSalario = document.createElement("label");
    crearLabelSalario.textContent = `Ingrese salario anual `;
    let crearInputSalario = document.createElement("input");
    crearInputSalario.type="number";
    crearInputSalario.setAttribute = ("class", "inputSalario" )
    let crearBotonQuitar = document.createElement("input");
    crearBotonQuitar.type = "reset";
    crearBotonQuitar.value =  "Eliminar campo";

    crearInputSalario.appendChild(crearLabelSalario);
    nodoFormularioSalarios.appendChild(crearInputSalario);
    nodoFormularioSalarios.appendChild(crearBotonQuitar);
    console.log(crearBotonQuitar)
    return false;
}
