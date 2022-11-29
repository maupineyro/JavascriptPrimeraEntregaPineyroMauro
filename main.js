//simulador de electrónica básica v1.0
let salida = "";
do {
    //aqui copio el bloque switch
    let opcion = prompt("Seleccione una de las siguientes opciones:\n \n 1 - Para calcular Ley de Ohm, escriba 1\n \n 2 - Para calcular serie de resistores, escriba 2\n \n 3 - Para calcular paralelo de resistores, escriba 3 \n")
    switch (opcion) {
        //primer caso: ley de Ohm, permite calcular intensidades de corriente, voltaje o resistencias en un circuito electrónico.Su formula es I= V/R 
        case "1":
            //calcular intensidad de corriente, usando función flecha
            alert(" ha seleccionado la opción para calcular: Ley de Ohm");
            let tension = parseInt(prompt("indique valor de tensión expresados en voltios"));
            let resistencia = parseInt(prompt("indique valor de resistencia expresados en ohmios"));
            let division = (tension, resistencia) => { return tension / resistencia; }
            let corriente = division(tension, resistencia);
            console.log(corriente)
            alert("la intensidad de corriente calculada es " + corriente + " amperios");
            break;
        //2do caso: Resistencia total en serie, cuya formula es RS= r1 +r2 + r3... +Rn
        case "2":
            alert(" ha seleccionado la opción para calcular: serie de resistores");
            let cantidadResistores = parseInt(prompt("indique cantidad de resistores para el calculo serie")); // el usuario deberá indicar la cantidad de resistores
            let valorResistor; //r1, r2,r3, rn
            let resistenciaSerie = 0;
            for (i = 1; i <= cantidadResistores; i++) {
                valorResistor = parseInt(prompt("indique el valor del resistor " + i + "(en Ohmios) "));
                resistenciaSerie = resistenciaSerie + valorResistor;
            }
            console.log("la resistencia total en serie es " + resistenciaSerie + " ohmios");
            alert("la resistencia serie total es " + resistenciaSerie + " ohmios");
            break;
        //3er caso:resistores en paralelo, cuya formula es 1/Rp = 1/r1 + 1/r2 + 1/rn
        case "3":
            alert(" ha seleccionado la opción para calcular: paralelo de resistores");
            let cantidadResistoresParalelo = parseInt(prompt("indique cantidad de resistores para el calculo paralelo")); // el usuario deberá indicar la cantidad de resistores
            let valorResistorParalelo; //r1, r2,r3, rn
            let inversaResistenciaParalelo = 0;
            let resistenciaParalelo = 0;
            for (i = 1; i <= cantidadResistoresParalelo; i++) {
                valorResistorParalelo = parseInt(prompt("indique el valor del resistor " + i + "(en Ohmios) "));
                inversaResistenciaParalelo = inversaResistenciaParalelo + (1 / valorResistorParalelo);
                resistenciaParalelo = (1 / inversaResistenciaParalelo)
            }
            console.log("la resistencia total en paralelo es " + resistenciaParalelo + " ohmios");
            alert("la resistencia paralelo total es " + resistenciaParalelo + " ohmios");
            break;
        default:
            alert("elegir una de las tres opciones");
            break;
    }
    // variable para salir o repetir
    salida = prompt("Escriba salir para terminar o repetir para volver al menú");
    if (salida != "repetir" && salida == "salir") {
        alert("Gracias por utilizar el simulador");
    }

} while (salida != "salir"); // va a repetir el loop mientras salida sea distinto de salir






