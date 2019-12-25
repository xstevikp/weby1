//-------------TOTO JE KOD ROBENY POMOCOU JQUERY-----------
//tu si do premennej nt dame link ktory je akurat aktivny
var nt = document.querySelectorAll("a.active");

//funkcia na odobratie triedy active ked namierime na iny link
//to sa robi pretoze ak namierime na iny link v menu tak nam 
//zostane oznaceny aj aktivny link na ktorom sme aj link na
//ktory sme namierili
$(document).ready(function(){
	$('ul li a').mousemove(function(){
		$('li a').removeClass("active");
	});
});

//funkcia na pridanie triedy active linku ktory bol aktivny
//to sa stane vtedy ak sme namierili na menu ale neklikli 
//sme na ziadny link tak nam odobralo triedu active z aktivneho 
//linku a nebol by oramovany
$(document).ready(function(){
	$('ul li a').mouseout(function(){
		$(nt).addClass("active");
	});
});