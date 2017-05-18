	// won alert: You are a beautiful tropical fish. You’re smart as a whip and you’re cool under pressure.
	// lost alert: Go back to stupid Eagleton with your stupid face!


	// define the words to use 
	var randomWordArr = ["pawnee", "eagleton", "breakfast", "swag", "jammed", "wamapoke", "fartattack", "sweetums"];

	// choose a random word from the array
	var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

	// global variables
	var s;
	var count = 0;
	// empty array to store guesses
	var answerArray = [];

	// fill the answer array with underscores
	function startUp()
	{
		for (var i = 0; i < randomWord.length; i++)
		{
			answerArray[i] = "_";
		}

		// put them in a string
		s = answerArray.join(" ");
		document.getElementById("answer").innerHTML = s;
	}

		// player's typed letter
		var userText = document.getElementById("user-text");

    	// Next, we give JavaScript a function to execute when onkeyup event fires.
    	document.onkeyup = function(event) {
        userText.textContent = event.key;
      }

	function Letter()
	{
		// here we get the letter that the user types in the box
		//var letter = document.getElementById("letter").value;

		// make sure we have a guess (more checks can be made here, only letters etc.)
		var letter = document.getElementById("letter").value;

		if (letter.length > 0) 
		{
			for (var i = 0; i < randomWord.length; i++)
			{
				// now if the random word contains a letter that the user typed
				if (randomWord[i] === letter)
				{
					// assign it to a letter
					answerArray[i] = letter;
				} 
			}

			// how many times it takes to guess
		count++;
			document.getElementById("counter").innerHTML = "Number of guesses: " + count + "/15";
			document.getElementById("answer").innerHTML = answerArray.join(" ");
		}

		
		// game lose
		if(count>14)
		{
			document.getElementById("stat").innerHTML = "YOU LOSE! Go back to stupid Eagleton with your stupid face.";
		}

		for (var i = 0; i < randomWord.length; i++) {
      
      			// game win
      			if (answerArray === randomWord.length) {
        
        			document.getElementById("showLives").innerHTML = "YOU WIN! You are a beautiful tropical fish. You’re smart as a whip and you’re cool under pressure.";
      			}
    		}
	}
