// 1. Seleccionamos los elementos del HTML (una sola vez)
const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tazas");

// 2. Definimos la función de validación
function puedeReservar(tazasDisponibles) {
  return tazasDisponibles > 0;
}

// 3. Creamos un único evento que escuche el clic
botonReservar.addEventListener("click", function() {
  
  // Mensaje de prueba en consola
  console.log("El usuario hizo clic");

  // Capturamos el número actual del HTML y lo convertimos a número matemático
  const tazasActuales = Number(contadorTazas.textContent);

  // Evaluamos si aún hay tazas
  if (puedeReservar(tazasActuales)) {
    // Si hay, restamos 1
    contadorTazas.textContent = tazasActuales - 1;
  } else {
    // Si llega a 0, cambiamos el texto y desactivamos el botón
    botonReservar.textContent = "Sin cupos";
    botonReservar.disabled = true;
  }
});