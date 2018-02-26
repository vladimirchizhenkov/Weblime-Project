 var modal = document.getElementById('feedback__window');
 var btn = document.getElementById("feedback__button");
 var span = document.getElementsByClassName("feedback__close")[0];

 btn.onclick = function () {
 	modal.style.display = "block";
 }
 span.onclick = function () {
 	modal.style.display = "none";
 }

 window.onclick = function(event) {
 	if (event.target == modal) {
 		modal.style.display = "none";
 	}
 }

 var modal_map = document.getElementById('on-map__window');
 var btn_map = document.getElementById("on-map__link");
 var span_map = document.getElementsByClassName("on-map__close")[0];

 btn_map.onclick = function () {
 	modal_map.style.display = "block";
 }
 span_map.onclick = function () {
 	modal_map.style.display = "none";
 }

 window.onclick = function(event) {
 	if (event.target == modal_map) {
 		modal.style.display = "none";
 	}
 }