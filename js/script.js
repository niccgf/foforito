$(document).ready(function() {
    var isDocumentReady = true;

    function start() {
        $("#welcome")
            .css("display", "flex")
            .hide()
            .fadeIn(4000);
        $(".sub-title")
            .css("display", "flex")
            .hide()
            .fadeIn(5500);
        $("#inicio").delay(2000)
            .css("display", "block")
            .hide()
            .fadeIn(4000);
        $("#boton-inicio").delay(4000)
            .css("display", "block")
            .hide()
            .fadeIn(1000);
    }

    // Ejecutar la función start al cargar la página
    start();

    // Manejar el evento click en cualquier parte del documento
    $(document).on("click", function() {
        if (isDocumentReady) {
            // Si la función start está en curso, detenerla y mostrar todo con fadeIn rápido
            $("#welcome, .sub-title, #inicio, #boton-inicio").stop(true, true).fadeIn(100);
        }
    });
});

$("#boton-inicio").click(function(){
    $("#boton-inicio")
        .fadeOut(1000)
        .css("display","hidden")
    $("#inicio").delay(1000)
        .fadeOut(1000)
        .css("display","hidden")
    $(".sub-title").delay(1200)
        .fadeOut(1000)
        .css("display","hidden")
})


$("#play").click(function() {
    $("#welcome").fadeOut("slow",function(){
        $("#welcome").css('display', 'none');
    });
    function fadeInMain(){
        $("#main").fadeIn("slow",function(){
            $("#main").css('display', 'block');
        });
        $("#header").fadeIn("slow",function(){
            $("#header").css('display', 'block');
        });
    };
    setTimeout(fadeInMain, 1000);
});