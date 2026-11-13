/*
* Copyright (c) 2026 Izan
* DAW 2
* 
* La documentacion esta un poco fea, sin @param / @return... tambien en ingles por que lo considero idioma estandar
* para la programacion. Si esto causa problema dame un aviso
*/


//Writes the date in "day" with the system date
document.getElementById("day").innerHTML = "Fecha: " + new Date().toLocaleDateString();

//LocalStorage persists across browser sessions; sessionStorage is scoped to this tab and ends with it ergo when you close it.
//Variables that will be used to store theme and name in both session and storage
const themeStorageKey = "display-mode";
const nameStorageKey = "user-name";
const toggleThemeButton = document.getElementById("toggle-theme");
const userNameInput = document.getElementById("user-name");
const savedNameElement = document.getElementById("saved-name");
const nameStatusElement = document.getElementById("name-status");


//Check the content of theme and change the theme accordingly, also change the button text to match the current theme
function applyTheme(isDark) {
    document.body.dataset.theme = isDark ? "dark" : "light";
    toggleThemeButton.textContent = isDark ? "Activar modo claro" : "Activar modo oscuro";
}

//gets the saved name from sessionStorage and shows it, ternary ops lets us manage null values
function showSavedName(name) {
    savedNameElement.textContent = name ? "Nombre guardado: " + name : "No hay ningún nombre guardado.";
}

//Here we save the theme from localStorage , if theres none, light mode is applied
const savedTheme = localStorage.getItem(themeStorageKey);
applyTheme(savedTheme === "dark");

//Listener for the button to toggle themes, also saves the theme in localStorage
toggleThemeButton.addEventListener("click", function () {
    const isDark = document.body.dataset.theme !== "dark";//theme is still saved in the custom dataset theme
    applyTheme(isDark);//we apply and save the theme
    localStorage.setItem(themeStorageKey, isDark ? "dark" : "light");
});

//REmoves theme from the localStorage
document.getElementById("clear-theme").addEventListener("click", function () {
    localStorage.removeItem(themeStorageKey);
    applyTheme(false);//Since we send as param false, light mode is applied due to the ternary op
});

//Fetch saved name from sessionStorage
const savedName = sessionStorage.getItem(nameStorageKey);
if (savedName) {
    userNameInput.value = savedName;
}
showSavedName(savedName);//Now shows it if there is any

//Listener for button to save name, strimed to avoid spaces and empty checks
document.getElementById("save-name").addEventListener("click", function () {
    const name = userNameInput.value.trim();
    if (!name) {
        nameStatusElement.textContent = "Escribe un nombre antes de guardarlo.";
        return;
    }
    //Heres the actua saving and call to the showSavedName funct
    sessionStorage.setItem(nameStorageKey, name);
    showSavedName(name);
    nameStatusElement.textContent = "Nombre guardado en esta pestaña.";//Little confirmation message
});

//Button to clear name from sess storage
document.getElementById("clear-name").addEventListener("click", function () {
    sessionStorage.removeItem(nameStorageKey);
    userNameInput.value = "";
    showSavedName(null);
    nameStatusElement.textContent = "Nombre eliminado de esta sesión.";
});

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
//Button to open the new window
document.getElementById("open-event-window").addEventListener("click", function () {
    const eventWindow = window.open("", " ", "width=420,height=420");
    const mainWindowMessage = document.getElementById("window-message");

    //New window content + checks
    if (!eventWindow) {
        mainWindowMessage.textContent = "No se ha podido abrir la pagina";
        return;
    }

    eventWindow.document.title = "Detalles del evento";
    eventWindow.document.body.innerHTML = `
        <h1>Evento Tecnológico</h1>
        <p>Fecha de celebración: 33 de febrero de 2027</p>
        <p>Precio de inscripción: 0,99 €</p>
        <p>Bienvenido al evento</p>
        <label for="popup-message">Mensaje para la página principal:</label>
        <input type="text" id="popup-message" value="Mensaje para la principal">
        <button type="button" id="send-popup-message">Enviar mensaje</button>
        <button type="button" id="close-event-window">Cerrar ventana</button>
        <p id="popup-status" aria-live="polite"></p>`;

    //Listener for the button to send message, cheking if the main is still open to avoid errors
    eventWindow.document.getElementById("send-popup-message").addEventListener("click", function () {
        if (!eventWindow.opener || eventWindow.opener.closed) {
            eventWindow.document.getElementById("popup-status").textContent =
                "Has cerrado la ventana principal,no hay destino";
            return;
        }
        //We get the message, check it and display it
        const message = eventWindow.document.getElementById("popup-message").value.trim();
        if (!message) {
            eventWindow.document.getElementById("popup-status").textContent =
                "No hay mensaje";
            return;
        }
        //Feedback to the users
        eventWindow.opener.document.getElementById("window-message").textContent =
            "Mensaje recibido: " + message;
        eventWindow.document.getElementById("popup-status").textContent =
            "Mensaje enviado";
    });
    //Button to close the secondary window
    eventWindow.document.getElementById("close-event-window").addEventListener("click", function () {
        eventWindow.close();
    });
});
