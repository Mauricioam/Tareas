const $calcular = document.querySelector("#boton-calcular")

$calcular.onclick = function (){
    const horasVideo1 = Number(document.querySelector(".horas-1").value);
    const horasVideo2 = Number(document.querySelector(".horas-2").value);
    const horasVideo3 = Number(document.querySelector(".horas-3").value);
    const horasVideo4 = Number(document.querySelector(".horas-4").value); 
    const horasVideo5 = Number(document.querySelector(".horas-5").value);

     totalHoras = horasVideo1 + horasVideo2 +horasVideo3 + horasVideo4 + horasVideo5;

    const minutosVideo1 = Number(document.querySelector(".minutos-1").value);
    const minutosVideo2 = Number(document.querySelector(".minutos-2").value);
    const minutosVideo3 = Number(document.querySelector(".minutos-3").value);
    const minutosVideo4 = Number(document.querySelector(".minutos-4").value); 
    const minutosVideo5 = Number(document.querySelector(".minutos-5").value);

    let totalMinutos = minutosVideo1 + minutosVideo2 + minutosVideo3 + minutosVideo4 + minutosVideo5;

    const segundosVideo1 = Number(document.querySelector(".segundos-1").value);
    const segundosVideo2 = Number(document.querySelector(".segundos-2").value);
    const segundosVideo3 = Number(document.querySelector(".segundos-3").value);
    const segundosVideo4 = Number(document.querySelector(".segundos-4").value); 
    const segundosVideo5 = Number(document.querySelector(".segundos-5").value);

    let totalSegundos = segundosVideo1 + segundosVideo2 + segundosVideo3 + segundosVideo4 + segundosVideo5;

    if (totalMinutos >= 60){
        let division = totalMinutos % 60;
         totalHoras +=  (totalMinutos-division)/ 60;
         totalMinutos = division;

    }
    if (totalSegundos >= 60){
        let division1 = totalSegundos % 60;
        totalMinutos += (totalSegundos - division1)/60;
        totalSegundos = division1;
    }
    const $TextoMostrado = document.querySelector("#texto-mostrado");
    $TextoMostrado.innerText = `El tiempo total es de ${totalHoras} horas , ${totalMinutos} minutos y ${totalSegundos} segundos`;
    return false;
    }


