/*
* Copyright (c) 2026 Mi Nombre
* Grupo / Asignatura
*/
//Writes the date in "day" with the system date
document.getElementById("day").innerHTML = "Fecha: " + new Date().toLocaleDateString();

//Shows the window size
function updateWindowSize() {
    document.getElementById("window-size").textContent =
        "Ancho disponible: " + window.innerWidth + " px; alto disponible: " + window.innerHeight + " px.";
}

//Event listener to update in real time the displayed size
updateWindowSize();
window.addEventListener("resize", updateWindowSize);

//Shows the browser language and agent(? i guess its the browser
document.getElementById("browser-language").textContent = "Idioma del navegador: " + navigator.language;
document.getElementById("user-agent").textContent = "Agente de usuario: " + navigator.userAgent;

//Shows url of the window
document.getElementById("current-url").textContent = "URL actual: " + window.location.href;
const pathParts = window.location.pathname.split("/");//Split the pathname
//Now we read and remove until we find the index
document.getElementById("html-file").textContent = "Archivo HTML: " + (pathParts.pop() || "index.html");
//Another listener so when we click, we reload the window
document.getElementById("reload-page").addEventListener("click", function () {
    window.location.reload();
});
//Same but with the last page in the window history
document.getElementById("go-back").addEventListener("click", function () {
    window.history.back();
});

//We set a listener so when the conection status changes, the update is triggered
function updateConnectionStatus() {
    //Ternary operator to show "Con conexion"/"sin conexion"
    document.getElementById("connection-status").textContent =
        "Conexión a Internet: " + (navigator.onLine ? "con conexión" : "sin conexión");
}
updateConnectionStatus();
window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);

//We use window.connfirm to confirm... yeah
function confirmLeave() {
    //Another ternary op
    const confirmed = window.confirm("¿Confirmas que quieres abandonar la página?");
    document.getElementById("leave-status").textContent = confirmed
        ? "Has confirmado la acción."
        : "Has decidido permanecer en la página.";
}

//Function to greet, it can also change the text back
function handShake() {
    if (document.getElementById("title1").innerHTML == "Evento Tecnológico") {

        document.getElementById("title1").innerHTML = "¡Bienvenido al evento tecnológico!";

    } else {

        document.getElementById("title1").innerHTML = "Evento Tecnológico";

    }
}

let info = "Exercitation exercitation incididunt adipisicing labore reprehenderit duis cupidatat exercitation fugiat velit ea.<br>  Officia deserunt id consequat consectetur. <br> Fugiat tempor anim proident qui minim ad irure dolor nisi velit dolore.<br> Incididunt do ipsum ut reprehenderit irure nisi ullamco culpa.<br> In Lorem occaecat ad tempor cillum pariatur cillum nulla amet enim Lorem occaecat fugiat sunt.";
//Show or hide the info
function hideI() {
    if (document.getElementById("info").innerHTML.length > 0) {
        document.getElementById("info").innerHTML = "";
    } else {
        document.getElementById("info").innerHTML = info;
    }
}
//Function to crete new items with user input
function addMessage() {
    const message = document.getElementById("message").value;
    const messageContainer = document.createElement("div");
    const messageElement = document.createElement("p");
    const deleteButton = document.createElement("button");

    messageElement.textContent = message;
    deleteButton.textContent = "Eliminar";
    deleteButton.type = "button";
    deleteButton.addEventListener("click", function () {
        messageContainer.remove();
    });

    messageContainer.appendChild(messageElement);
    messageContainer.appendChild(deleteButton);
    document.getElementById("message-area").appendChild(messageContainer);
}
