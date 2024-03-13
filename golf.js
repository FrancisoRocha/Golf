/*
En el juego de Golf, cada agujero tiene un par, que significa, el número promedio de strokesque se espera que haga un golfista para hundir la pelota en el agujero para completar el juego. 

Dependiendo de qué tan por encima o por debajo del parestén tus strokes, hay un nombre diferente.

Tu función recibirá los argumentos pary strokes. Devuelve la cadena correcta según esta tabla que muestra los golpes en orden de prioridad; superior (más alto) a inferior (más bajo):

--------------------------------------
|Golpes (golpes)|   |   Devuelve    |
|---------------|   |---------------|
|        1      |   |"Hole-in-one!" |
|---------------|   |---------------| 
|    <= par - 2 |   |   "Eagle"     |
|---------------|   |---------------| 
|    par - 1	|   |   "Birdie"    |
|---------------|   |---------------| 
|    par        |   |    "Par"      |
|---------------|   |---------------| 
|    par + 1    |   |   "Bogey"     |   
|---------------|   |---------------| 
|    par + 2	|   | "Double Bogey"|
|---------------|   |---------------| 
|   >= par + 3  |   |   "Go Home"   |
|---------------|   |---------------| 

par y strokes siempre serán numéricos y positivos. Hemos añadido un arreglo de todos los nombres para tu conveniencia.
*/
const name = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore (par, strokes){

    if(strokes === 1){ // VERIFICACIO SI EL JUGADOR HIZO UN "HOYO EN UNO"
        return "Hole-in-one!";
    }else if(strokes <= par - 2){ // VERIFICA DI EL JUDADO HIZO  DOS GOLPES MENOS QUE EL PAR
        return "Eagle";
    }else if(strokes === par - 1){ // VERIFICA SI EL JUGADOR HIZO UN GOLPE MENOS QUE EL PAR
        return "Birdie";
    }else if(strokes === par){ // VERIFICA SI EL JUGADOR HIZO UN PAR
        return "Par";
    }else if(strokes === par +1){ // VERIFIA SI EL JUGADOR HIZO UN GOLPE MAS QUE EL PAR
        return "Bogey";
    }else if(strokes === par +2){ // VERIFICA SI EL JUGADOR HIZO DOS GOLPES MAS QUE EL PAR
        return "Double Bogey";
    }else if(strokes >= par +3){ // VERIFICA SI EL JUGADOR HIZO TRES O MAS GOLPES QUE EL PAR
        return "Go Home!";
    }

    return "Change Me";
}
console.log(golfScore(5, 9));
/*
golfScore(4, 1) debe devolver la cadena Hole-in-one!
golfScore(4, 2) debe devolver la cadena Eagle
golfScore(5, 2) debe devolver la cadena Eagle
golfScore(4, 3) debe devolver la cadena Birdie
golfScore(1, 1) debe devolver la cadena Hole-in-one!
golfScore(4, 5) debe devolver la cadena Bogey
golfScore(4, 6) debe devolver la cadena Double Bogey
golfScore(4, 7) debe devolver la cadena Go Home!
golfScore(5, 9) debe devolver la cadena Go Home!

*/