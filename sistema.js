// posibles movimientos de las fichas en el tablero


function movimientos(inicio,final,colorJugador) {
    mostrarTablero()
    let inicioVer = 8 - parseInt(inicio[1])
    let inicioHor = inicio.charCodeAt(0) - "a".charCodeAt(0);
    let finalVer = 8 - parseInt(final[1])
    let finalHor = final.charCodeAt(0) - "a".charCodeAt(0);
    
    //para que el Peon se mueva dos haci arriba en la misma fila
    if ((tablero[inicioVer][inicioHor]==="p.B" && inicioHor===finalHor && finalVer>=inicioVer -2) || (tablero[inicioVer][inicioHor]==="p.N" && inicioHor===finalHor && finalVer>=inicioVer - 2)) {
        if (hayPiezasEnElCamino(inicioVer, inicioHor, finalVer, finalHor)) {
            alert("No puedes saltar sobre otras piezas. Elige un movimiento válido.");
            return;
        }else{
            tablero[finalVer][finalHor] = tablero[inicioVer][inicioHor];
            tablero[inicioVer][inicioHor]="   ";
            mostrarTablero() 
            
        }
    }
    // Movimientos de la Torre
    else if (((tablero[inicioVer][inicioHor]==="T.B") && (inicioHor===finalHor && finalVer>=inicioVer-7 || inicioVer===finalVer && finalHor>=inicioHor-7)) || ((tablero[inicioVer][inicioHor]==="T.N") && (inicioHor===finalHor && finalVer>=inicioVer-7 || inicioVer===finalVer && finalHor>=inicioHor-7))) {
        if (hayPiezasEnElCamino(inicioVer, inicioHor, finalVer, finalHor)) {
            alert("No puedes saltar sobre otras piezas. Elige un movimiento válido.");
            return;
        }else{
            tablero[finalVer][finalHor] = tablero[inicioVer][inicioHor];
            tablero[inicioVer][inicioHor]="   ";
            mostrarTablero() 
            
        }
    }
    // Movimientos del Caballo
    else if (((tablero[inicioVer][inicioHor]==="C.B") && (Math.abs(finalVer-inicioVer) === 2 && Math.abs(finalHor-inicioHor) === 1 || Math.abs(finalVer-inicioVer) === 1 && Math.abs(finalHor-inicioHor) === 2 ))||((tablero[inicioVer][inicioHor]==="C.N") && (Math.abs(finalVer-inicioVer) === 2 && Math.abs(finalHor-inicioHor) === 1 || Math.abs(finalVer-inicioVer) === 1 && Math.abs(finalHor-inicioHor) === 2 ))) {
        tablero[finalVer][finalHor] = tablero[inicioVer][inicioHor];
        tablero[inicioVer][inicioHor]="   ";
        mostrarTablero()
    }
    // Movimiento del Alfil
    else if ((tablero[inicioVer][inicioHor]==="A.B" && Math.abs(finalVer-inicioVer)=== Math.abs(finalHor-inicioHor))|| (tablero[inicioVer][inicioHor]==="A.N" && Math.abs(finalVer-inicioVer)=== Math.abs(finalHor-inicioHor)) ) {
        if (hayPiezasEnElCamino(inicioVer, inicioHor, finalVer, finalHor)) {
            alert("No puedes saltar sobre otras piezas. Elige un movimiento válido.");
            return;
        }else{
            tablero[finalVer][finalHor] = tablero[inicioVer][inicioHor];
            tablero[inicioVer][inicioHor]="   ";
            mostrarTablero() 
            
        }
    }
    // Movimietnos de la Dama
    else if (((tablero[inicioVer][inicioHor]==="D.B") && (Math.abs(finalVer-inicioVer)=== Math.abs(finalHor-inicioHor) || (inicioHor===finalHor && finalVer>=inicioVer-7) || (inicioVer===finalVer && finalHor>=inicioHor-7))) || ((tablero[inicioVer][inicioHor]==="D.N") && (Math.abs(finalVer-inicioVer)=== Math.abs(finalHor-inicioHor) || (inicioHor===finalHor && finalVer>=inicioVer-7) || (inicioVer===finalVer && finalHor>=inicioHor-7)))) {
        if (hayPiezasEnElCamino(inicioVer, inicioHor, finalVer, finalHor)) {
            alert("No puedes saltar sobre otras piezas. Elige un movimiento válido.");
            return;
        }else{
            tablero[finalVer][finalHor] = tablero[inicioVer][inicioHor];
            tablero[inicioVer][inicioHor]="   ";
            mostrarTablero() 
            
        }
    }
    // Movimientos del Rey
    else if ((tablero[inicioVer][inicioHor]==="R.B" && finalVer>=inicioVer-1 && finalHor>=inicioHor-1) || (tablero[inicioVer][inicioHor]==="R.N" && finalVer>=inicioVer-1 && finalHor>=inicioHor-1)) {
        if (hayPiezasEnElCamino(inicioVer, inicioHor, finalVer, finalHor)) {
            alert("No puedes saltar sobre otras piezas. Elige un movimiento válido.");
            return;
        }else{
            tablero[finalVer][finalHor] = tablero[inicioVer][inicioHor];
            tablero[inicioVer][inicioHor]="   ";
            mostrarTablero() 
            
        }
    }
    //movimientos no valido
    else{
        alert("Movimiento no valido para esta ficha")
        alert("Por favor ingrese un movimiento valido para esa ficha")
        mostrarTablero()
    };
    //si uno de los dos rey esta en jaque y jaque mate
    if (estaEnJaque(colorJugador)) {
        alert('¡Jaque!');
        if (estaEnJaqueMate(colorJugador)) {
            alert('¡Jaque mate!');
            if (estaEnJaqueMate(colorJugador)==Jugador2.color) {
                alert("El Ganador Son Los "+Jugador1.color)
                if (!confirm("Quieren Jugar otra Prtida")) {
                    fleg= false;
                }else{
                    tablero=[
                        ["T.N","C.N","A.N","D.N","R.N","A.N","C.N","T.N"],
                        ["p.N","p.N","p.N","p.N","p.N","p.N","p.N","p.N"],
                        ["   ","   ","   ","   ","   ","   ","   ","   "],
                        ["   ","   ","   ","   ","   ","   ","   ","   "],
                        ["   ","   ","   ","   ","   ","   ","   ","   "],
                        ["   ","   ","   ","   ","   ","   ","   ","   "],
                        ["p.B","p.B","p.B","p.B","p.B","p.B","p.B","p.B"],
                        ["T.B","C.B","A.B","D.B","R.B","A.B","C.B","T.B"],
                    ];
                }
            }else{
                alert("El Ganador Son Los "+Jugador2.color)
                if (!confirm("Quieren Jugar otra Prtida")) {
                    fleg= false;
                }else{
                    tablero=[
                        ["T.N","C.N","A.N","D.N","R.N","A.N","C.N","T.N"],
                        ["p.N","p.N","p.N","p.N","p.N","p.N","p.N","p.N"],
                        ["   ","   ","   ","   ","   ","   ","   ","   "],
                        ["   ","   ","   ","   ","   ","   ","   ","   "],
                        ["   ","   ","   ","   ","   ","   ","   ","   "],
                        ["   ","   ","   ","   ","   ","   ","   ","   "],
                        ["p.B","p.B","p.B","p.B","p.B","p.B","p.B","p.B"],
                        ["T.B","C.B","A.B","D.B","R.B","A.B","C.B","T.B"],
                    ];
                }
            }
            // Puedes tomar acciones adicionales si el juego ha terminado
        }
    }
};


class Jugador{
    constructor(Nombre,color){
        this.Nombre=Nombre
        this.color=color
    };
};








