window.onload = function() {

var game = {

	  rappers : ["bigpun", "tupac", "biggiesmalls", "nas", "jayz"],
	  
	  
	  
	  rapper: "",
	  
	  wordPlaceHolder : "",
	  
	  winCount : 0,
	  
	  guessCount: 0,
	  
	  lettersGuess: " ",


};



String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}





document.onkeyup = function(event){
	
	

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


	

	if (game.rapper == ""){

		game.rapper = game.rappers[Math.floor( Math.random() * game.rappers.length)]
	};
	

	if (game.wordPlaceHolder == ""){

		for (i= 0; i < game.rapper.length - 1; i++){

				game.wordPlaceHolder = game.wordPlaceHolder + "_" 
			};
		document.querySelector("#placeHolder").innerHTML = game.wordPlaceHolder
	};

	for (var i = 0; i < game.rapper.length; i++) {
		
		if (game.rapper[i] === userGuess && game.guessCount < 15){
			game.wordPlaceHolder= game.wordPlaceHolder.replaceAt(i ,game.rapper[i]);
			document.querySelector("#placeHolder").innerHTML = game.wordPlaceHolder
			

		}else if(game.rapper[i] === userGuess && game.guessCount > 15){
			alert("Sorry too Many Guesses.. GameOver! ")
			game.wordPlaceHolder = []
			game.rapper = ""
			break;
		}


	};

		if (game.rapper.includes(userGuess)){
			alert( "You are correct !")
			}
		else{ 
			alert("Sorry you are wrong !")
			}	
		;

		if (game.rapper === game.wordPlaceHolder){
			alert("You win!!")
			game.wordPlaceHolder = ""
			game.winCount += 1
			game.lettersGuess = ""
			game.guessCount = 0
			game.rapper = ""
			
			
			
		};


	game.guessCount+= 1
	game.lettersGuess += userGuess
	



	
	
	

};

};


