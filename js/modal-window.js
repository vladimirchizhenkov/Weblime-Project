 var modal_contacts = document.getElementById('feedback__window');
 var btn_contacts = document.getElementById("feedback__button");
 var span_contacts = document.getElementsByClassName("feedback__close")[0];

 btn_contacts.onclick = function () {
 	modal_contacts.style.display = "block";
 }
 span_contacts.onclick = function () {
 	modal_contacts.style.display = "none";
 }

 window.onclick = function(event) {
 	if (event.target == modal_contacts) {
 		modal_contacts.style.display = "none";
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