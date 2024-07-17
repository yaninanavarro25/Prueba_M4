export class Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }
    getNombre(){
        return this._nombre;
    }
    getEdad(){
        return this._edad
    }
    getImg(){
        return this._img;
    }
    setComentarios(nuevoComentario){
        this._comentarios = nuevoComentario;
    }
    setSonido(nuevoSonido){
        this._sonido = nuevoSonido
    }
}