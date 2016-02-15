$(document).ready(function() {
    
    //brání odeslání formuláře při stisku Enteru a zároveň vytváří nový stickie a čistí pole input-text
    $("#new_stickie").focus().keydown(function(event) {
        if(event.keyCode == 13) {
            $("#main_area").append("<div class='stickie'>" + $('#new_stickie').val() + "</div>");
            $("#new_stickie").val("");
            event.preventDefault();
            return false;
        }
    });
    
    //při kliknutí na button přidá nový stickie s textem, který prevezme z textového inputu
    $("#button_add").click(function() {
        $("#main_area").append("<div class='stickie'>" + $('#new_stickie').val() + "</div>");
        $("#new_stickie").val("");
    });
});