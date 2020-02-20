//click the list items, strike through and color change
$("ul").on("click", "li", function (){
    $(this).toggleClass("completed");
});
//Span delete Button functionality
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
//Text input and adding Todo
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
        $(this).val(null);
    }
    
});
