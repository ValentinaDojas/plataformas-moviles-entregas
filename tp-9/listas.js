var listaNumerosEjemplo = [2,4,6,-1,5,-4,0];


/* 01 */
function invertirLista(listaDeNumeros) {
    return listaDeNumeros.slice().reverse();
}
console.log("invertirLista([2,3,4]): ", invertirLista([2,3,4]))


/* 02 */
function sumarLista(listaDeNumeros) {
    return listaDeNumeros.reduce((suma, numero) => suma + numero, 0);
}
console.log("sumarLista([2,3,4]): ", sumarLista([2,3,4]))


/* 03 */
function contarElementosLista(listaDeNumeros) {
    return listaDeNumeros.length;
}
console.log("contarElementosLista([2,3,4]): ", contarElementosLista([2,3,4]))


/* 04 */
function calcularPromedio(listaDeNumeros) {
    if (listaDeNumeros.length === 0) return 0;
    return sumarLista(listaDeNumeros) / listaDeNumeros.length;
}
console.log("calcularPromedio([2,3,4]): ", calcularPromedio([2,3,4]))
console.log("calcularPromedio(listaNumerosEjemplo): ", calcularPromedio(listaNumerosEjemplo))


/* 05 */
function triplicarLista(listaDeNumeros) {
    return listaDeNumeros.map(numero => numero * 3);
}
console.log("triplicarLista([1, 2, 3]): ", triplicarLista([1, 2, 3]));


/* 06 */
function crearListaDeNumeros(inicio, fin) {
    const lista = [];
    for (let i = inicio; i <= fin; i++) {
        lista.push(i);
    }
    return lista;
}
console.log("crearListaDeNumeros(2,5): ", crearListaDeNumeros(2,5))


/* 07 */
function ordenarDeMayorAMenor(listaDeNumeros) {
    return listaDeNumeros.slice().sort((a, b) => b - a);
}
console.log("ordenarDeMayorAMenor([2,3,4]): ", ordenarDeMayorAMenor([2,3,4]))
console.log("ordenarDeMayorAMenor(listaNumerosEjemplo): ", ordenarDeMayorAMenor(listaNumerosEjemplo))


/* 08 */
function encontrarNumeroMayor(listaDeNumeros) {
    return Math.max(...listaDeNumeros);
}
console.log("encontrarNumeroMayor([2,3,4]): ", encontrarNumeroMayor([2,3,4]))
console.log("encontrarNumeroMayor(listaNumerosEjemplo): ", encontrarNumeroMayor(listaNumerosEjemplo))


/* 09 */
function ordenarPalabrasPorLongitud(listaDePalabras) {
    return listaDePalabras.slice().sort((a, b) => a.length - b.length);
}
console.log("ordenarPalabrasPorLongitud(['abc', 'a', 'ab']): ", ordenarPalabrasPorLongitud(['abc', 'a', 'ab']))


/* 10  */
function encontrarPalabraMasCorta(listaDePalabras) {
    return listaDePalabras.reduce((masCorta, palabra) => 
        palabra.length < masCorta.length ? palabra : masCorta
    );
}
console.log("encontrarPalabraMasCorta(['abc', 'a', 'ab']): ", encontrarPalabraMasCorta(['abc', 'a', 'ab']))


/* 11 */
function filtrarSoloPositivos(listaDeNumeros) {
    return listaDeNumeros.filter(numero => numero > 0);
}
console.log("filtrarSoloPositivos([1,-1,0]): ", filtrarSoloPositivos([1,-1,0]))
console.log("filtrarSoloPositivos(listaNumerosEjemplo): ", filtrarSoloPositivos(listaNumerosEjemplo))


/* 12 */
function contarAprobados(listaDeNotas) {
    return listaDeNotas.filter(nota => nota >= 6).length;
}
console.log("contarAprobados([10, 4, 6, 7, 1, 9]): ", contarAprobados([10, 4, 6, 7, 1, 9]))


/* 13 */
function filtrarSoloTruthy(listaDeValores) {
    return listaDeValores.filter(valor => Boolean(valor));
}
console.log("filtrarSoloTruthy(): ", filtrarSoloTruthy(["Hola", "", null, 1, 0, -1, undefined, [], {}]))

/* 14 */
function enumerarLista(listaDePalabras) {
    if (listaDePalabras.length === 0) return "";
    if (listaDePalabras.length === 1) return listaDePalabras[0] + ".";
    
    const ultimaPalabra = listaDePalabras[listaDePalabras.length - 1];
    const palabrasAnteriores = listaDePalabras.slice(0, -1);
    
    return palabrasAnteriores.join(", ") + " y " + ultimaPalabra + ".";
}
console.log("enumerarLista(): ", enumerarLista(["Han", "Leia", "Luke", "Yoda"]))