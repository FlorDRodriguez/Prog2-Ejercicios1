//Crear un array con 10 números y pasarlos a una función que calcule la suma de todos. Usar for.
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function Suma (numeros){
    let suma = 0;
    for (let index = 0; index < numeros.length; index++) {
        const element = numeros[index];
        suma = suma + element;
    }
    return "La suma de todos los números del array " + numeros + " es " + suma;
}

console.info(Suma(numeros));