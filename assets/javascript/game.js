$(document).ready(function() {
	
	var randomNumber = Math.floor(Math.random() * 102) + 19;
	var wins = 0;
	var losses = 0;
	var blue = Math.floor(Math.random() * 12) + 1;
	var red = Math.floor(Math.random() * 12) + 1;
	var green = Math.floor(Math.random() * 12) + 1;
	var pink = Math.floor(Math.random() * 12) + 1;
	var userScore = 0;

			function crystalNumber() {
				blue = Math.floor(Math.random() * 12) + 1;
				red = Math.floor(Math.random() * 12) +1;
				green = Math.floor(Math.random() * 12) +1;
				pink = Math.floor(Math.random() * 12) +1;
			}

			function winLose() {
				if (userScore === randomNumber) {
					wins++;
					userScore = 0;
					$("#win").html("Wins: " + wins);
					randomNumber = Math.floor(Math.random() * 102) + 19;
					$("#compNumber").html("Random Number: " + randomNumber);
										crystalNumber();
				}
				else if (userScore > randomNumber) {
					losses++;
					userScore = 0;
					$("#loss").html("Losses: " + losses);
					randomNumber = Math.floor(Math.random() * 102) + 19;
					$("#compNumber").html("Random Number: " + randomNumber);
					crystalNumber();
				}
			}

		$("#compNumber").html("Random Number: " + randomNumber);

	//Click Function for Crystals
		$("#sapphire").on("click", function() {
				userScore = userScore + blue;
				$("#yourScore").html("Your Score: " + userScore);
				winLose();		
		});
		$("#ruby").on("click", function() {
				userScore = userScore + red;
				$("#yourScore").html("Your Score: " + userScore);
				winLose();		
		});
		$("#emerald").on("click", function() {
				userScore = userScore + green;
				$("#yourScore").html("Your Score: " + userScore);
				winLose();
		}); 		
		$("#diamond").on("click", function() {
				userScore = userScore + pink;	
				$("#yourScore").html("Your Score: " + userScore);
				winLose();
		});


});//document ready