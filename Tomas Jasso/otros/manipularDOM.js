// window.document.body.innerText = 'Hola';
// window.document.body.innerHTML = +=

var h1_titulo = document.getElementById("titulo");
h1_titulo.innerText = "Titulo Dinámico";

var div = document.createElement('div');
div.innerText = 'Append :D';

h1_titulo.appendChild(div);