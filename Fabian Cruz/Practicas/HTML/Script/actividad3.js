var h1_nombre = window.document.getElementById('nombre');
var h2_apellidos = document.getElementById('apellidos');
h1_nombre.innerText = 'Fabian';
h2_apellidos.innerText = 'Cruz García';

var listas = document.getElementsByTagName('li');
listas[0].innerText += ' 01/04/1995';
listas[1].innerText += ' Masculino';
listas[2].innerText += ' 25 Años'

// var div_title = document.getElementsByClassName('card-header');
// div_title[0].innerText = 'Frases Motivadoras';

// var card = document.getElementsByClassName('card-body')
// var div_p = card[0].getElementsByTagName('p');
// div_p[0].innerText = 'Esta frase si te motivará';

// var footer1 = document.getElementsByTagName('footer');

// footer1[0].innerText = 'desarrolla.software ';
// footer1[0].innerHTML += '<cite title="Source Title">Fabian Cruz</cite>';

var frases = [{
        texto: 'Esta frae debe motivarte porque lo digo yo :D',
        lugar: 'desarrolla.software',
        persona: 'Fabian Cruz'
    },
    {
        texto: 'Asistan al curso',
        lugar: 'desarrolla.software',
        persona: ' Samuel'
    }
];

for (var i = 0; i < frases.length; i++) {
    const frase = frases[i];
    window.document.body.innerHTML += `
        <div class="card">
            <div class="card-header">
            Frases Motivacionales
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>${frase.texto}</p>
                    <footer class="blockquote-footer">${frase.lugar}<cite title="Source Title">${frase.persona} </cite></footer>
                </blockquote>
            </div>
        </div>
    `;
}



var div_title = document.getElementsByClassName('card-header');
div_title[0].innerText = 'Frases Motivadoras';

var card = document.getElementsByClassName('card-body')
var div_p = card[0].getElementsByTagName('p');
div_p[0].innerText = 'Esta frase si te motivará';

var footer1 = document.getElementsByTagName('footer');

footer1[0].innerText = 'desarrolla.software ';
footer1[0].innerHTML += '<cite title="Source Title">Fabian Cruz</cite>';