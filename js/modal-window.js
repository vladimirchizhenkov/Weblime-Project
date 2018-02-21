 var modal = document.getElementById('feedback__window');
 var btn = document.getElementById("feedback__button");
 var span = document.getElementsByClassName("feedback__close")[0];

 btn.onclick = function () {
 	modal.style.display = "block";
 }
 span.onclick = function () {
 	modal.style.display = "none";
 }