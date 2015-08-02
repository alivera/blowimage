$(document).ready(function() {
	$('#results').prepend('<a href="http://www.starwars.com/databank/boba-fett"><img src="boba.jpg" height="400" width="400"></a>');
	//clone images and output to div
	$('a').mouseenter(function() {
		$('#results').empty();
		var $clone = $(this).clone();
		$('#results').prepend($clone);
		$('#results img').width(400).height(400);	
	}); 
});