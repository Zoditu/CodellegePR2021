/* window.document.body.innerHTML += `
<div>Hola mi nombre es Andres</div>` */

/* var h1_titulo=window.document.getElementById("titulo");
h1_titulo.innerText="Titulo dinámico";

var div=window.document.createElement("div");
div.innerText="Holi!";

h1_titulo.appendChild(div); */

/* var lis = window.document.getElementsByTagName("li");

for (var i = 0; i < lis.length; i++) {
    const li = lis[i];
    li.innerText = " * "+li.innerText;
}
 */

var h1_titulo=window.document.getElementById("titulo");
var span= h1_titulo.getElementsByTagName("span");
span[1].innerText="Lo encontré";


/* var lis=document.getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
    const li = lis[i];
    li.innerText="*"+li.innerText;
}

 */