const $calcular = document.querySelector("#boton-calcular")

$calcular.onclick = function (){
     let horasTotales = 0;    
    const horasVideo = document.querySelectorAll(".horas"); 
    for (let i = 0; i < horasVideo.length; i++) {
        horasTotales += Number(horasVideo[i].value);  
    }  
    let minutosTotales = 0; 
    const minutosVideo = document.querySelectorAll(".minutos");
    for (let i = 0; i < minutosVideo.length; i++) {
        minutosTotales += Number(minutosVideo[i].value);  
    }  
     let segundosTotales = 0;
    const segundosVideo = document.querySelectorAll(".segundos");
    for (let i = 0; i < segundosVideo.length; i++) {
        segundosTotales += Number(segundosVideo[i].value);}
      
    if (minutosTotales >= 60){
        let division = minutosTotales % 60;
        horasTotales +=  (minutosTotales - division)/ 60;
        minutosTotales = division;

    }
    if (segundosTotales >= 60){
        let division1 = segundosTotales % 60;
        minutosTotales += (segundosTotales - division1)/60;
        segundosTotales = division1;
    }
    const $TextoMostrado = document.querySelector("#texto-mostrado");
    $TextoMostrado.innerText = `El tiempo total es de ${horasTotales} horas , ${minutosTotales} minutos y ${segundosTotales} segundos`;
    return false;
    }


