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
var credits = 300;
var gain = 70;
var extraGain = 100;
var jackpot = ["012", "021", "120", "102", "201", "210"];
var isJackpot = "Hide & Seek";
var genius = ["345", "354", "453", "435", "543", "534"];
var isGenius = "Genius Of Evil";

// -----------------------------------------------------------------------

var selectNumber = [
  { src: "./IHimages/image-three.jpg", value: "one" },
  { src: "./IHimages/image-five.jpg", value: "two" },
  { src: "./IHimages/image-seven.jpg", value: "three" },
  { src: "./IHimages/image-one.jpg", value: "five" },
  { src: "./IHimages/image-nine.jpg", value: "nine" },
  { src: "./IHimages/image-two.jpg", value: "seven" },
  { src: "./IHimages/image-ten.jpg", value: "ten" },
  { src: "./IHimages/image-four.jpg", value: "four" },
  { src: "./IHimages/image-six.jpg", value: "six" },
  { src: "./IHimages/image-eleven.jpg", value: "eleven" },
  { src: "./IHimages/image-eight.jpg", value: "eight" }
];

// function test() {
//   credits = 400;
//   for (i = 0; i < 200; i++) {
//     updateImage(selectNumber);
//   }
// }

// test();

function updateImage(array) {
  numero1 = Math.floor(Math.random() * array.length);
  numero2 = Math.floor(Math.random() * array.length);
  numero3 = Math.floor(Math.random() * array.length);
  $(".left").attr("src", array[numero1].src);
  $(".middle").attr("src", array[numero2].src);
  $(".right").attr("src", array[numero3].src);

  isJackpot = numero1.toString() + numero2.toString() + numero3.toString();
  isGenius = numero1.toString() + numero2.toString() + numero3.toString();

  var stillPoints = document.querySelector(".totalPoints strong");
  if (numero1 === numero2 && numero2 === numero3) {
    credits += gain;
    console.log("Just luck! " + credits);
    alert("You're Lucky!");
  }
  if (jackpot.indexOf(isJackpot) !== -1) {
    credits += extraGain;
    console.log("JACKPOT MY FRIIIEND" + credits);
    alert("SPECIAL BEST TEAM COMBINATION");
  }
  if (genius.indexOf(isGenius) !== -1) {
    credits += extraGain;
    console.log("THEY'RE GONNA END THE WORLD!" + credits);
    alert("SPECIAL EVIL GENIUS COMBINATION!");
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
  $(".click-btn").css({ color: "white" });
  $(".click-btn").mouseleave(function() {
    $(".click-btn").css({ color: "#5e66ae" });
  });
});

$(".click-btn").mouseenter(function() {
  $(".click-btn").css({ backgroundColor: "#e45668" });
  $(".click-btn").mouseleave(function() {
    $(".click-btn").css({ backgroundColor: "white" });
  });
});

$(".click-btn").mouseenter(function() {
  $(".click-btn").css({ borderColor: "white" });
  $(".click-btn").mouseleave(function() {
    $(".click-btn").css({ borderColor: "#e45668" });
  });
});

// -----------------------------------------------------------------------

$(".left").mouseenter(function() {
  var monImage = $(this).find("img");
  $(monImage).animate({ opacity: "0.16" });
});

$(".left").mouseleave(function() {
  var monImage = $(this).find("img");
  $(monImage)
    .stop()
    .animate({ opacity: "1" });
});
