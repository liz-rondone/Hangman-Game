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
		//var userText = document.getElementById("user-text");

    	// Next, we give JavaScript a function to execute when onkeyup event fires.
	document.onkeyup = function(event) 
	{
 		// letter(event.key);
    	console.log(event.key)
    }


	function Letter(letter)
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
				if (letter === randomWord[i])
				{
					console.log('yes');
					// assign it to a letter
					answerArray[i] = letter;
				} 

				else {
					console.log(randomWord[i]);
					document.getElementById("guessed").innerHTML = randomWord;
				}
			}
		}
	}


	/*var targetNumber = 0;

  	$("#guesses").text(targetNumber);

  	var counter = 15;
  	$(".crystal-image").on("click", function() 
  	{

    	counter -= 1;

    	//alert("New score: " + counter);

		// Here we created some logic to "check" if the click counter matches the targetNumber.
		// Remember, this click event will be triggered with each click.
		// With each click the counter will increase by 10 and be re-evaluated against target.
		// Game Lose
		if (counter === targetNumber) 
		{

		    // If the numbers match we'll celebrate the user's win.
		    alert("YOU LOSE! Go back to stupid Eagleton with your stupid face.");
		}

		// Game Win
		else if (answerArray === randomWord.length) 
		{

		    // If the numbers match we'll celebrate the user's win.
		    alert("YOU WIN! You are a beautiful tropical fish. You’re smart as a whip and you’re cool under pressure.");
		}

 	 });*/
