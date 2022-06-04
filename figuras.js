//condigo del cuadrado
console.group("cuadrados");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado es : " + perimetroCuadrado + "cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("el area del cuadrado es : " + areaCuadrada + "cm cuadrados");
console.groupEnd();

//condigo del triangulo
console.group("triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("los lados del trángulo miden: "
 + ladoTriangulo1 
 + "cm," 
 + ladoTriangulo1 
 + "cm, " 
 + baseTriangulo 
 + "cm"
 );

 const alturaTriangulo = 5.5;
 console.log("la altura del triangulo es : " + alturaTriangulo + "cm");

 const perimetroTriangulo = ladoTriangulo1 +ladoTriangulo2 + baseTriangulo
 console.log("el perimetro del triangulo es : " + perimetroTriangulo + "cm");

 const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
 console.log("el area del triángulo es : " + areaTriangulo + "cm");

 console.groupEnd();

 //código del círculo
 console.group("Círculos");

 //radio
const radioCirculo = 4;
console.log("el radio del ciurculo es : " + radioCirculo + "cm");



//diametro
const diametroCirculo = radioCirculo * 2;
console.log("el diametro del ciurculo es : " + diametroCirculo + "cm");

//PI
//const PI = 3.1415;
const PI = Math.PI;
console.log("PI es : " + PI );

//Perimetro o circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("el perimetro del ciurculo es : " + perimetroCirculo + "cm");
//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("el area del ciurculo es : " + areaCirculo + "cm cuadrados");
 console.groupEnd();