var pregunta = prompt("Qué operación escoges?")
var pregunta1 = parseInt(pregunta)

function Suma() {
    var x = prompt("Escribe un número:")
    var x1 = parseInt(x)
    var y = prompt("Escribe otro número:")
    var y1 = parseInt(y)

    document.write(x1 + y1)
}

function Resta() {
    var x = prompt("Escribe un número:")
    var x1 = parseInt(x)
    var y = prompt("Escribe otro número:")
    var y1 = parseInt(y)

    document.write(x1 - y1)
}

function Multiplicación() {
    var x = prompt("Escribe un número:")
    var x1 = parseInt(x)
    var y = prompt("Escribe otro número:")
    var y1 = parseInt(y)

    document.write(x1 * y1)
}

function División() {
    var x = prompt("Escribe un número:")
    var x1 = parseInt(x)
    var y = prompt("Escribe otro número:")
    var y1 = parseInt(y)

    document.write(x1 / y1)
}

if (pregunta1 === 1) {
    Suma()
} else if (pregunta1 === 2) {
    Resta()
} else if (pregunta1 === 3){
    Multiplicación()
} else if (pregunta1 === 4) {
    División()
} else {
    alert("ERROR")
}