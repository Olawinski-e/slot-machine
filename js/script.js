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

// -----------------------------------------------------------------------

var selectNumber = [
  { category: "number", src: "./images/image-one.jpg", value: "one" },
  { category: "number", src: "./images/image-two.jpg", value: "two" },
  { category: "number", src: "./images/image-three.jpg", value: "three" },
  { category: "number", src: "./images/image-four.jpg", value: "four" },
  { category: "number", src: "./images/image-five.jpg", value: "five" },
  { category: "number", src: "./images/image-six.jpg", value: "six" },
  { category: "number", src: "./images/image-seven.jpg", value: "seven" }
];

function updateImage(array) {
  numero1 = Math.floor(Math.random() * array.length);
  numero2 = Math.floor(Math.random() * array.length);
  numero3 = Math.floor(Math.random() * array.length);
  $(".left").attr("src", array[numero1].src);
  $(".middle").attr("src", array[numero2].src);
  $(".right").attr("src", array[numero3].src);

  if (numero1 === numero2 && numero2 === numero3) {
    console.log("You Win!");
  } else {
    console.log("You big loser!");
  }
}

// ------------------------------------------------------------

updateImage(selectNumber);

// ------------------------------------------------------------

$(".click-btn").click(function() {
  updateImage(selectNumber);
});

// -----------------------------------------------------------------------

// function equalNumbers() {
//   var left = $(".left").hasClass("one");
//   var middle = $(".middle").hasClass("one");
//   var right = $(".right").hasClass("one");

//   if ((left === middle) === right) {
//   } else if (isPaper) {
//   } else {
//   }

//   // show the game over screen
//   $(".game-end").addClass("showing");
// }

// console.log(numberOne(selectNumber));
