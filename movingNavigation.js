var valueScroll;
var lastPosition = 0;

function valueMove(){
valueScroll = $(this).scrollTop();
console.log(valueScroll);

}

$(window).on('scroll', valueMove);