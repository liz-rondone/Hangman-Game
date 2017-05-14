	// define the words to use 
	var randomWordArr = ["pawnee", "eagleton", "breakfast", "swag", "jammed", "wamapoke", "fartattack"];
	
	// choose a random word from the array
	var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

	// global variables
	var s;
	// empty array to store guesses
	var answerArray = [];

	var lives;
	

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

