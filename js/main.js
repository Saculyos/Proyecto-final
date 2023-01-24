const modoOscuro = document.querySelector("#boton_oscuro");
const nav = document.querySelector("nav");
const seccionInformacion = document.querySelector("#informacion");
const seccionExperiencia = document.querySelector("#experiencia");
const seccionHabilidades = document.querySelector("#habilidades");

modoOscuro.addEventListener("click", e =>{
nav.classList.toggle("darkmode");
seccionInformacion.classList.toggle("darkmode");
seccionExperiencia.classList.toggle("darkmode");
seccionHabilidades.classList.toggle("darkmode");
});