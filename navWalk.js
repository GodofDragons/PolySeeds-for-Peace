function sidewalk_in() {
	document.getElementById('overlay').style.visibility = "visible";
	document.getElementById('overlay').style.opacity = "1";
	document.getElementById('sidewalk').style.left = "0px";
	document.documentElement.style.height = "100vh";
	document.documentElement.style.overflow = "hidden";
}
function sidewalk_out() {
	document.getElementById('overlay').style.visibility = "hidden";
	document.getElementById('overlay').style.opacity = "0";
	document.getElementById('sidewalk').style.left = "-100vw";
	document.documentElement.style.height = "auto";
	document.documentElement.style.overflow = "visible";
}