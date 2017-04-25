// $(document).ready(function() {
//   $(".clickable").click(function() {
//       $("#initially-hidden").toggle();
//       $("initially-hidden").fadeIn('slow');
//       $("#initially-showing").toggle();
//   });
// });
$(document).ready(function() {

  $(".clickable").click(function() {
    $("#initially-hidden").fadeToggle();
  });

  $(".clickable").click(function() {
      $('#initially-showing').fadeToggle();

  });

  $(".walruses").click(function() {
      $('.walruses').slideToggle();
  });

  $(".clickable").click(function() {
    $('.walruses').slideToggle();

  });

  $(".walruses").click(function() {
    $('#comeback').fadeToggle();

  });

});
