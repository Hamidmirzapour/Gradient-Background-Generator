var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector(".random-color");
var degree = document.querySelector("#degree");

function setGradient() {
	body.style.background =
		"linear-gradient("
		+ degree.value
		+ "deg, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ", "
		+ color3.value
		+ ")";
	css.textContent = body.style.background;
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function rgbToHex(rgb) {
	let hex = '';

	for (let i = 0; i < rgb.length; i++) {
		hex += rgb[i].toString(16);
	}

	return hex;
}

window.addEventListener('load', setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);

degree.addEventListener("input", setGradient);

randomBtn.addEventListener("click", function () {
	color1_rgb = [getRandomNumber(0, 255), getRandomNumber(0, 255), getRandomNumber(0, 255)]
	color2_rgb = [getRandomNumber(0, 255), getRandomNumber(0, 255), getRandomNumber(0, 255)]
	color3_rgb = [getRandomNumber(0, 255), getRandomNumber(0, 255), getRandomNumber(0, 255)]
	color1.value = "#" + rgbToHex(color1_rgb);
	color2.value = "#" + rgbToHex(color2_rgb);
	color3.value = "#" + rgbToHex(color3_rgb);
	setGradient();
})
