
/*
let animal = "Gato"

animal = "Vaca"

animal = "Perro"

const felino = "Tigre"

console.log(felino)
*/


/*const nombre = "José"
let apellido = "Jiménez"
const nombreCompleto = ` ${nombre} ${apellido} ${1+1} ` 

function getName(comoSeLLamaElMuchacho){   
    return ` Su nombre es ${comoSeLLamaElMuchacho}`
}

console.log(`${ getName(nombre) } `)

*/

/*const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
};

console.log(persona)

const persona2 = {...persona}

persona2.nombre = "Bruce"

console.log(persona2)

*/


/*const carritoCompra = ["papa", "yuca", "arracacha", "cilantro"]
carritoCompra.pop()

console.log(carritoCompra)
*/

/*const arrayDeObjetos = [
    {
        nombre: 'Tony',
        apellido: 'Stark',
        edad: 45,
    },
    {
        nombre: 'Bruce',
        apellido: 'Banner',
        edad: 40,
    },
    {
        nombre: 'Steve',
        apellido: 'Rogers',
        edad: 85,
    }
]

const arrayDeObjetos2 = [...arrayDeObjetos]
console.log(arrayDeObjetos2)

const user = arrayDeObjetos.find(user => user.nombre === "Steve");

console.log(user)


*/

/*const getName2 = () => {
    let suma = 1+1 
    console.log(suma)
}


const getName3 = (nombre) => `Hola, ¿Cómo estás?, ${nombre}` ;




console.log(getName2('Doraly'));
console.log(getName3('Dargy'));


function getNumer(){
    console.log(5)
}

*/

/*

const getValueInput = () =>{

    let inputValue = document.getElementById("input").value; 
    document.getElementById("valueInput").innerHTML = inputValue; 
  
}

*/

const getValueInput = () =>{
    let inputValue = document.getElementById("domTextElement").value; 
    document.getElementById("valueInput").innerHTML = `El valor del input es ${inputValue}` ; 
  }
  