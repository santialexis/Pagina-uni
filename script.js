const claves = {
    "sistema" : "pista: la clave es \"computadora\"",
    "computadora" : "pista: la clave es \"redes\"",
    "redes" : "pista: la clave es \"programacion\"",
    "programacion" : "pista: la clave es \"algoritmo\"",
    "algoritmo" : "pista: la clave es \"codigo\""
}

const ordenClaves = ["sistema", "computadora", "redes","programacion","algoritmo","codigo"]
let progreso = 0

const boton = document.getElementById("boton")
const input = document.getElementById("clave")

/*div pistas*/
const pistaDiv = document.createElement("div")
pistaDiv.id = "pista"
pistaDiv.textContent = "1º Pista: la clave se encuentra en el edificio central, donde haya libros a la vista."
document.body.appendChild(pistaDiv)

/*div clave incorrecta*/
const errorDiv = document.createElement("div")
errorDiv.id = "error"
errorDiv.hidden = true
document.body.appendChild(errorDiv)

boton.addEventListener("click", () => {
    const passwd = input.value.toLowerCase().trim()
    if(passwd === ordenClaves[progreso]){ // Clave correcta en el orden esperado
        if (passwd === "algoritmo") {
            document.body.innerHTML = `
                <h1>¡Felicidades! Has completado el juego.</h1>
                <div>
                    <p>
                        Has demostrado tus habilidades en este desafío de búsqueda del tesoro en la UNLu. 
                        Esperamos que hayas disfrutado de la aventura y aprendido algo nuevo en el camino.
                    </p>
                    <p>
                        Por favor, regresa al puesto de donde comenzaste para recibir tu recompensa. 
                        ¡Gracias por participar y sigue explorando el mundo de la informática!
                    </p>
                </div>
                <a href="https://www.unlu.edu.ar/carg-sistemas.html" target="_blank">Conoce más sobre la Licenciatura en Sistemas de Información</a>
            `;
        } else {
            pistaDiv.textContent = claves[passwd];
            errorDiv.hidden = true;
            progreso++;
            input.value = "";
        }
    } else { //clave incorrecta
        errorDiv.textContent = "Error 404: Clave incorrecta";
        errorDiv.hidden = false;
    }
})