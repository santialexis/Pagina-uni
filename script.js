const claves = {
                "inicio" : "pista a clave 1",
                "clave 1" : "pista a clave 2",
                "clave 2" : "pista a clave 3",
                "clave 3" : "pista a clave 4",
                "clave 4" : "pista a clave 5"
            }

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
errorDiv.style.color = "red"
errorDiv.style.marginTop = "10px"
errorDiv.hidden = true
document.body.appendChild(errorDiv)

/*div primera pista*/
pistaDiv.textContent = claves["inicio"]
pistaDiv.hidden = false

boton.addEventListener("click", () => {
    const passwd = input.value.toLowerCase()
    if (claves[passwd]) {
        pistaDiv.textContent = claves[passwd]
        errorDiv.hidden = true
    } else {
        errorDiv.textContent = "Error 404: Clave incorrecta"
        errorDiv.hidden = false
    }
})