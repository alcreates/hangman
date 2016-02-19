window.onload = function() {

var game = {

	  rappers : ["bigpun", "tupac", "biggiesmalls", "nas", "jayz"],
	  
	  
	  
	  rapper: "",
	  
	  wordPlaceHolder : "",
	  
	  winCount : 0,
	  
	  guessCount: 0,
	  
	  lettersGuess: " ",

	  guessLeft: 15


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

		if (game.rapper === game.wordPlaceHolder && game.guessCount <= 15){
			alert("You win!!")
			
				if (game.rapper === "nas"){

					document.querySelector("#pic_container").innerHTML = '<img src="assets/images/nas.jpg" id="nas"> <audio autoplay><source src="assets/audio/nas.m4a" type="audio/mpeg"></audio>'
				}
				else if (game.rapper === "jayz"){
					document.querySelector("#pic_container").innerHTML = '<img src="assets/images/jayz.jpg" id="jayz"><audio autoplay><source src="assets/audio/jayz.m4a" type="audio/mpeg"></audio>'
				}
				else if (game.rapper === "bigpun"){
					document.querySelector("#pic_container").innerHTML = '<img src="assets/images/bigpun.jpg" id="bigpun"><audio autoplay><source src="assets/audio/bigpun.m4a" type="audio/mpeg"></audio>'

				}else if (game.rapper === "tupac"){
					document.querySelector("#pic_container").innerHTML = '<img src="assets/images/tupac.jpg" id = "tupac"><audio autoplay><source src="assets/audio/tupac.m4a" type="audio/mpeg"></audio>'
				}
				else if (game.rapper === "biggiesmalls"){
					document.querySelector("#pic_container").innerHTML = '<img src="assets/images/biggie.jpg" id="big"><audio autoplay><source src="assets/audio/biggie.m4a" type="audio/mpeg"></audio>'
				};
			
			game.wordPlaceHolder = ""
			game.winCount += 1
			game.lettersGuess = ""
			game.guessCount = 0
			game.rapper = ""
			game.guessLeft = 15
		};


	game.guessCount+= 1
	document.querySelector("#guessCount").innerHTML = game.guessCount
			
	game.lettersGuess += userGuess
	document.querySelector("#letterGuess").innerHTML = game.lettersGuess
			
	game.guessLeft -= 1
	document.querySelector("#remainingGuess").innerHTML = game.guessLeft


	
	
	

};

};


