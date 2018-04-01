 // NiceScroll settings;

$("body").niceScroll({
	cursorcolor: "#d8d8d8",
	cursorwidth:"5px",
	horizrailenabled: "false",
	cursorborder:"none",
	railvalign: "bottom"
});

$("#nicescrollBox").niceScroll({
	cursorcolor:"#d8d8d8",
	cursorborder:"none"
});

// 'Header. my contacts'. Mobile dropbox function;

$(".my-contacts-hidden").click(function(event) {
  if ($(event.target).hasClass('my-contacts-hidden')) {
    $(".my-contacts-hidden__list").toggleClass("my-contacts-hidden__list_visible")
  }
});

//'Career' Ladder-box click function;

$(".ladder-box").click(function(e) {
	e.preventDefault();
	$(".ladder-box").removeClass("ladder-box_active");
	$(".ladder-block__date").removeClass("ladder-block__date_active")
	$(this).addClass("ladder-box_active")
	$(this).parent().find(".ladder-block__date").addClass("ladder-block__date_active");
});