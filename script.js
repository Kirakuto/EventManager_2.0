/*
* Copyright (c) 2026 Mi Nombre
* Grupo / Asignatura
*/

document.getElementById("day").innerHTML = "Fecha: " + new Date().toLocaleDateString();

function updateWindowSize() {
    document.getElementById("window-size").textContent =
        "Ancho disponible: " + window.innerWidth + " px; alto disponible: " + window.innerHeight + " px.";
}

updateWindowSize();
window.addEventListener("resize", updateWindowSize);

document.getElementById("browser-language").textContent = "Idioma del navegador: " + navigator.language;
document.getElementById("user-agent").textContent = "Agente de usuario: " + navigator.userAgent;

function updateConnectionStatus() {
    document.getElementById("connection-status").textContent =
        "Conexión a Internet: " + (navigator.onLine ? "con conexión" : "sin conexión");
}

updateConnectionStatus();
window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);

function confirmLeave() {
    const confirmed = window.confirm("¿Confirmas que quieres abandonar la página?");
    document.getElementById("leave-status").textContent = confirmed
        ? "Has confirmado la acción."
        : "Has decidido permanecer en la página.";
}

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
    const messageContainer = document.createElement("div");
    const messageElement = document.createElement("p");
    const deleteButton = document.createElement("button");

    messageElement.textContent = message;
    deleteButton.textContent = "Eliminar";
    deleteButton.type = "button";
    deleteButton.addEventListener("click", function(){
        messageContainer.remove();
    });

    messageContainer.appendChild(messageElement);
    messageContainer.appendChild(deleteButton);
    document.getElementById("message-area").appendChild(messageContainer);
}
