/* code to calculate mediaAritmetica starts */


function calcularMediaAritmetica(listaDatos) {

    const sumaLista = listaDatos.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / listaDatos.length;

    return promedioLista;

}


/* code to calculate mediana starts */

/* ---------- Main auxiliar functions ------------ */

function ordenarLista (a, b) { // Comparative function to use with .sort at function calculoMediana ()
    return a - b;
}

function validacionPar (cantidadElementos) { // Par nonPar function to define the medianaAritmetica algorith

    if (cantidadElementos % 2 === 0) {
        return true;
    } else {
        return false;
    }

}

/* --------- Mediana algorith Starts --------- */

let mediana

function calculoMediana (lista) {

    const listaOrdenada = lista.sort(ordenarLista); // To sort disordered elements in teh array
    console.log(`El arreglo ordenado es: ${listaOrdenada}`);

    const NumElementosLista = listaOrdenada.length;  // Define array lenght

    const posicionMediana = listaOrdenada.length / 2; // Define mediana position at Array

    if (validacionPar(listaOrdenada.length)){ // call validacionPar function() *line 40* 

        const item1 = listaOrdenada[posicionMediana -1];
        const item2 = listaOrdenada[posicionMediana]; 

        mediana = (item1 + item2) / 2;
        
        return `La mediana de nuestro arreglo está entre la posición ${posicionMediana -1} y la posición ${posicionMediana} y su valor es: ${mediana}`;

    } else {

        mediana = lista[parseInt(posicionMediana)];
        return `La mediana está en la posición ${parseInt(posicionMediana)} y su valor es ${mediana}`;

        }
}

