let persona = {
    nombre: 'Yeison',
    apellido: 'Daza',
    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`
    },
    set nombreCompleto(nom) {
        const palabras = nom.split(' ');
        this.nombre = palabras[0] || '';
        this.apellido = palabras[1] || '';
    }
}
console.log(persona.nombreCompleto);

persona.nombreCompleto = 'Camilo Sanchez'

console.log(persona.nombre);
console.log(persona.apellido);


let persona = {
    nombre: 'Yeison',
    apellido: 'Daza',
}

Object.defineProperty(persona, 'nombreCompleto', {
    get: function() {
        return `${this.nombre} ${this.apellido}`
    },
    set: function(nom) {
        const palabras = nom.split(' ');
        this.nombre = palabras[0] || '';
        this.apellido = palabras[1] || '';
    }
})

persona.nombreCompleto = 'Camilo Sanchez'

console.log(persona.nombre);
console.log(persona.apellido);