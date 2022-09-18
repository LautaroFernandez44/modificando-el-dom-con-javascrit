
let cantidad = prompt(`Vamos a calcular el promedio de edad de tus mascotas. Ingresá cuantas mascotas tenés.`)
let nombres = prompt(`Ingresá sus nombres`)
let eM; //(eM = Edad de las mascotas). Acá se registran las edades.
let sE = 0; //(sE= Sumatoria de edades). Acá se acumulan.
let n; //Esto para que muestre el número correctamente.


function sumar(num1, num2) {
   const resultado = num1 + num2 //Agregué una funcion para sumar.
   return resultado;
}

function pedirDatosMascota() {
   const edad = parseInt(prompt(`Ingresá la edad en años de tu mascota número `+n)); //Función para pedir datos.
   return edad;
}

function mostrarPromedio() {

   alert(`${nombres} llevan haciéndote feliz ${sE/cantidad} años en promedio. Dales sus buenas caricias por éso =)`)

   //Función para mostrar promedio.
}


for(n=1;n<=cantidad;){
    eM = pedirDatosMascota();

    if (isNaN(eM)) {
        alert('No es un número'); //Agregué la alerta por ingresar un string acompañado de un condicional.

      } else {
         sE = sumar(sE, eM)
         n++
   }

}

mostrarPromedio();

const Felicitaciones = ["¡Tú y tus mascotas son geniales!", "¡Nada como los buenos amigos!", "¡Que los miaus y los woofs te acompañen!", "¡Lindo día para salir a pasear!", "¡Mi comida no se va a comprar sola!", "¡Quiero caricias en la panza!", "¡Esos muebles se ven masticables!"]; //Incorporé un array para guardar las felicitaciones si llegase a tocar un promedio justo!


if (sE/cantidad===1){
   console.log(Felicitaciones[0])
} else if (sE/cantidad===2){
   console.log(Felicitaciones[1])
} else if (sE/cantidad===3){
   console.log(Felicitaciones[2])
} else if (sE/cantidad===4){
   console.log(Felicitaciones[3])
} else if (sE/cantidad===5){
   console.log(Felicitaciones[4])
} else if (sE/cantidad===6){
   console.log(Felicitaciones[5])
} else {console.log("¡Que sean felices por siempre juntos!")}

console.log( "En éste array existían " +Felicitaciones.length +" Felicitaciones posibles y te tocó la correspondiente al promedio de edad " + `${sE/cantidad}`); //Utilicé la propiedad "lenght" para imprimir por consola la cantidad de felicitaciones contenidas en el array

//Agregué el método de búsqueda y filtrado de array "IndexOf" y le di salida por consola.

if (sE/cantidad===1){
   console.log("Tu felicitiación fué la número " + Felicitaciones.indexOf ("¡Tú y tus mascotas son geniales!"))
} else if (sE/cantidad===2){
   console.log("Tu felicitiación fué la número " + Felicitaciones.indexOf ("¡Nada como los buenos amigos!"))
} else if (sE/cantidad===3){
   console.log("Tu felicitiación fué la número " + Felicitaciones.indexOf ("¡Que los miaus y los woofs te acompañen!"))
} else if (sE/cantidad===4){
   console.log("Tu felicitiación fué la número " + Felicitaciones.indexOf ("¡Lindo día para salir a pasear!"))
} else if (sE/cantidad===5){
   console.log("Tu felicitiación fué la número " + Felicitaciones.indexOf ("¡Mi comida no se va a comprar sola!"))
} else if (sE/cantidad===6){
   console.log("Tu felicitiación fué la número " + Felicitaciones.indexOf ("¡Quiero caricias en la panza!"))
} 


//Construí un objeto que voy a utilizar en el futuro.

class Mascota{
   constructor(nombre, edad, especie) {
       this.nombre = nombre;
       this.edad   = edad;
       this.especie  = especie;
   }
   hablar(){
       console.log("Hola yo soy "+ this.nombre+ " Tengo "+ this.edad+ " años y soy un " + this.especie);
   }
}
const mascota1 = new Mascota("Jacky", 5, "Gatito");
mascota1.hablar();


//Agregué un objeto "Date" para clarificar la hora de juego con salida por consola.


console.log( "El día y la hora a la que jugaste "+new Date() )



//Defini el innerHTML del elemento con una plantilla de texto.

const michis = [{ id: 1,  nombre: "Soldado", edad: 12 },
                  {  id: 2,  nombre: "Andromeda", edad: 5 },
                  {  id: 3,  nombre: "Platón"  , edad: 7},
                  {  id: 4,  nombre: "Merlín" , edad: 10}];

//Iteré el array con "for...of"

for (const animales of michis) {
    let contenedor = document.createElement("div");
    
    contenedor.innerHTML = `<h3> ¡Hola! Yo soy el michi número ${animales.id} :D </h3>
                            <p>  Mi nombre es: ${animales.nombre}</p>
                            <b> Y tengo ${animales.edad} añitos :3 </b>`;
    document.body.appendChild(contenedor);
}

//Le dí la órden de crear nodos modificando el DOM con el nombre de los gatitos en el array.