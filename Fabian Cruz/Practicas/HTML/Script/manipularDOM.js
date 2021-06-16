// window.document.body.innerText += 'Hola';
window.document.body.innerHTML += `
    <div class='A'>
        Hola D
    </div>
`;

// var h1_titulo = window.document.getElementById('titulo');
// h1_titulo.innerText = 'Titulo Dinamico'

// // h1_titulo.append('<div>Append</div>');


// var div = document.createElement('div');
// div.innerText = 'Append :D';

// h1_titulo.appendChild(div);

var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
    const li = lis[i];
    lis,innerText = '* ' + li.innerText;
}


var h1_titulo = document.getElementsByTagName('span');
var spans = 
spans[1].innerText = 'Lo encontré';