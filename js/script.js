function selectNumber() {
  var classes = ["one", "two", "three", "four", "five", "six", "seven"];
  var randomIndexLeft = Math.floor(Math.random() * 7);
  var randomIndexMiddle = Math.floor(Math.random() * 7);
  var randomIndexRight = Math.floor(Math.random() * 7);
  var chosenClassLeft = classes[randomIndexLeft];
  var chosenClassMiddle = classes[randomIndexMiddle];
  var chosenClassRight = classes[randomIndexRight];
  $(".left").removeClass("one two three four five six seven");
  $(".left").addClass(chosenClassLeft);
  $(".middle").removeClass("one two three four five six seven");
  $(".middle").addClass(chosenClassMiddle);
  $(".right").removeClass("one two three four five six seven");
  $(".right").addClass(chosenClassRight);
}

selectNumber();
$(".click-btn").click(function() {
  selectNumber();
});

function lineOne() {
  var leftOne = $(".left").hasClass("one");
  var middleOne = $(".middle").hasClass("one");
  var rightOne = $(".right").hasClass("one");

  if (isRock) {
    playerRock();
    //opponent: rock ties, paper we lose, scissors we win
  } else if (isPaper) {
    playerPaper();
    //opponent: paper ties, scissors we lose, rock we win
  } else {
    playerScissors();
    //opponent: scissors ties, rock we lose, paper we win
  }

  // show the game over screen
  $(".game-end").addClass("showing");
}
