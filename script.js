const claves = {
                "inicio" : "pista: la clave es \"clave 1\"",
                "clave 1" : "pista: la clave es \"clave 2\"",
                "clave 2" : "pista: la clave es \"clave 3\"",
                "clave 3" : "pista: la clave es \"clave 4\"",
                "clave 4" : "pista: la clave es \"clave 5\"",
                "clave 5" : "pista: la clave es \"clave 6\""
            }

const ordenClaves = ["clave 1", "clave 2", "clave 3", "clave 4","clave 5","clave 6"]
let progreso = 0

const boton = document.getElementById("boton")
const input = document.getElementById("clave")

/*div pistas*/
const pistaDiv = document.createElement("div")
pistaDiv.id = "pista"
pistaDiv.textContent = claves["inicio"]
document.body.appendChild(pistaDiv)

/*div clave incorrecta*/
const errorDiv = document.createElement("div")
errorDiv.id = "error"
errorDiv.hidden = true
document.body.appendChild(errorDiv)

boton.addEventListener("click", () => {
    const passwd = input.value.toLowerCase().trim()
    if(passwd === ordenClaves[progreso]){ // Clave correcta en el orden esperado
        if (passwd === "clave 6") {
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