
/*chat whatsapp*/
let timeoutCerrar;

function mostrarWhatsApp() {
    const popup = document.getElementById("whatsapp-popup");
    popup.style.display = "block";

    // Reiniciar temporizador
    clearTimeout(timeoutCerrar);
    timeoutCerrar = setTimeout(cerrarWhatsApp, 10000); // Se oculta después de 10 segundos
}

function cerrarWhatsApp() {
    document.getElementById("whatsapp-popup").style.display = "none";
}



