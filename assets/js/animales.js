// exportar objetos animales

export class Animales {
    #nombre
    #edad
    #img
    #comentarios
    #sonidos

    // funcion constructora

    constructor(nombre, edad, img, comentarios, sonido) {
        this.#nombre = nombre
        this.#edad = edad
        this.#img = img
        this.#comentarios = comentarios
        this.#sonidos = sonido

    }
    // getters
    get nombre(){
        return this.#nombre
    }
    get edad(){
        return this.#edad
    }
    get img(){
        return this.#img
    }
    get comentarios(){
        return this.#comentarios
    }
    get sonidos(){
        return this.#sonidos
    }
}

// exportar sonidos animales

export class Leon extends Animales {

    rugir() {
        console.log('rugido')
    }
}
export class Lobo extends Animales {

    aullar() {
        console.log('aullar')
    }
}

export class Oso extends Animales {

    gruñir() {
        console.log('gruñir')
    }
}

export class Serpiente extends Animales {

    sisear() {
        console.log('sisear')
    }
}

export class Aguila extends Animales {

    chillar() {
        console.log('chillar')
    }
}