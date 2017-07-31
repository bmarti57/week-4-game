$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var userScore = 0;
		console.log("User Score: " + userScore);

	var randomNumber = Math.floor(Math.random() * 102) + 19;
		console.log("Random Number: " + randomNumber);

	var blue = Math.floor(Math.random() * 12) + 1;
		console.log("Sapphire: " + blue);
	var red = Math.floor(Math.random() * 12) + 1;
		console.log("Ruby: " + red);
	var green = Math.floor(Math.random() * 12) + 1;
		console.log("Emerald: " + green);
	var pink = Math.floor(Math.random() * 12) + 1;
		console.log("Diamond: " + pink);

	//Click Function for Crystals
		$("#sapphire").on("click", function() {
				userScore = parseInt(userScore, 10) + parseInt(blue, 10);
				$("#yourScore").html("Your Score: " + userScore);
			console.log("New User Score: " + userScore);
		});// Sapphire 
		$("#ruby").on("click", function() {
				userScore = parseInt(userScore, 10) + parseInt(red, 10);	
				$("#yourScore").html("Your Score: " + userScore);
			console.log("New User Score: " + userScore);
		});// Ruby 
		$("#emerald").on("click", function() {
				userScore = parseInt(userScore, 10) + parseInt(green, 10);
				$("#yourScore").html("Your Score: " + userScore);
			console.log("New User Score: " + userScore);
		});// Emerald 		
		$("#diamond").on("click", function() {
				userScore = parseInt(userScore, 10) + parseInt(pink, 10);	
				$("#yourScore").html("Your Score: " + userScore);
			console.log("New User Score: " + userScore);
		});// Diamond 

	//If Statements
		if (userScore == randomNumber) {
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

		else if (userScore > randomNumber) {
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

		//Displayed in the html
		$("#compNumber").html("Random Number: " + randomNumber);
		$("#yourScore").html("Your Score: " + userScore);
		$("#win").html("Wins: " + wins);
		$("#loss").html("Losses: " + losses);

});//document ready