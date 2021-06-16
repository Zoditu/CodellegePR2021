//null
//var x; //undefined
//var x = null; //null
//NULL -> 0

//window.document.body.innerText = 'Hola';
//Verbatim
window.document.body.innerHTML +=
`
    <div>
    miau
    </div>
`;
/*
var ahorro = 100;
ahorro += 20;

ahorro = ahorro + 20; //120
ahorro = ahorro + 50; //170

var texto = " " + "Mundo" // Hola Mundo
var texto = 'Hola';

texto += ' ' + "Mundo" //Hola Mundo
*/
/*
var h1_titulo = document.getElementById("titulo");
h1_titulo.innerText = "Título Dinámico";
h1_titulo.append("<div>Append</div>");

var div = document.createElement('div');
div.innerText = 'Append :D';

h1_titulo.appendChild(div);
*/

var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
    const li = lis [i];
    li.innerText = "* " + li.innerText;
}

var h1_titulo = document.getElementById("titulo");
var spans = h1_titulo.getElementsByTagName('span');
spans[1].innerText = 'Lo encontré';
