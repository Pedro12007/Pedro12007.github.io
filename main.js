var pregunta = prompt("Qué operación escoges?")
pregunta = parseInt(pregunta)

function Suma() {
    var x = prompt("Escribe un número:")
    x = parseInt(x)
    var y = prompt("Escribe otro número:")
    y = parseInt(y)

    document.write(x + y)
}

function Resta() {
    var x = prompt("Escribe un número:")
    x = parseInt(x)
    var y = prompt("Escribe otro número:")
    y = parseInt(y)

    document.write(x - y)
}

function Multiplicación() {
    var x = prompt("Escribe un número:")
    x = parseInt(x)
    var y = prompt("Escribe otro número:")
    y = parseInt(y)

    document.write(x * y)
}

function División() {
    var x = prompt("Escribe un número:")
    x = parseInt(x)
    var y = prompt("Escribe otro número:")
    y = parseInt(y)

    document.write(x / y)
}

if (pregunta === 1) {
    Suma()
} else if (pregunta === 2) {
    Resta()
} else if (pregunta === 3){
    Multiplicación()
} else if (pregunta === 4) {
    División()
} else {
    alert("ERROR")
    document.write("Error, no has puesto una operación existente.")
}