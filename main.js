let fleg= true;

alert("Bienvenido al Simluador de Ajedrez")
alert("Por favor Introdusca el Nombre de los 2 Jugadores")
alert("Y Tener en cuenta que el Jugador 1 va a hacer las Fichas Blancas y el 2 va a hacer las Negras")

let Jugador1= new Jugador(nombres("Por favo Introdusca su nombre jugador1 "), "B");

alert("Bienvenido " + Jugador1.Nombre);

let Jugador2= new Jugador(nombres("Por favo Introdusca su nombre jugador2"),"N");

if (Jugador2.Nombre == Jugador1.Nombre) {
    while (true) {
        Jugador2 =prompt("Por favor Jugador 2 Cambie de Nombre")
        if (Jugador2.Nombre !== Jugador1.Nombre && Jugador2.Nombre !=="" && Jugador2.Nombre !==" ") {
            break;
        };
    };
};
alert("Bienvenido " + Jugador2.Nombre);
alert("Que Empiece el Juego y Buena Suerte a los 2 Jugadores ")
alert("y Por favor jugadores solo muevan las piezas que le corresponda")
mostrarTablero();
//Juego
while(fleg){
    //jugador1
    alert("Jugador1 es su Turno")
    let inicio = posicionesValidas("indique la ficha que quiere mover jugador1: "+Jugador1.Nombre);
    let final = posicionesValidas("indique adonde quiere mover la ficha jugador1: "+Jugador1.Nombre);
    movimientos(inicio,final,Jugador1.color);
    alert("Jugador 2 es su turno")
    inicio = posicionesValidas("indique la ficha que quiere mover jugador2:"+Jugador2.Nombre);
    final = posicionesValidas("indique adonde quiere mover la ficha jugador2:"+Jugador2.Nombre);
    movimientos(inicio,final,Jugador2.color);
};

