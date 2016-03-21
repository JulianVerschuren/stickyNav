var valueScroll; //variabele voor de waarde van waar je bent met scrollen
var lastPosition = 0; //deze variable is de laatste positie
var navigationMenu = $('nav'); //met de jquery selector halen we info het uit de dom van nav, die zetten we in navigation menu 
var heightOfMenu = navigationMenu.outerHeight(); //hoogte van het menu variable is de outerheight van het navigatie menu

function valueMove(){
valueScroll = $(this).scrollTop();
//console.log(valueScroll); //logt de waarde van waar je exact bent met het scrollen.
	
if (valueScroll > lastPosition){ 

console.log('we scrollen naar beneden'); //logt het feit dat je naar beneden scrollt
lastPosition = valueScroll; //laaste positie word nu dus automatisch de positie waar je bent, hierdoor reageert ie niet laat
navigationMenu.css('top', -heightOfMenu + 'px') //hiermee zorg je ervoor dat de hoogte van de menu eraf gaat. dan past ie precies.

}
else{

	console.log('Gimme the menu'); //logt het feit dat je naar boven scrollt
	lastPosition = valueScroll; //laaste positie word nu dus automatisch de positie waar je bent, hierdoor reageert ie niet laat
	navigationMenu.css('top',0)
}




}



$(window).on('scroll', valueMove);