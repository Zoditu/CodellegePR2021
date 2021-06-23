

// window.onload = function(event) {
//     var titulo = document.getElementById("titulo");
//     titulo.innerText = "Mod con JS";
// };

$(function(){
    $("#titulo").text("Modificado con JQuery");

    $("#otro").append("<h2>Modificado uwu</h2>");

    $("#otro li").text("find");
});

