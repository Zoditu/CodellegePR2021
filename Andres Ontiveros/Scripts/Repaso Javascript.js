function Suma (n1=1, n2=2) {
    var suma = n1 + n2;
    return suma
}

var suma = Suma (5,6);
console.log(suma);

var suma = Suma (2,10);
console.log(suma);

var suma = Suma ();
console.log(suma);

//

function NombreCompleto(a,b,c){
    var nombreCompleto = a+" "+b+" "+c
    return nombreCompleto
}

var nombreCompleto = NombreCompleto("Andres","Ontiveros","Chairez");
console.log(nombreCompleto);

var mascota ={
    raza:"Chihuahua",
    edad:7,
    color:"Blanco con cafe",
    tamaño:"Pequeño",
    nombre:"Copo de nieve",
    ladrido: function(){
        return ("Woof")
    }
}

console.log();

function LimiteDeNumero(n1,n2){
    var esMayor =n1>n2;
    var resultado = "El número "+n1+" es"+(esMayor ? " mayor" : " menor o igual")+ " que el número "+n2;
return resultado;
}

console.log( LimiteDeNumero(5,3) );

var arreglo=[10,20,30,40,50];
arreglo[5]=60;
arreglo.push(70);

console.log(arreglo);

