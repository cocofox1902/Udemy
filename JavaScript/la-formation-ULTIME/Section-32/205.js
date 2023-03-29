$("h1").click(() => {
  $("h1").css("color", "orange");
});

$("p").click(() => {
  $("h1").css("color", "red");
});

$("h1").on("mouseover", () => {
  $("p").addClass("important");
});
