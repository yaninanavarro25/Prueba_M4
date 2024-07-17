import Leon from "./leon.js";
import Lobo from "./lobo.js";
import Oso from "./oso.js";
import Serpiente from "./serpiente.js";
import Aguila from "./aguila.js";

let selAnimal = document.getElementById("animal");
let edadAnimal = document.getElementById("edad");
let comAnimal = document.getElementById("comentarios");
let prewAnimal = document.getElementById("preview");
let btnAgregar = document.getElementById("btnRegistrar");
let divAnimales = document.getElementById("Animales");
let audio = document.getElementById("player");
const animales = [];

async function cargarDatos() {
  const res = await fetch("/animales.json");
  const datos = await res.json();
  const datosAnimal = datos.animales;
  const selectAnimal = datosAnimal.find(
    (animal) => animal.name == selAnimal.value
  );

  return selectAnimal;
}

selAnimal.addEventListener("change", async () => {
  prewAnimal.innerHTML = "";
  cargarDatos().then((result) => {
    console.log(result);
    let imagenAnimal = result.imagen;
    console.log(imagenAnimal);
    prewAnimal.innerHTML += `<img src="./assets/imgs/${imagenAnimal}" class="img-fluid rounded card-img-top" alt="...">`;
  });
});

btnAgregar.addEventListener("click", async () => {
  cargarDatos().then((result) => {
    let nuevoAnimal = {};
    if (
      result.name == "Leon" &&
      (selAnimal.value && edadAnimal.value && comAnimal.value) != ""
    ) {
      nuevoAnimal = new Leon(
        selAnimal.value,
        edadAnimal.value,
        result.imagen,
        comAnimal.value,
        result.sonido
      );
      animales.push(nuevoAnimal);
      iconAnimal(nuevoAnimal);
    } else if (
      result.name == "Lobo" &&
      (selAnimal.value && edadAnimal.value && comAnimal.value) != ""
    ) {
      nuevoAnimal = new Lobo(
        selAnimal.value,
        edadAnimal.value,
        result.imagen,
        comAnimal.value,
        result.sonido
      );
      animales.push(nuevoAnimal);
      iconAnimal(nuevoAnimal);
    } else if (
      result.name == "Oso" &&
      (selAnimal.value && edadAnimal.value && comAnimal.value) != ""
    ) {
      nuevoAnimal = new Oso(
        selAnimal.value,
        edadAnimal.value,
        result.imagen,
        comAnimal.value,
        result.sonido
      );
      animales.push(nuevoAnimal);
      iconAnimal(nuevoAnimal);
    } else if (
      result.name == "Serpiente" &&
      (selAnimal.value && edadAnimal.value && comAnimal.value) != ""
    ) {
      nuevoAnimal = new Serpiente(
        selAnimal.value,
        edadAnimal.value,
        result.imagen,
        comAnimal.value,
        result.sonido
      );
      animales.push(nuevoAnimal);
      iconAnimal(nuevoAnimal);
    } else if (
      result.name == "Aguila" &&
      (selAnimal.value && edadAnimal.value && comAnimal.value) != ""
    ) {
      nuevoAnimal = new Aguila(
        selAnimal.value,
        edadAnimal.value,
        result.imagen,
        comAnimal.value,
        result.sonido
      );
      animales.push(nuevoAnimal);
      iconAnimal(nuevoAnimal);
    } else {
      alert("Hay data incompleta, intenta nuevamente");
    }
  });
});

function iconAnimal(i) {
  console.log(i);
  divAnimales.innerHTML += `<div class="px-3 pb-2">
                                  <div class="card bg-dark text-white">
                                      <img src="./assets/imgs/${i._img}" class="card-img" data-toggle="modal" data-target="#${i._nombre}" alt="${i._img}" type="button" height="120" >
                                      <div class="card-footer btnSonido" type="button" onclick="playSound('${i._nombre}')">
                                          <img src="./assets/imgs/audio.svg" height="20" class="">
                                      </div>
                                  </div>
                              </div>`;

  modalDetails(i);
}

window.playSound = (name) => {
  console.log(name);
  let audioplayer = document.getElementById("player");
  if (name == "Leon") {
    audioplayer.src = "/assets/sounds/Rugido.mp3";
    audioplayer.play();
  } else if (name == "Lobo") {
    audioplayer.src = "/assets/sounds/Aullido.mp3";
    audioplayer.play();
  } else if (name == "Oso") {
    audioplayer.src = "/assets/sounds/Grunido.mp3";
    audioplayer.play();
  } else if (name == "Serpiente") {
    audioplayer.src = "/assets/sounds/Siseo.mp3";
    audioplayer.play();
  } else if (name == "Aguila") {
    audioplayer.src = "/assets/sounds/Chillido.mp3";
    audioplayer.play();
  }
};

function modalDetails(nuevoAnimal) {
  const newModal = document.getElementById("exampleModal");
  newModal.innerHTML += `<div class="modal fade" id="${nuevoAnimal._nombre}">
                          <div class="modal-dialog modal-dialog-centered w-25" role="document">
                            <div class="modal-content bg-dark">
                              <div class="modal-body">
                                <div class="imgModal">
                                  <img src="./assets/imgs/${nuevoAnimal._img}" class="card-img" alt="">
                                </div>
                                <div class="cuerpoModal text-light text-center">
                                  <h5>${nuevoAnimal._edad}</h5>
                                  <h3>Comentarios</h3>
                                  <hr>
                                  <p>${nuevoAnimal._comentarios}</p>
                                </div>
                              </div>
                            </div>
                          </div>`;
  clearForm();
}

function clearForm() {
  prewAnimal.innerHTML = "";
  prewAnimal.innerHTML += `<img src="./assets/imgs/lion.svg" class="img-fluid rounded card-img-top" alt="...">`;
  comAnimal.value = "";
  edadAnimal.value = "Seleccione un rango de años";
  selAnimal.value = "Seleccione un animal";
}