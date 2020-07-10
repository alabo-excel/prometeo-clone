$(document).ready(function () {
  $("#bars").click(function () {
    $("#header ul li").css("display", "block");
    $("#bars").css("display", "none");
    $("#bars2").css("display", "block");
    $("#close").css("display", "block");
  });
  $("#close").click(function () {
    $("#header ul li").css("display", "none");
    $("#bars").css("display", "block");
    $("#bars2").css("display", "none");
    $("#close").css("display", "none");
  });
});
