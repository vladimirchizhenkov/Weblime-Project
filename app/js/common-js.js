// Preloader;

document.body.onload = function() {

	setTimeout(function() {	
		var preloader = document.getElementById('page-preloader');
		if ( !preloader.classList.contains('done') )
		{
			preloader.classList.add('done')
		}
	}, 1000);
}

// Modal window and button 'close' for block 'feedback';

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

 // Modal window and button 'close' for block 'hidden-feedback';

 var hidden_modal_contacts = document.getElementById('hidden-feedback__window');
 var hidden_btn_contacts = document.getElementById("hidden-feedback__button");
 var hidden_span_contacts = document.getElementsByClassName("hidden-feedback__close")[0];


 hidden_btn_contacts.onclick = function () {
 	hidden_modal_contacts.style.display = "block";
 }
 hidden_span_contacts.onclick = function () {
 	hidden_modal_contacts.style.display = "none";
 }

 window.onclick = function(event) {
 	if (event.target == modal_contacts) {
 		hidden_modal_contacts.style.display = "none";
 	}
 }

 // Modal window and button 'close' for block 'on-map';

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