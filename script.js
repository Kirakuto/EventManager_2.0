/*
* Copyright (c) 2026 Mi Nombre
* Grupo / Asignatura
*/
function handShake() {
    if (document.getElementById("title1").innerHTML == "Evento Tecnológico") {

        document.getElementById("title1").innerHTML = "¡Bienvenido al evento tecnológico!";

    }else{

        document.getElementById("title1").innerHTML = "Evento Tecnológico";

    }
}

let info = "Exercitation exercitation incididunt adipisicing labore reprehenderit duis cupidatat exercitation fugiat velit ea.<br>  Officia deserunt id consequat consectetur. <br> Fugiat tempor anim proident qui minim ad irure dolor nisi velit dolore.<br> Incididunt do ipsum ut reprehenderit irure nisi ullamco culpa.<br> In Lorem occaecat ad tempor cillum pariatur cillum nulla amet enim Lorem occaecat fugiat sunt.";

function hideI(){
    if(document.getElementById("info").innerHTML.length > 0){
        document.getElementById("info").innerHTML = "";
    }else{
        document.getElementById("info").innerHTML = info;
    }
}

function addMessage(){
    const message = document.getElementById("message").value;
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    document.getElementById("message-area").appendChild(messageElement);
}
