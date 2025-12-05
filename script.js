const claves = {
    "sistema" : "La segunda clave se encuentra en un pasillo cercano al cartel de \"¡Me recibi!\". Pista: busca las Aulas 200",
    "computadora" : "La tercera clave se encuentra en un edificio rojo de dos plantas. Pista: esta enfrente del pasillo de las Aulas 200.",
    "redes" : "La cuarta clave se encuentra en un pasillo ubicado al lado del escenario. Pista: busca las Aulas 300",
    "programacion" : "La quinta y anteultima clave se encuentra en un gran edificio frente a la Aulas 300. Pista: lugar para leer en silencio.",
    "algoritmo" : "La ultima clave se encuentra en un pasillo cercano a las Aulas 300. Pista: busca un cartel de ERROR! muy conocido en internet."
}

const ordenClaves = ["sistema", "computadora", "redes","programacion","algoritmo","codigo"]
let progreso = 0

const boton = document.getElementById("boton")
const input = document.getElementById("clave")

/*div pistas*/
const pistaDiv = document.createElement("div")
pistaDiv.id = "pista"
pistaDiv.textContent = "La primera clave se encuentra en el edificio central, donde haya variedad de libros a la vista. Pista: busca las Aulas 100"
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
