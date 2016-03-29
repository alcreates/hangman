
// objec with game elements


	 var rappers =["bigpun", "tupac", "biggiesmalls", "nas", "jayz"]
	  
	 var rapper = ""
	  
	 var wordPlaceHolder = []
	  
	 var winCount = 0
	  
	  var guessCount = 0
	  
	  var lettersGuess = " "

	  var guessLeft = 15
	  var userGuess = null





function newRappper(){
	if (rapper == ""){

		rapper = rappers[Math.floor( Math.random() * rappers.length)]
	};
}



function startingSpaces(){
	

		for (i= 0; i < rapper.length ; i++){

				wordPlaceHolder.push("_ ");
				
				
			};


		 
	$("#placeHolder").html(wordPlaceHolder.join(" "));

}

function testGuess(){
	var rapperSplit = rapper.split("");
	var spacesSplit = wordPlaceHolder

	for (var i = 0; i < rapper.length; i++) {
		
		if (rapperSplit[i] === userGuess && guessCount < 15 ){
			spacesSplit[i] = rapperSplit[i];
			
			

		}else if(rapper[i] === userGuess && guessCount > 15){
			alert("Sorry too Many Guesses.. GameOver! ")
			wordPlaceHolder = []
			rapper = ""
			break;
		}
	};

	wordPlaceHolder = spacesSplit

	$("#placeHolder").html(wordPlaceHolder);


};		

function winCheck(){

		if (rapper == wordPlaceHolder.join("") && guessCount <= 15){
			
			
				if (rapper == "nas"){

					$("#rapperImage").backstretch("assets/images/nas.jpg");
					$("#rapperImage").append('<audio autoplay><source src="assets/audio/nas.m4a" type="audio/mpeg"></audio>')
				}
				else if (rapper == "jayz"){
					 $("#rapperImage").backstretch("assets/images/jayz.jpg");
					 $("#rapperImage").append('<audio autoplay><source src="assets/audio/jayz.m4a" type="audio/mpeg"></audio>')	
				}
				else if (rapper == "bigpun"){
					 $("#rapperImage").backstretch("assets/images/bigpun.jpg") 
					 $("#rapperImage").append('<audio autoplay><source src="assets/audio/bigpun.m4a" type="audio/mpeg"></audio>');

				}else if (rapper == "tupac"){
					 $("#rapperImage").backstretch("assets/images/tupac.jpg"); 
					 $("#rapperImage").append('<audio autoplay><source src="assets/audio/tupac.m4a" type="audio/mpeg"></audio>');
				}
				else if (rapper == "biggiesmalls"){
					 $("#rapperImage").backstretch("assets/images/biggie.jpg"); 
					 $("#rapperImage").append('<audio autoplay><source src="assets/audio/biggie.m4a" type="audio/mpeg"></audio>');
				};
			winCount += 1
			$("#totalWins").html(winCount);
			startGame();
			
		};
};

function gameBoardUpdate(){

	guessCount+= 1
	 $("#guessCount").html(guessCount);
			
	lettersGuess += userGuess
	 $("#letterGuess").html(lettersGuess);
			
	guessLeft -= 1
	 $("#remainingGuess").html(guessLeft);
};

function startGame(){
			wordPlaceHolder = []
			lettersGuess = ""
			guessCount = 0
			rapper = ""
			guessLeft = 15
			
			newRappper();
			startingSpaces();

};

function newGame(){

			wordPlaceHolder = []
			lettersGuess = ""
			guessCount = 0
			rapper = ""
			guessLeft = 15
			winCount = 0
			newRappper();
			startingSpaces();

			
			$("#guessCount").empty();
			$("#letterGuess").empty();
			$("#remainingGuess").empty();
			$("#totalWins").empty();


}



$(document).ready(function(){

	startGame();
	
	

 $.backstretch("assets/images/hiphopbg.jpg");
 $("#rapperImage").backstretch("assets/images/mtvrapsbackground.jpg");

});

$("#logo").append("<img class='materialboxed' width='100' src='assets/images/mtvraps.jpg'>");

$("#gameBoardback").backstretch("assets/images/pumamtvraps.jpg")


// event listener when keys are entered(lifted)
document.onkeyup = function(event){
	
	
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	testGuess();
	
	gameBoardUpdate();
	winCheck();
	
};

$("#startButton").click(function(){

	newGame();
})



