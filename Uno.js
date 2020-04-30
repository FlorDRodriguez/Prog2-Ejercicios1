//Crear una función que reciba como parámetro una medida en metros y me devuelva la cantidad de centimetros y otra que devuelva la cantidad de km.
const cm = 100;
const km = 0.01;

function MetrosCm (metros){
    return metros + "m equivale a " + metros*cm + "cm" ;
};

function MetrosKm (metros) {
    return metros + "m equivale a " + metros*km + "km";
};

console.info(MetrosCm(1));
console.info(MetrosKm(1));