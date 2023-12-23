class Jugador{
    constructor(Nombre,color){
        this.Nombre=Nombre
        this.color=color
    };
};

//Tablero
let tablero=[
    ["T.N","C.N","A.N","D.N","R.N","A.N","C.N","T.N"],
    ["p.N","p.N","p.N","p.N","p.N","p.N","p.N","p.N"],
    ["   ","   ","   ","   ","   ","   ","   ","   "],
    ["   ","   ","   ","   ","   ","   ","   ","   "],
    ["   ","   ","   ","   ","   ","   ","   ","   "],
    ["   ","   ","   ","   ","   ","   ","   ","   "],
    ["p.B","p.B","p.B","p.B","p.B","p.B","p.B","p.B"],
    ["T.B","C.B","A.B","D.B","R.B","A.B","C.B","T.B"],
]; 

function mostrarTablero() {
    let StringTablero = "                  ";// cramos una variable que este vacia que contenga un string
    // i reccore verticalmente en el tablero de 0 a 7
    for (let i = 0; i < 8; i++) {
        // j reccore horizontalmente en el tablero dependiendo donde este i, si i es 3 j se para en el 3 y recorre hacia abajo  de 0 a 7
        for (let j = 0; j < 8; j++) {
            StringTablero += tablero[i][j] + "  "; // juntamos la variables vacia con el array [i] [j] y le damos un espacio entre i=0 y i = 1
        };
        // cada ves que recorre una linea en el tablero separa
        StringTablero += "\n"+"                    ";
    };
    alert(StringTablero);
};

function nombres(nom) {
    let jugador = prompt(nom)
    if (jugador==" "||jugador=="") {
        while (true) {
            alert("Por favor ingrese un nombre")
            jugador = prompt(nom)
            if (jugador !== "" && jugador !==" ") {
                break;
            };
        };
        
    }return jugador
};

function posicionesValidas(inicioo) {
    let movimiento = prompt(inicioo)
    if(movimiento==" "||movimiento==""){
        while (true) {
            alert("Por favor Ponga una posicion valida en el tablero")
            movimiento = prompt(inicioo)
            if ( movimiento!==" "&& movimiento!=="") {
                break;
            };
        };
    }return movimiento;
};

function hayPiezasEnElCamino(inicioVer, inicioHor, finalVer, finalHor) {
    let direccionVertical = Math.sign(finalVer - inicioVer);
    let direccionHorizontal = Math.sign(finalHor - inicioHor);
    
    for (let i = 1; i < Math.max(Math.abs(finalVer - inicioVer), Math.abs(finalHor - inicioHor)); i++) {
        let filaActual = inicioVer + i * direccionVertical;
        let columnaActual = inicioHor + i * direccionHorizontal;

        // Verifica si hay una pieza en la posición actual del camino (excluyendo las posiciones de inicio y final)
        if (tablero[filaActual][columnaActual] !== "   ") {
            // Hay una pieza en el camino
            return true;
        }
    }
    // No hay piezas en el camino
    return false;
}

function obtenerCoordenadasRey(colorRey) {
    // Implementar lógica para obtener las coordenadas del rey del color especificado
    // ...
    let comlumnas=["A","B","V","D","E","F","G","H"]
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] === "R." + colorRey) {
                let columna = comlumnas[j];
                let fila = 8 - i;  // Corregir la obtención de la fila
                return [fila,columna];
            }
        }
    }
}

function piezaAmenazaRey(filaRey, columnaRey, colorRey) {
    // Implementa lógica para verificar si alguna pieza enemiga amenaza al rey
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            let pieza = tablero[i][j];
            if (pieza !== "   " && ("B" !== colorRey || "N" !== colorRey)) {
                // Verifica si la pieza puede amenazar al rey
                if (puedePiezaAmenazarRey(i, j, filaRey, columnaRey)) {
                    alert("¡Jaque!");
                    return true; // El rey está amenazado por al menos una pieza enemiga
                }
            }
        }
    }
    return false; // El rey no está amenazado
}
// Función auxiliar para obtener el color de una pieza
function puedePiezaAmenazarRey(filaPieza, columnaPieza, filaRey, columnaRey) {
    let pieza = tablero[filaPieza][columnaPieza];

    // Lógica para el peón
    if (pieza.includes('P.N')||pieza.includes('P.B')) {
        return columnaPieza === columnaRey && (filaRey === filaPieza - 1 || filaRey === filaPieza - 2)
    }
    // Lógica para la torre
    if (pieza.includes('T.N')||pieza.includes('T.B')){
        return (columnaPieza===columnaRey && filaPieza>=filaRey-7 || filaPieza===filaRey && columnaPieza>=columnaRey-7);
    }
    if (pieza.includes('A.N')||pieza.includes('A.B')) {
            return Math.abs(filaPieza - filaRey) === Math.abs(columnaPieza - columnaRey);
    }
    if (pieza.includes("C.N")||pieza.includes("C.B")) {
        return (Math.abs(filaPieza - filaRey) === 2 && Math.abs(columnaPieza - columnaRey) === 1) || (Math.abs(columnaPieza - columnaRey) === 1 && Math.abs(filaPieza - filaRey) === 2);
    }
    if (pieza.includes("D.M")||pieza.includes("D.B")) {
        return (filaPieza === filaRey ||columnaPieza === columnaRey ||Math.abs(filaPieza - filaRey) === Math.abs(columnaPieza.charCodeAt(0) - columnaRey.charCodeAt(0)));
    }
    if (pieza.includes('R.N') || pieza.includes('R.B')) {
        return Math.abs(filaPieza - filaRey) <= 1 && Math.abs(columnaPieza - columnaRey) <= 1;
    }
    return false;
}


function estaEnJaque(color) {
    // Obtener las coordenadas del rey del color especificado
    let coordenadasRey = obtenerCoordenadasRey(color);
    // Verificar si alguna pieza enemiga amenaza al rey
    if (piezaAmenazaRey(coordenadasRey[0], coordenadasRey[1], color)) {
        return true;
    }else{
        return false
    }
}

function estaEnJaqueMate(color) {
    // Verificar si el rey está en jaque
    if (!estaEnJaque(color)) {
        return false; // El rey no está en jaque mate si no está en jaque
    }
    // Obtener las coordenadas del rey
    let coordenadasRey = obtenerCoordenadasRey(color);
    let filaRey = coordenadasRey[1];
    let columnaRey = coordenadasRey[0].charCodeAt(0) - "a".charCodeAt(0);
    // Verificar si el rey puede escapar del jaque moviéndose a una casilla libre
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let nuevaFila = filaRey + i;
            let nuevaColumna = columnaRey + j;
            // Verificar si la nueva posición está dentro del tablero
            if (nuevaFila >= 0 && nuevaFila < 8 && nuevaColumna >= 0 && nuevaColumna < 8) {
                // Verificar si la nueva posición está libre y no está amenazada
                if (tablero[nuevaFila][nuevaColumna] === "  " && !piezaAmenazaRey(nuevaFila, nuevaColumna, color)) {
                    return false; // El rey puede escapar del jaque moviéndose a esta posición
                }
            }
        }
    }
    // Si ninguna jugada libre evita el jaque, el rey está en jaque mate
    return true;
}