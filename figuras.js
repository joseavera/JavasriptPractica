//condigo del cuadrado
console.group("cuadrados");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}


//console.log("el perimetro del cuadrado es : " + perimetroCuadrado + "cm");

//const areaCuadrada = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
}

//console.log("el area del cuadrado es : " + areaCuadrada + "cm cuadrados");
console.groupEnd();

//condigo del triangulo
console.group("triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log("los lados del trángulo miden: "
// + ladoTriangulo1 
// + "cm," 
// + ladoTriangulo1 
// + "cm, " 
// + baseTriangulo 
// + "cm"
// );

 //const alturaTriangulo = 5.5;
 //console.log("la altura del triangulo es : " + alturaTriangulo + "cm");
function alturaTriangulo(alturaTriangulo){
    return alturaTriangulo
}


 //const perimetroTriangulo = ladoTriangulo1 +ladoTriangulo2 + baseTriangulo
 //console.log("el perimetro del triangulo es : " + perimetroTriangulo + "cm");
 function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
  }


 //const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
 //console.log("el area del triángulo es : " + areaTriangulo + "cm");
 function areaTriangulo(base, altura) {
    return (base * altura) / 2;
  }


 console.groupEnd();

 //código del círculo
 console.group("Círculos");

 //radio
//const radioCirculo = 4;
//console.log("el radio del ciurculo es : " + radioCirculo + "cm");



//diametro
//const diametroCirculo = radioCirculo * 2;
//console.log("el diametro del ciurculo es : " + diametroCirculo + "cm");
function diametroCirculo(radio) {
    return radio * 2;
  }



//PI
//const PI = 3.1415;
const PI = Math.PI;
console.log("PI es : " + PI );

//Perimetro o circunferencia
//const perimetroCirculo = diametroCirculo * PI;
//console.log("el perimetro del ciurculo es : " + perimetroCirculo + "cm");
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
  }

//Area
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("el area del ciurculo es : " + areaCirculo + "cm cuadrados");
// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
  }


 console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  }
  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
  }
