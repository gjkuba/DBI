function aktualizujZegar() {
    const teraz = new Date();
    document.getElementById("zegar").innerHTML =
        "Aktualna godzina: " + teraz.toLocaleTimeString();
}
setInterval(aktualizujZegar, 1000);
