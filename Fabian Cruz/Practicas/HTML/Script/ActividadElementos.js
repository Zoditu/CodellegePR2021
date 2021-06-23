var elementoA = 'Oxigeno',
    elementoB = 'Azufre',
    elementoC = 'Cobre',
    elementoD = 'Plata';

function Mezcla(elemento1, elemento2) {
    console.log('El ' + elemento1 + ' y el ' + elemento2 + ':');
    if ((elemento1 === elementoC && elemento2 === elementoB) || (elemento1 === elementoB && elemento2 === elementoC)) {
        console.log('Huele raro y se ve verde azulado');
    } else if ((elemento1 === elementoD && elemento2 === elementoB) || (elemento1 === elementoB && elemento2 === elementoD)) {
        console.log('Huele raro y se ve cromado');
    } else if ((elemento1 === elementoC && elemento2 === elementoA) || (elemento1 === elementoA && elemento2 === elementoC)) {
        console.log('Se ve como la estatua de la libertad');
    } else if ((elemento1 === elementoD && elemento2 === elementoA) || (elemento1 === elementoA && elemento2 === elementoD)) {
        console.log('Ya le dañamos la joyería a la abuela');
    } else if ((elemento1 === elementoC && elemento2 === elementoD) || (elemento1 === elementoD && elemento2 === elementoC)) {
        console.log('Eso es joyería rara y cara :V');
    } else if ((elemento1 === elementoA && elemento2 === elementoB) || (elemento1 === elementoB && elemento2 === elementoA)) {
        console.log('Es esto un agua termal mortal?');
    } else {
        console.log('No reacciono nada');
    }
}

Mezcla(elementoB,elementoC);
Mezcla(elementoD,elementoB);
Mezcla(elementoA,elementoC);
Mezcla(elementoA,elementoD);
Mezcla(elementoD,elementoC);
Mezcla(elementoB,elementoA);
Mezcla(elementoB,elementoB);