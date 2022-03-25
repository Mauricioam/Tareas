const $botonUsuario = document.querySelector("#boton-usuario")

$botonUsuario.onclick = function() {
    const primerNombre = (document.querySelector("#p-nombre-usuario").value);
    const segundoNombre = (document.querySelector("#s-nombre-nombre").value);
    const apellido = (document.querySelector("#a-nombre-usuario").value);
    const edadUsuario = (document.querySelector("#edad-usuario").value);
    const $titulo = document.querySelector(".titulo");

     $titulo.textContent =`Bienvenido ${primerNombre} ${segundoNombre} ${apellido} de ${edadUsuario} años` 
     return false

        
}




