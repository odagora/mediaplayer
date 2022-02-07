interface Observer {
    //Función que recibe actualización de la información
    //El tipo de dato que recibe es cualquiera: number, string, boolean, etc
    update: (data: any) => void
}

interface Subject {
    //Funciones que no devuelven nada -> return es 'undefined'
    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
}


// Va a recibir los cambios del precio del BC y les va a informar a sus observadores o suscriptores
class BitcoinPrice implements Subject {
    //Lista vacía donde se va a almacenar los valores tipados en el input
    observers: Observer[] = []

    constructor(){
        const el: HTMLInputElement = document.querySelector("#value")
        el.addEventListener("input", () => {
            this.notify(el.value) // cuando cambie el input notificamos al los observadores
        })
    }

    //Método que permite ir agregando los datos tipados en el input
    subscribe (observer: Observer) {
        this.observers.push(observer)
    }

    //Método que permite dejar de agregar los datos tipados en el input
    unsubscribe(observer: Observer) {
        const index = this.observers.findIndex((obs) => {
            return obs === observer
        })
        //Sacamos al observer de la lista de observers
        this.observers.splice(index, 1)
    }

    // cuando el precio cambie queremos notificar a los observadores
    notify(data: any) {
        this.observers.forEach(observer => observer.update(data))
    }
}

//Va a observar los cambios ingresados en el input
class PriceDisplay implements Observer {
    private el: HTMLElement

    constructor(){
        this.el = document.querySelector("#price")
    }

    // cada vez que el sujeto notifica a este observador modificamos el valor
    update(data: any) {
        this.el.innerText = data
    }
}

// instancias para suscribirnos al sujeto
const value = new BitcoinPrice()
const display = new PriceDisplay()

value.subscribe(display) // display esta suscrito a todos los cambios que notifica el sujeto (input)

//Luego de 5 segundos el display deja de estar suscrito a los cambios del sujeto
setTimeout(
    () => value.unsubscribe(display),
    5000
)