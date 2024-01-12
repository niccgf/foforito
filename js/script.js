$(document).ready(function() {
    // $("#header").css('display', 'none');
    // $("#main").css('display', 'none');
    isDocumentReady = true;
});

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