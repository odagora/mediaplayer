enum Color {
    rojo = "Rojo",
    verde = "Verde"
}

interface Rectangulo {
    ancho: number;
    alto: number;
    //Atributo opcional:
    color?: Color;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.rojo
}

function area(r: Rectangulo): number {
    //La notación de '.' nos permite acceder al autocomplete
    return r.alto * r.ancho;
}

const areaRect = area(rect);

console.log(areaRect);

rect.toString = function(){
    return this.color ? `Un rectangulo ${this.color}` : "Un rectangulo"
}

console.log(rect.toString());
