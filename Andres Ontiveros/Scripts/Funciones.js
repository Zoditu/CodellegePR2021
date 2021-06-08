SumarNumeros (10,20)

var ABC=5
var XYZ=10

//Alcance (Scope)
/** 
 * Alcances
 * -Global: se puede todo lo declarado en otro lado
 * Local: Se puede ver lo que encapsule un contexto {} y lo global
 * Los parámetros de una función se tratan como variables dentro de ells
 * 
*/
SumarNumeros(ABC+XYZ)
function SumarNumeros(n1,n2) {
var suma=n1+n2;
console.log('La suma es: '+ suma);
}
