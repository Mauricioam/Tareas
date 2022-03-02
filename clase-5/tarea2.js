const $calcular = document.querySelector("#boton-calcular")

$calcular.onclick = function (){
    const Horas$1 = Number(document.querySelector(".horas-1").value);
    const Horas$2 = Number(document.querySelector(".horas-2").value);
    const Horas$3 = Number(document.querySelector(".horas-3").value);
    const Horas$4 = Number(document.querySelector(".horas-4").value); 
    const Horas$5 = Number(document.querySelector(".horas-5").value);

     TotalHoras = Horas$1 + Horas$2 + Horas$3 + Horas$4 + Horas$5;

    const Minutos$1 = Number(document.querySelector(".minutos-1").value);
    const Minutos$2 = Number(document.querySelector(".minutos-2").value);
    const Minutos$3 = Number(document.querySelector(".minutos-3").value);
    const Minutos$4 = Number(document.querySelector(".minutos-4").value); 
    const Minutos$5 = Number(document.querySelector(".minutos-5").value);

    let TotalMinutos = Minutos$1 + Minutos$2 + Minutos$3 + Minutos$4 + Minutos$5;

    const Segundos$1 = Number(document.querySelector(".segundos-1").value);
    const Segundos$2 = Number(document.querySelector(".segundos-2").value);
    const Segundos$3 = Number(document.querySelector(".segundos-3").value);
    const Segundos$4 = Number(document.querySelector(".segundos-4").value); 
    const Segundos$5 = Number(document.querySelector(".segundos-5").value);

    let TotalSegundos = Segundos$1 + Segundos$2 + Segundos$3 + Segundos$4 + Segundos$5;

    if (TotalMinutos >= 60){
        let division = TotalMinutos % 60;
         TotalHoras +=  (TotalMinutos-division)/ 60;
         TotalMinutos = division;

    }
    if (TotalSegundos >= 60){
        let division1 = TotalSegundos % 60;
        TotalMinutos += (TotalSegundos- division1)/60;
        TotalSegundos = division1;
    }
    const $TextoMostrado = document.querySelector("#texto-mostrado");
    $TextoMostrado.innerText = `El tiempo total es de ${TotalHoras} horas , ${TotalMinutos} minutos y ${TotalSegundos} segundos`;
    return false;
    }


