// preguntar cuantos integrantes de la familia. En base a eso crear tanto inputs/labels.
// agregar botones para agregar inputs en caso de que tengan salario para calculo de salario anual.

function crearIntegrantes($integrantesFamilia) {
  const nodoFormularioEdades = document.getElementById("formulario-edades");
  for (let i = 0; i < $integrantesFamilia; i++) {
    // los inputs creados si no van a ser usados nuevamente declarar como const y no como let.
    const labeldeFormularioEdades = document.createElement("label");
    labeldeFormularioEdades.textContent = "Edad integrante";
    const inputdeFormularioEdades = document.createElement("input");
    inputdeFormularioEdades.type = "number";
    inputdeFormularioEdades.setAttribute("class", "edad");
    const espacio = document.createElement("br");

    inputdeFormularioEdades.appendChild(labeldeFormularioEdades);
    nodoFormularioEdades.appendChild(espacio);
    nodoFormularioEdades.appendChild(labeldeFormularioEdades);
    nodoFormularioEdades.appendChild(inputdeFormularioEdades);
  }
  /*correciones de fabricio y tener en cuenta para proximos proyectos:*/
}

//1- las funciones se declaran en verbo infinitivo .
function calcularpromedioEdades(arrayEdades) {
  let suma = 0;
  let promedio;
  for (let i = 0; i < arrayEdades.length; i++) {
    suma = suma + arrayEdades;
  }
  promedio = suma / arrayEdades.length;
  return promedio;
}
// la funcion esta mal planteada ya que depende de una variable global y debe tomar un array de NUMEROS, no de
// elementos , corregir.
function determinarmayorEdad() {
  let numeroMaximo = Number(edadesValor[0].value);
  for (let i = 0; i < edadesValor.length; i++) {
    if (Number(edadesValor[i].value) > numeroMaximo) {
      numeroMaximo = Number(edadesValor[i].value);
    }
  }
  return numeroMaximo;
}

function determinarmenorEdad() {
  let numeroMinimo = Number(edadesValor[0].value);
  for (let i = 0; i < edadesValor.length; i++) {
    if (Number(edadesValor[i].value < numeroMinimo)) {
      numeroMinimo = Number(edadesValor[i].value);
    }
  }
  return numeroMinimo;
}

// problema de consistencia o usar query o usar getelementbyid, buscar mejores nombres para las variables (ej borrar-todo)
const botonIngresar = document.querySelector("#ingresar");
const botonCalcular = document.querySelector("#calcular");
const promedio = document.getElementById("promedio");
const botonBorrarTodo = document.getElementById("boton-borrar_todo");
// revisar esto la variable declarada $integrantesFamilia y el parametro usado en la funcion
//no son la misma cosa.
//crearInputsLabels es un mal nombre , mejor reemplazar por lo que es , crearIntegrantes
botonIngresar.onclick = function () {
  const $integrantesFamilia = document.getElementById(
    "integrantes-familia"
  ).value;
  crearIntegrantes($integrantesFamilia);

  return false;
};
const $textoPromedio = document.getElementById("promedio-de-edad");
const $textoMayordeEdad = document.getElementById("mayor-de-edad");
const $textoMenordeEdad = document.getElementById("menor-de-edad");

botonCalcular.onclick = function () {
  let inputdeEdades = document.getElementsByClassName("edad");
  let arrayEdades = [];
  for (let i = 0; i < inputdeEdades.length; i++) {
    arrayEdades.push(Number(inputdeEdades[i].value));
  }

  $textoPromedio.textContent =
    $textoPromedio.textContent + " " + calcularpromedioEdades(arrayEdades); /*
  $textoMayordeEdad.textContent =
    $textoMayordeEdad.textContent + " " + mayorEdad();
  $textoMenordeEdad.textContent =
    $textoMenordeEdad.textContent + " " + menorEdad();
*/
  return false;
};
// removeChild tomo solo UN elemento por vez , aca le estoy pasando un listado de elementos , no va a funcionar nunca
// usar for y ejecutar el removeChild  por cada elemento del listado.

//tarea 2da parte
const botonAgregarSalarios = document.getElementById("agregar-inputs_salarios");
botonAgregarSalarios.onclick = function () {
  const nodoFormularioSalarios = document.getElementById("formulario-salarios");
  let crearLabelSalario = document.createElement("label");
  crearLabelSalario.textContent = `Ingrese salario anual `;
  let crearInputSalario = document.createElement("input");
  crearInputSalario.type = "number";
  crearInputSalario.id = "inputSalario";
  crearInputSalario.placeholder = "Ingrese salario anual";
  let crearBotonEliminar = document.createElement("input");
  crearBotonEliminar.type = "button";
  crearBotonEliminar.value = "Eliminar campo";
  crearBotonEliminar.id = "botonEliminarSalario";

  nodoFormularioSalarios.appendChild(crearInputSalario);
  crearInputSalario.appendChild(crearLabelSalario);
  nodoFormularioSalarios.appendChild(crearBotonEliminar);

  return false;
};
let salariosValor = document.getElementById("inputSalario");
console.log(salariosValor);
function promedioSalarioAnual() {
  let suma = 0;
  for (let i = 0; i < salariosValor.length; i++) {
    suma = suma + Number(salariosValor[i].textContent);
  }
  let promedio = suma / salariosValor.length;
  return promedio;
}
function promedioSalarioMensual() {
  let suma = 0;
  for (let i = 0; i < salariosValor.length; i++) {
    suma = suma + Number(salariosValor[i].textContent);
  }
  let promedioMensual = suma / 12;
  return promedioMensual;
}
function menorSalarioAnual() {
  let salarioMinimo = Number(salariosValor[0].textContent);
  for (let i = 0; i < salariosValor.length; i++) {
    if (Number(salarioMinimo[i].textContent) < salarioMinimo) {
      salarioMinimo = Number(salarioMinimo[i].textContent);
    }
    return salarioMinimo;
  }
}
function mayorSalarioAnual() {
  let salarioMaximo = Number(salariosValor[0].textContent);
  for (let i = 0; i < salariosValor.length; i++) {
    if (Number(salariosValor[i].textContent > salarioMaximo)) {
      salarioMaximo = Number(salariosValor[i].textContent);
    }
    return salarioMaximo;
  }
}

const botonCalcularSalario = document.getElementById("boton-calcular_salario");
let $textoMayorSalario = document.getElementById("mayor-salario_anual");
let $textoMenorSalario = document.getElementById("menor-salario_anual");
let $textoSalarioAnualPromedio = document.getElementById(
  "salario-anual_promedio"
);
let $textoSalarioMensual = document.getElementById("salario-anual_mensual");

botonCalcularSalario.onclick = function () {
  $textoMayorSalario.textContent =
    $textoMayorSalario.textContent + " " + mayorSalarioAnual();
  $textoMenorSalario.textContent =
    $textoMenorSalario.textContent + " " + menorSalarioAnual();
  $textoSalarioAnualPromedio.textContent =
    $textoSalarioAnualPromedio.textContent + " " + promedioSalarioAnual();
  $textoSalarioMensual.textContent =
    $textoSalarioMensual + " " + promedioSalarioMensual();
  console.log(salariosValor);
  return false;
};
