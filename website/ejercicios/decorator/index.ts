class Field{
    errors : string[]
    input: HTMLInputElement

    constructor(input:HTMLInputElement){
        this.input=input
        this.errors=[]

        let errorMessage = document.createElement('p')
        errorMessage.className='text-danger'
        this.input.parentNode.insertBefore(errorMessage,this.input.nextSibling)

        this.input.addEventListener('input',()=>{
            this.errors=[]
            this.validate()
            //Regresamos el primer error del array
            errorMessage.innerText=this.errors[0]||''
        })
    }
    //Definimos un método validate vacío. Se especificará su funcionalidad con cada decorator
    validate(){}
}

//Agregamos el primer decorador que detecta si el 'input' está vacío
function RequiredFieldDecorator(field:Field): Field {
    //Almacenamos el método validate en una variable
    let validate = field.validate;
    //Definimos la funcionalidad de 'validate'
    field.validate = function () {
        validate();
        let value = field.input.value;
        //Si no hay ningún valor en el input agregamos un error al array errors[]
        if (!value) {
            field.errors.push("Requerido");
        }
    }
    //Devolvemos el campo de 'input'
    return field
}

//Agregamos el segundo decorador que detecta si existe '@' en el campo input
function EmailFieldDecorator(field:Field): Field {
    let validate = field.validate;
    //Definimos la funcionalidad de 'validate'
    field.validate = function () {
        validate();
        let value = field.input.value;
        //Si no existe un símbolo '@' agregamos un error al array de errors[]
        if (value.indexOf("@") === -1) {
            field.errors.push("Debe ser un email");
        }
    }
    //Devolvemos el campo de 'input'
    return field
}

//Cremos una instancia de la clase Field pasándole como argumento el <input id="email">
let field = new Field(document.querySelector('#email'))
//Agregamos el primer decorador
field = RequiredFieldDecorator(field)
//Agregamos el segundo decorador
field = EmailFieldDecorator(field)