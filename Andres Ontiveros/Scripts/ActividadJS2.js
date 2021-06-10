/* var h1_nombre = window.document.getElementById("nombre");
h1_nombre.innerText="Juan Andres";

var h2_apellido = window.document.getElementById("apellidos");
h2_apellido.innerText="Ontiveros Chairez";

var lis =document.getElementsByTagName("li");
lis[0].innerText+=" 07 Octubre";
lis[1].innerText+=" Masculino";
lis[2].innerText+=" 27 años"; */

/* var title=document.getElementById("titulo");
title.innerText="Frase Motivacional";

var card=document.getElementById("frase");
var p=card.getElementsByTagName("p");
p[0].innerText="Animo! Animo! Animo! (8)...";

var footer=card.getElementsByTagName("footer");
footer[0].innerText="Andres Ontiveros";
footer[0].innerHTML+='<cite title="Source Title"> -Desarrolla Software</cite></footer>'; */

var frases=[
    {texto: "Hechale ganas a la vida",
    nombre: "Veronica",
    },
    {texto: "Animo Animo Animo! (8)...",
    nombre: "Andres Ontiveros",
    },
    {texto: "La vida es un riesgo",
    nombre: "Un cholo",
    },
    ]

    for (var i = 0; i < frases.length; i++) {
        const frase = frases[i];
        window.document.body.innerHTML+=`
<div class="card-header" id="titulo">
Frases Motivacionales
</div>
<div class="card-body" id="frase">
<blockquote class="blockquote mb-0">
  <p>${frase.texto}</p>
  <footer class="blockquote-footer">${frase.nombre}<cite title="Source Title">-Desarrolla Software</cite></footer>
</blockquote>
</div>
</div>`
        
    }

