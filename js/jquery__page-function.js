$(".ladder-box").click(function(e) {
  e.preventDefault();
  $(".ladder-box").removeClass("ladder-box_active");
  $(this).addClass("ladder-box_active");
  $(".ladder-block__date").removeClass("ladder-block__date_active");
  // $(".ladder-box").siblings().addClass("ladder-block__date_active");
})