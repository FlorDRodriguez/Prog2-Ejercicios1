//Crear un array con 5 objetos persona y luego iterar y mostrar sus nombres y apellidos.


const persona1 = {
    nombre: "Florencia",
    apellido: "Rodriguez"
};

const persona2 = {
    nombre: "Julieta",
    apellido: "Massacesi"
};

const persona3 = {
    nombre: "Eliana",
    apellido: "Fontana"
};

const persona4 = {
    nombre: "Abi",
    apellido: "Coronel"
};

const persona5 = {
    nombre: "Raquel",
    apellido: "Garcia"
};

const personas = [persona1, persona2, persona3, persona4, persona5];

for (let index = 0; index < personas.length; index++) {
    const element = personas[index];
    console.info(element.nombre + " " + element.apellido);
}

