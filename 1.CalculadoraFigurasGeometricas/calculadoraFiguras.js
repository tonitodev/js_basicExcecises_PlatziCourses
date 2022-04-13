//------------------------- Calculo de figuras geométricas con funciones -------------------------------------//

/* Cálculos cuadrado */

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado) {
    return Math.pow(ladoCuadrado,2);
}

/* Cálculo trángulos */

function perimetroTriangulo(triangulo_lado1, triangulo_lado2, triangulo_base) {
    return triangulo_lado1 + triangulo_lado2 + triangulo_base;
}

function areaTriangulo(triangulo_base, triangulo_altura) {
    return (triangulo_base * triangulo_altura) / 2;
}

/* Cálculo cículos */

function diametroCirculo(radio) {
    return radio * 2;
}

function circunferenciaCirculo(radio) {
    var diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio) {
    return Math.PI * Math.pow(radio,2);
}


/* Cálculo de cuadrado con datos desde el HTML */

function calcularPerimetroCuadrado() {

    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}
    
function calcularAreaCuadrado() {

    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}

/* Cálculos de triángulo con datos desde el HTML */

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = parseFloat(input1.value);

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = parseFloat(input2.value);

    const inputB = document.getElementById("inputTrianguloB");
    const valueB = parseFloat(inputB.value);


    const perimetro = perimetroTriangulo(value1, value2, valueB);
    alert(perimetro);
}

function calcularAreaTriangulo() {

    const inputB = document.getElementById("inputTrianguloB");
    const valueB = parseFloat(inputB.value);

    const inputH = document.getElementById("inputTrianguloH");
    const valueH = parseFloat(inputH.value);

    const area = areaTriangulo(valueB, valueH);
    alert(area);
}