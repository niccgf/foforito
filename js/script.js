// Funcion que carga los elementos del inicio

function start() {
    $("#welcome")
        .css("display", "flex")
        .hide()
        .fadeIn(2000);
    $(".sub-title")
        .css("display", "flex")
        .hide()
        .fadeIn(3500);
    $("#inicio").delay(1000)
        .css("display", "block")
        .hide()
        .fadeIn(2500);
    $("#boton-inicio").delay(2000)
        .css("display", "block")
        .hide()
        .fadeIn(1000);
}

// Ejecutamos start!

start();

const elementosInicio = $(".sub-title,#inicio,#boton-inicio")
// Funcion boton INICIAR

$("#boton-inicio").click(function() {
    elementosInicio.fadeOut(1500);
    setTimeout(function(){
        elementosInicio.css("display","none");
        $(".set-team")
        .css("display","flex")
        .hide()
        .fadeIn(600);
    },2000);
});

// Form Equipos
var team1,team2;

$("#formEquipos").submit(function(){
    var team1 = $("#team-1").val();
    var team2 = $("#team-2").val();
    var equipos = []
    if(team1 == ""){
        var team1 = "EQUIPO 1"
    }
    if(team2==""){
        var team2 = "EQUIPO 2"
    }

    equipos.push(team1);
    equipos.push(team2);
    console.log(equipos);

    $(".set-points")
        .css("display","flex")
        .hide()
        .fadeIn(1000);
});

var puntos;

$(".points").click(function(){
    puntos = parseInt($(this).text());
    console.log("Partida a "+ puntos + " puntos")
    $(".set-team").fadeOut(1000);
    $(".set-points").fadeOut(1000);
    setTimeout(function(){
        $(".set-team").css("display","none");
        $(".set-points").css("display","none");
    },2000)
})