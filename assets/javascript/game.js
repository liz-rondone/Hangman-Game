// won alert: You are a beautiful tropical fish. You’re smart as a whip and you’re cool under pressure.
// lost alert: Go back to stupid Eagleton with your stupid face!

	// global variables
	var blank;
	var count = 0;
	// empty array to store guesses
	var answerArray = [];
	var spaceCount = null;

	// define the words to use
	var randomWordArr = ["pawnee", "eagleton", "breakfast", "swag", "jammed", "wamapoke", "fartattack", "sweetums"];
	//var fullAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	// choose a random word from the array
	var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
	spaceCount = randomWord.length;


	// fill the answer array with underscores
	function startUp()
	{
		for (var i = 0; i < randomWord.length; i++)
		{
			answerArray[i] = "_";
		}

		// put them in a string
		blank = answerArray.join(" ");
		document.getElementById("answer").innerHTML = blank;
	};

	// player's typed letter
	var userText = document.getElementById("user-text");

	// Next, we give JavaScript a function to execute when onkeyup event fires.
	document.onkeyup = function(event) 
	{
		 Letter(event.key);
		 document.getElementById("guessed").innerHTML = event.key;
	};

	function Letter(letter) 
	{
		// here we get the letter that the user types in the box
		//var letter = document.getElementById("letter").value;

		// make sure we have a guess (more checks can be made here, only letters etc.)
		// var letter = document.getElementById("letter").value;
		/*if (fullAlphabet.indexOf(userText) !-=) {
			charUsed.push(" " + userText);
			document.querySelector('#alphaUsed').innerHTML = charUsed;
		}*/

		for (var i = 0; i < randomWord.length; i++)
		{
		  // now if the random word contains a letter that the user typed
		  if (randomWord[i] === letter)
		  {
		    // assign it to a letter
		    answerArray[i] = letter;
		    spaceCount -=1;
		    console.log(spaceCount);
		  }
		}

		// how many times it takes to guess
		count++;
		updateScreenCounter(count);
		
	};


	function updateScreenCounter(count)
	{
		document.getElementById("counter").innerHTML = count + "/15";
		document.getElementById("answer").innerHTML = answerArray.join(" ");
		checkGameEnd();
	};


	function checkGameEnd()
	{
		//for (var i = 0; i < randomWord.length; i++) 
		{

		   
		}

		 // game win
		    if (spaceCount === 0) 
		    {
		    	alert("YOU WIN! You are a beautiful tropical fish. You’re smart as a whip and you’re cool under pressure.");
		    }
		    // game lose
		    else if (count === 16)
		    {
		    	alert("YOU LOSE! Go back to stupid Eagleton with your stupid face.");
		    }

		    
		    //document.getElementById("refresh").innerHTML = location.reload();
	};


/*// Show lives

var lives ;

	var showLives = document.getElementById("mylives");

   comments = function () 
   {
    if (lives < 1) 
    {
      alert("Game Over");
    }
    for (var i = 0; i < answerArray.length; i++) 
    {
      if (count + blank === answerArray.length) 
      {
        alert("You Win!");
      }
    }*/

	/*function reset(new) 
	{
		document.getElementById("answer").reset();
		document.getElementById("guessed").reset();
		document.getElementById("counter").reset();
		startUp();
	}

	/*var targetNumber = 0;

  	$("#guesses").text(targetNumber);

  	var counter = 15;
  	$("#guesses").on(function letter(Letter) 
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