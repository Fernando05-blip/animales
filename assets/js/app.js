// importar js externos
import { Leon, Lobo, Oso, Serpiente, Aguila } from './animales.js';
import { arrayAnimales, arrayInstancia } from './instancias.js';

// declarar variables
const animal = document.querySelector('#animal')
const edad = document.querySelector('#edad')
const comentarios = document.querySelector('#comentarios')
const animalesCards = document.querySelector('#Animales')
const btnRegistrar = document.querySelector('#btnRegistrar')
const preview = document.querySelector('#preview')



function cracionAnimal(nombre, edad, comentarios) {
  
  switch (nombre) {
    case 'Leon':
      const leon = new Leon (nombre, edad, arrayAnimales[0].imagen , comentarios, arrayAnimales[0].sonido)
      return leon;
    case 'Lobo':
      const lobo = new Lobo (nombre, edad, arrayAnimales[1].imagen , comentarios, arrayAnimales[1].sonido) 
      return lobo;
    case 'Oso':
      const oso = new Oso (nombre, edad, arrayAnimales[2].imagen , comentarios, arrayAnimales[2].sonido)
      return oso;
    case 'Serpiente':
      const serpiente = new Serpiente (nombre, edad, arrayAnimales[3].imagen , comentarios, arrayAnimales[3].sonido)
      return serpiente;
    case 'Aguila':
      const aguila = new Aguila (nombre, edad, arrayAnimales[4].imagen , comentarios, arrayAnimales[4].sonido)
      return aguila;
  }
}

function crearCard(){
    animalesCards.innerHTML = ''; // limpiar
    arrayInstancia.forEach((element, index) => {
        animalesCards.innerHTML += 
        `<div class="col">
            <div class="card my-3" style="width: 100%; height: auto">
                <img src="./assets/imgs/${element.img}" class="card-img-top" style="min-width:100%, height:auto" alt="${element.img}">
                <div class="card-body">
                    <button id='reproducirSonido-${index}' class="card-title"><i class="fa-solid fa-volume-high fa-lg"></i></button>
                </div>
            </div>
        </div>`;
    });
}


//crear imagen de animal para el listado

document.addEventListener("DOMContentLoaded", function() {

  animal.addEventListener("change", () => {
    
    const imagenURL = arrayAnimales.find(item => item.name === animal.value)?.imagen;
    if (imagenURL) {
      preview.innerHTML = `<img src="./assets/imgs/${imagenURL}" class="card-img-top" style="min-width:100%;height:auto" alt="${animal.value}">`
    } else {
      preview.innerHTML = ''
    }
  });


  btnRegistrar.addEventListener("click", () => {
    // validaciones 

    if (animal.selectedIndex === 0) {
      alert('No has elegido un animal')
      return
    }

    if (edad.selectedIndex === 0) {
      alert('No has elegido un rango de edad')
      return
    }
    if (comentarios.value.trim() === "") {
      alert('No has escrito un comentario')
      return
    }

    //añadir animal a array e instanciar

    let crear = cracionAnimal(animal.value, edad.value, comentarios.value)
    arrayInstancia.push(crear)

    //lanzar funcion

    crearCard()

    //limpiar formulario

    animal.selectedIndex = 0
    edad.selectedIndex = 0
    comentarios.value = ''
  })
});