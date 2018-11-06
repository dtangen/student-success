$(document).ready(function() {
  $(".dropdown-content").mouseenter(function() {
    $(".dropdown").css("color", "purple");
  }).mouseleave(function() {
    $(".dropdown").css("color", "white");
  })
});
