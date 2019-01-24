// -----------------------------------------------------------------------

$(".right").mouseenter(function() {
  $(".colour").css({ opacity: "0", display: "block" });
  $(".colour")
    .stop()
    .animate({ opacity: "1" }, 300);
});

$(".right").mouseleave(function() {
  $(".colour").css({ opacity: "0", display: "block" });
  $(".colour")
    .stop()
    .animate({ opacity: "0" }, 300);
});

$(".left").mouseenter(function() {
  $(".colorfull").css({ opacity: "0", display: "block" });
  $(".colorfull")
    .stop()
    .animate({ opacity: "1" }, 300);
});

$(".left").mouseleave(function() {
  $(".colorfull").css({ opacity: "0", display: "block" });
  $(".colorfull")
    .stop()
    .animate({ opacity: "0" }, 300);
});
