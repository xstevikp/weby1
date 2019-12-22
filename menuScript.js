var nt = document.querySelectorAll("a.active");
$(document).ready(function(){
	$('ul li a').mousemove(function(){
		$('li a').removeClass("active");
	});
});
$(document).ready(function(){
	$('ul li a').mouseout(function(){
		$(nt).addClass("active");
	});
});