//creando arreglos
//const lista1 =  [
//    100,
//    200,
//    300,
//    500,
//];

//let sumaLista1 = 0;
//crear variable y asignarle un valor

//creando ciclo for
//creando la variable i dentro del ciclo for
//for (let i = 0; i < lista1.length; i++)  {
//    sumaLista1 = sumaLista1 + lista1 [i];
//}

//const promedioLista1 = sumaLista1 / lista1.length;
 
function calcularMediaAritmetica(lista){
    //let sumaLista = 0;
   // for (let i = 0; i< lista.length; i++){
   //     sumaLista = sumaLista + lista[i];

   // }
   //metodo reduce va a ir sumando cada elemento
   const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;

    }
   );
   
   const promedioLista = sumaLista / lista.length;
    //toda funcion debe retornar un valor con return
    return promedioLista;

}