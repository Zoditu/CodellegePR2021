var h1 = document.getElementById('nombre');
h1.innerText = 'José';

var h2 = document.getElementById('apellidos');
h2.innerText = 'Vázquez';

var lis = document.getElementsByTagName('li');
lis[0].innerText += ' 05/10/1999';
lis[1].innerText += ' Masculino';
lis[2].innerText += ' 21';

/*
var card_title = document.getElementById('title');
card_title.innerText = 'Frases Motivacionales';

var card = document.getElementById('frase');
var p = card.getElementsByTagName('p');
p[0].innerText = 'Esta frase debe motivarte porque lo digo yo :D';

var footer = card.getElementsByTagName('footer');
footer[0].innerText = 'desarrolla.Software ';
footer[0].innerHTML += '<cite title="El Teacher">El Teacher</cite>';
*/
/*
<div class="card">
    <div class="card-header" id="title">
        TITLE
    </div>
    <div class="card-body" id="frase">
        <blockquote class="blockquote mb-0">
            <p>PHRASE</p>
            <footer class="blockquote-footer">PLACE <cite title="El Teacher">NAME</cite>
            </footer>
        </blockquote>
    </div>
</div>
*/
var frases = [{
        texto: 'SIUUU',
        lugar: 'Madrid',
        persona: 'CR7'
    },
    {
        texto: 'El mundo se consume en dinero dinero, aprende algo, dinero $',
        lugar: 'Somewhere nda world',
        persona: 'MC DINERO'
    },
    {
        texto: 'Búscalo en GOGOL',
        lugar: 'Casita',
        persona: 'Daddy'
    }
];

for (var i = 0; i < frases.length; i++) {
    const frase = frases[i];

    document.body.innerHTML += `
    <div class="card">
        <div class="card-header">
            Frases Motivacionales
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p>${ frase.texto }</p>
                <footer class="blockquote-footer">${ frase.lugar } <cite title="${ frase.persona }">${ frase.persona }</cite>
                </footer>
            </blockquote>
        </div>
    </div>`;
}

//JQuery ($)
//EcmaScript 6+
//

/**
 * JQuery es una librería multi browser que funciona de la misma maneta en cualquier browser y/o dispositivo.
 * Su uso más fuerte o principal es recorrer, buscar y manipular el DOM.
 * Puede buscar elementos de la siguiente manera:
 *  - Por ID
 *  - Por etiquetas
 *  - ...
 *  -PERO TODO, LO HACE POR SELECTORES (Clases, por ID, nombre, ubicaciones div p p, div p > span)
 * #ID{  }
 * 
 * $('elementos')
 */