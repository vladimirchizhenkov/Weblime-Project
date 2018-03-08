$(".ladder-box").click(function(e) {
	e.preventDefault();
	$(".ladder-box").removeClass("ladder-box_active");
	$(".ladder-block__date").removeClass("ladder-block__date_active")
	$(this).addClass("ladder-box_active");
	$(this).parent().find(".ladder-block__date").addClass("ladder-block__date_active");
});

// $(".my-contacts-hidden").click(function() {
// 	$(".contacts__list").css({opacity: 1, visibility:'visible'});
// });
