/*$(document).ready(function() {

    $('ul').mouseenter(function() {
        $(this).animate({
            height: '+=10px'
        });
    });
    $('ul').mouseleave(function() {
        $(this).animate({
            height: '-=10px'
        });
    });
    $('ul').click(function() {
        $(this).toggle(1700);
    });
 });
*/ 
 $(document).ready(function() {
$("#ilt").mouseover(function(){
  $("#ilust").removeClass("ftg")
})

$("#dsg").mouseover(function(){
  $("#desi").removeClass("ftg")
})

$("#ftg").mouseover(function(){
  $("#foto").removeClass("ftg")
})
$("#ftg").mouseout(function(){
  $("#foto").addClass("ftg")
})
$("#dsg").mouseout(function(){
  $("#desi").addClass("ftg")
})

$("#ilt").mouseout(function(){
  $("#ilust").addClass("ftg")
})

 });
