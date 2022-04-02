// Código para los cálculos en cuadrados

console.group("Cuadrados");

var lado = 5;
var perimetro = lado * 4;
var area = Math.pow(lado,2);

console.log(`Los lados del cuadrado miden: ${lado} cm`);

console.log(`El perímetro del cuadrado es: ${perimetro} cm`);

console.log(`El área del cuadrado es: ${area} cm^2`);

console.groupEnd();

// Código para los cálculos en triangulos
console.group("Triangulos");

var triangulo_lado1 = 3;
var triangulo_lado2 = 4;
var triangulo_base = 5;
var triangulo_altura = 7;

var tringuloPerimetro = triangulo_lado1 + triangulo_lado2 + triangulo_base;
var tranguloArea = (triangulo_base * triangulo_altura) / 2;

console.log(`Los lados del triángulo son: ${triangulo_lado1}, ${triangulo_lado2}, ${triangulo_base}`);

console.log(`El perímetro del tríangulo es: ${tringuloPerimetro} cm`);

console.log(`El área del triángulo es: ${tranguloArea}`);

console.groupEnd();


// Código pra los cálculos de círculos
console.group("Círculos")

var circulo_radio = 7;
var circulo_diametro = circulo_radio * 2;
var PI = Math.PI;
var circulo_cincunferencia = circulo_diametro * PI;
var circulo_area = PI * Math.pow(circulo_radio,2);

console.log(`El perímetro del círculo es = ${circulo_cincunferencia}`);
console.log(`El área del círculo es = ${circulo_area}`);


console.groupEnd();