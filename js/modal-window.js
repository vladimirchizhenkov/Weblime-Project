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