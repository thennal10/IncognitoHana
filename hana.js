var hana = document.createElement('img');
hana.src = chrome.runtime.getURL("assets/hana.png");
hana.style.cssText = "z-index: 100; position: fixed; right: -50%; bottom: 0px; height: 80%; transition-property: right; transition-timing-function: cubic-bezier(.18,.85,.15,.98); transition-duration: 3s;"
document.body.appendChild(hana);

var audio = new Audio(chrome.runtime.getURL("assets/hana.mp3"));
var played = false;
document.addEventListener("click", function(){
	if (!played) {
		audio.play();
		hana.style.right = "-15%"
		played = true;
	}
});
