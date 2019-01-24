// function selectNumber() {
//   var classes = ["one", "two", "three", "four", "five", "six", "seven"];
//   var randomIndexLeft = Math.floor(Math.random() * 7);
//   var randomIndexMiddle = Math.floor(Math.random() * 7);
//   var randomIndexRight = Math.floor(Math.random() * 7);
//   var chosenClassLeft = classes[randomIndexLeft];
//   var chosenClassMiddle = classes[randomIndexMiddle];
//   var chosenClassRight = classes[randomIndexRight];
//   $(".left").removeClass("one two three four five six seven");
//   $(".left").addClass(chosenClassLeft);
//   $(".middle").removeClass("one two three four five six seven");
//   $(".middle").addClass(chosenClassMiddle);
//   $(".right").removeClass("one two three four five six seven");
//   $(".right").addClass(chosenClassRight);
// }

// selectNumber();
// $(".click-btn").click(function() {
//   selectNumber();
// });

var bet = 2;
var credits = 200;
var gain = 30;
var extraGain = 50;
var jackpot = ["012", "021", "120", "102", "201", "210"];
var isJackpot = "Hide & Seek";

// -----------------------------------------------------------------------

var selectNumber = [
  { extras: false, src: "./HSimages/image-three.jpg", value: "one" },
  { extras: false, src: "./HSimages/image-five.jpg", value: "two" },
  { extras: true, src: "./HSimages/image-seven.jpg", value: "three" },
  { extras: false, src: "./HSimages/image-four.jpg", value: "four" },
  { extras: true, src: "./HSimages/image-one.jpg", value: "five" },
  { extras: false, src: "./HSimages/image-six.jpg", value: "six" },
  { extras: true, src: "./HSimages/image-two.jpg", value: "seven" }
];

function updateImage(array) {
  numero1 = Math.floor(Math.random() * array.length);
  numero2 = Math.floor(Math.random() * array.length);
  numero3 = Math.floor(Math.random() * array.length);
  $(".left").attr("src", array[numero1].src);
  $(".middle").attr("src", array[numero2].src);
  $(".right").attr("src", array[numero3].src);

  isJackpot = numero1.toString() + numero2.toString() + numero3.toString();

  var stillPoints = document.querySelector(".totalPoints strong");
  if (numero1 === numero2 && numero2 === numero3) {
    credits += gain;
    console.log("Just luck! " + credits);
    alert("You're Lucky!");
  }
  if (jackpot.indexOf(isJackpot) !== -1) {
    credits += extraGain;
    console.log("JACKPOT MY FRIIIEND" + credits);
    alert("Special combination!");
  } else {
    console.log("You loose, loser! " + credits);
  }
  stillPoints.innerHTML = credits;
}

// -----------------------------------------------------------------------

updateImage(selectNumber);

// -----------------------------------------------------------------------

$(".click-btn").click(function() {
  var nextAmount = credits - bet;
  if (nextAmount >= 0) {
    credits = nextAmount;
    updateImage(selectNumber);
  }
  return;
});

// -----------------------------------------------------------------------

$(".game-end button").click(function() {
  $(".game-end").removeClass("showing");
  $(".container").removeClass("left middle right");
});

// -----------------------------------------------------------------------

$(".click-btn").mouseenter(function() {
  $(".click-btn").css({ color: "#302727" });
  $(".click-btn").mouseleave(function() {
    $(".click-btn").css({ color: "white" });
  });
});

$(".click-btn").mouseenter(function() {
  $(".click-btn").css({ backgroundColor: "white" });
  $(".click-btn").mouseleave(function() {
    $(".click-btn").css({ backgroundColor: "#302727" });
  });
});

$(".click-btn").mouseenter(function() {
  $(".click-btn").css({ borderColor: "#302727" });
  $(".click-btn").mouseleave(function() {
    $(".click-btn").css({ borderColor: "white" });
  });
});

// -----------------------------------------------------------------------
