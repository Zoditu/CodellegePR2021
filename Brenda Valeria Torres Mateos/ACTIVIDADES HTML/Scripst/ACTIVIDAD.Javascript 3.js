var h1_nombre = window.document.getElementById("nombre");
h1_nombre.innerText = "Brenda Valeria";

var h2_apellidos = window.document.getElementById("apellidos");
h2_apellidos.innerText = "Torres Mateos";

var lis = document.getElementsByTagName("li");
lis[0].innerText += " 13/01/1999";
lis[1].innerText += " Femenino";
lis[2].innerText += " 22 años";

/*
var card_title = document.getElementById("title");
card_title.innerText = "Frases Motivacionales";

var card = document.getElementById("frase");
var p = card.getElementsByTagName("p");
p[0].innerText = "Echale ganas";

var footer = card.getElementsByTagName("footer");
footer[0].innerText = "desarrolla.Software ";
footer[0].innerHTML += "<cite title= 'Valeria Torres'>Valeria Torres</cite>"; 
*/

var frases = [
   {
    texto: "Echale ganas",
    lugar: "desarrolla.Software",
    persona: "Valeria torres"
   },

   {
    texto: "Aprendan la teoría",
    lugar: "desarrolla.Software",
    persona: "El Teacher"
   },

   {
    texto: "Asistan al curso",
    lugar: "desarrolla.Software",
    persona: "Samuel"
   },
];

for (var i = 0; i < frases.length; i++) {
    const frase = frases[i];
  
    document.body.innerHTML += `
<div class="card">
        <div class="card-header" id="title">
            Frases Motivacionales
        </div>
        <div class="card-body" id="frase">
          <blockquote class="blockquote mb-0">
            <p>${frase.texto}</p>
            <footer class="blockquote-footer">${frase.lugar} <cite title=>${frase.persona}</cite></footer>
          </blockquote>
        </div>
      </div>
`;

}

/*
JQuery
EcmaS

JQuery es una libreria multi browser que funciona de la misma manera en
cualquier browser o dispositivo. 
Su uso principal es recorrer, buscar y manipular el DOM.
Puede buscar elementos de la siguiente manera:
---Por ID
---Por etiquetas 
---PERO TODO LO HACE POR SELECTORES (clases, ID, nombre, ubicaciones,)
*/

