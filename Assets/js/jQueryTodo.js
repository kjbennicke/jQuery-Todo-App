//click the list items
$("li").click(function ()
{
    //if li is gray
    if ($(this).css("color") === "rgb(128, 128, 128)")
    {
        //Turns it black
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    //else if li is black
    else
    {

        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }

});