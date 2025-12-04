const claves = {
                "clave 1" : "pista a clave 2",
                "clave 2" : "pista a clave 3",
                "clave 3" : "pista a clave 4",
                "clave 4" : "pista a clave 5"
            };

const boton = document.getElementById("boton")
const input = document.getElementById("clave")

const pistaDiv = document.createElement("div");
pistaDiv.id = "pista";
document.body.appendChild(pistaDiv);

boton.addEventListener("click", () => {
    const passwd = input.value.toLowerCase()
    if(claves[passwd]){
        pistaDiv.textContent = claves[passwd];
        pistaDiv.hidden = false;
    } else {
        alert("Clave incorrecta");
        pistaDiv.hidden = true;
    }
})