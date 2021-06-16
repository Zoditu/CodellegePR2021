function myFunction() {
    var Fortune = {
        numberOfChildren: 3,
        partnersName: 'Mary',
        geographic: 'CDMX',
        location: 'Mexico',
        jobTitle: 'Programmer',
        tellFortune: function () {
            return 'You will be a ' + this.jobTitle + ' in ' + this.location + ', and married to ' + this.partnersName + ' with ' + this.numberOfChildren + ' kids';
        }
    };

    console.log(Fortune.tellFortune());

    var edad = 25
    if (edad == 27) {
        console.log('cumple');
    } else {
        console.log('no cumple');
    }

    for (i = 0; i < 10; i = i + 1) {
        console.log(i);
    }

    var nombre = 'Fabian';
    var edad = '25';
    console.log(nombre && edad);
    console.log(nombre || edad);


}

function changeTitle() {
    var tituloQueMeGusta = prompt('¿Y cual te gustaría?');
    document.getElementById('title').innerHTML = tituloQueMeGusta;
}

var myInfo = {
    name: 'Fabian',
    edad: 25,
    ropa: ['camiseta', 'pantalon', 'zapatos']
};


// Ambas maneras son para llamar propiedades de una función.
console.log(myInfo.ropa[2])
console.log(myInfo['ropa'][2])

myInfo.name = 'Felipe';
console.log(myInfo.name);