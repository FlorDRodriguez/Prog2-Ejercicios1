//Crear un array llamado numeros impares e inicializarlo con 20 elementos
const nrosImpares = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39];

function Impares (nrosImpares){
    console.info("En el array: " + nrosImpares);
    for (let index = 0; index < nrosImpares.length; index++) {
        const element = nrosImpares[index];
        if (element % 2 ==! 0) {
            console.info(element + " es IMPAR");
        }
        
    }
    
}

console.info(Impares(nrosImpares));