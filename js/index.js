// Fecha objetivo
const targetDate = new Date("2025-01-09T23:59:59").getTime();

// Actualiza el conteo cada segundo
const countdownInterval = setInterval(() => {
    // Obtiene la fecha y hora actuales
    const now = new Date().getTime();
    // Calcula la diferencia entre la fecha objetivo y la fecha actual
    const distance = targetDate - now;

    // Calcula días restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Muestra el resultado en el elemento HTML
    document.getElementById("countdown").innerHTML = `${days} días restantes`;
    document.getElementById("countdown2").innerHTML = `${days} días restantes`;

    // Si el conteo ha terminado, muestra un mensaje
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "¡Tiempo agotado!";
        document.getElementById("countdown2").innerHTML = "¡Tiempo agotado!";
    }
}, 1000);