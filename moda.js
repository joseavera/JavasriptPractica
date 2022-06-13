//Aqui vamos a crear eun objeto en js, vamos a transformar los array en objetos
/*const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];

const lista1Count = {

};

//metodo map recorrera el array
lista1.map(
    fuction (elemento){
        if(lista1Count[elemento]){
            //lista1Count[elemento] + 1; la misma forma de hacerlo aqui abajo
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;  
            //si no existe el elemento aqui lo creara

        }

        
    }

);
*/
const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];
  
  const lista1Count = {};
  
  lista1.map(
    function (elemento) {
      if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
      } else {
        lista1Count[elemento] = 1;
      }
    }
  );
//object.entries le enviamos como argumento el objeto que queremos encontrar en un array
  //const lista1Array = Object.entries(lista1Count).sort(
  //  function (valorAcumulado, nuevoValor){
  //      valorAcumulado - nuevoValor

  //  }
  //);

 const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length -1];
