$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var userScore= 0;

	var randomNumber = Math.floor(Math.random() * 102) + 19;
		console.log(randomNumber);

	var blue = Math.floor(Math.random() * 12) + 1;
		console.log(blue);
	var red = Math.floor(Math.random() * 12) + 1;
		console.log(red);
	var green = Math.floor(Math.random() * 12) + 1;
		console.log(green);
	var pink = Math.floor(Math.random() * 12) + 1;
		console.log(pink);

	//Displayed in the html
		$("#compNumber").html("Random Number: " + randomNumber);
		$("#yourScore").html("Your Score: " + userScore);
		$("#win").html("Wins: " + wins);
		$("#loss").html("Losses: " + losses);

	//Click Function for Crystals
		$("#sapphire").on("click", function() {
			userScore = blue = userScore;
		});// Sapphire 
		$("#ruby").on("click", function() {
			userScore = red = userScore;
		});// Ruby 
		$("#emerald").on("click", function() {
			userScore = green = userScore;
		});// Emerald 		
		$("#diamond").on("click", function() {
			userScore = pink = userScore;
		});// Diamond 

	//If Statements
		if (userScore = randomNumber) {
			wins++;
			var userScore = 0;
			var randomNumber = Math.floor(Math.random() * 102) + 19;
				console.log(randomNumber);
			var blue = Math.floor(Math.random() * 12) + 1;
				console.log(blue);
			var red = Math.floor(Math.random() * 12) + 1;
				console.log(red);
			var green = Math.floor(Math.random() * 12) + 1;
				console.log(green);
			var pink = Math.floor(Math.random() * 12) + 1;
				console.log(pink);
			console.log("Wins: " + wins + "Losses: " + losses);
		}

		if (userScore > randomNumber) {
			losses++;
			var userScore = 0;
			var randomNumber = Math.floor(Math.random() * 102) + 19;
				console.log(randomNumber);
			var blue = Math.floor(Math.random() * 12) + 1;
				console.log(blue);
			var red = Math.floor(Math.random() * 12) + 1;
				console.log(red);
			var green = Math.floor(Math.random() * 12) + 1;
				console.log(green);
			var pink = Math.floor(Math.random() * 12) + 1;
				console.log(pink);
			console.log("Wins: " + wins + "Losses: " + losses);
		}

});//document ready