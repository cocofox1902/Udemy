$("h1").hide();
$("h1").show();

$("p").click(() => {
  //   $("h1").toggle()
  //   $("h1").fadeToggle();
  //   $("h1").slideToggle();
  //   $("h1").animate({
  //     opacity: 0.7,
  //     margin: 30,
  //   });
  $("h1").slideUp().slideDown().animate({ opacity: 0.7, margin: 30 });
});
