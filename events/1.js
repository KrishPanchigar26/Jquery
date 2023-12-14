$(document).ready(function(){

// function func1(){
//     document.getElementById('#img').style.width = "500px"
// }

// $('button').click(func1);
// function func1(){
//     $("#img").css('width','500px')
// }

// $('button').dblclick(function(){
//     $('#img').css('height','500px')
// })

// $('#img').mouseenter(function(){
//     $("#img").css('width','500px')
// })
// $('#img').mouseleave(function(){
//     $("#img").css('width','250px')
// })

$('#img').hover(func1,func2)

function func1(){
    $('#img').css('width','500px')
}
function func2(){
    $('#img').css('width','250px')
}


})