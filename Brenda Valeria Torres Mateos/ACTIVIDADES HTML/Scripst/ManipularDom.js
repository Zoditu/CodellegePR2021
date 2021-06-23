//null no tiene valor. Inicializa una variable.
var x; //undefined 
var x = null; //null
//NULL --> 0
//Verbatim = ``

//window.document.body.innerText = "Hola";

/* window.document.body.innerHTML = window.document.body.innerHTML +
`
<div>
    Hola
</div>
`;


var ahorro = 100;
ahorro += 20; //ahorro = ahorro + 20;
ahorro = ahorro + 20; //120
ahorro = ahorro + 50; //170


var texto = "Hola";
texto = texto + " " + "Mundo"
texto += " " + "Mundo" //Hola Mundo
*/

//var h1_titulo = window.document.getElementById("titulo");
//h1_titulo.innerText = "Titulo Dinámico";

//h1_titulo.append("<div>Append</div>");

//var div = document.createElement ("div");
//div.innerText= "Append :D";

//h1_titulo.appendChild(div);

var lista = document.getElementsByTagName ("li");
for (let i = 0; i < lista.length; i++) {
    const li = lista[i];
    li.innerText = "* " + li.innerText;   
}

var h1_titulo = window.document.getElementById("titulo");
var spans = h1_titulo.getElementsByTagName("span");
spans[1].innerText= "Lo encontré";
