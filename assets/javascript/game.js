$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var userScore= 0;

	var randomNumber = Math.floor(Math.random() * 102) + 19;
		console.log(randomNumber);

	var blue = Math.floor(Math.random() * 12) + 1;
	var red = Math.floor(Math.random() * 12) + 1;
	var green = Math.floor(Math.random() * 12) + 1;
	var pink = Math.floor(Math.random() * 12) + 1;


		$("#compNumber").html("Random Number: " + randomNumber);
		$("#yourScore").html("Your Score: " + userScore);
		$("#win").html("Wins: " + wins);
		$("#loss").html("Losses: " + losses);

});//document ready