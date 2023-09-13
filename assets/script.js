
let slideIndex = 1;
showSlides(slideIndex);

// n c'est 1
function plusSlides(n) {
	showSlides(slideIndex += n);
}
// n c'est 1
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let slides = document.getElementsByClassName('banner-img');
	let dots = document.getElementsByClassName('dot');

	if (n > slides.length) { slideIndex = 1 }

	if (n < 1) { slideIndex = slides.length }

	// Cacher toutes les slides sur le site
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	// Afficher la slide
	slides[slideIndex - 1].style.display = 'block';
	// Retirer "dot_selected" de tous les points
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('dot_selected');
	}
	// Ajouter "dot_selected" sur le point cliqué
	dots[slideIndex - 1].classList.add('dot_selected');

}


// je n'ai pas utiliser la const slides j'ai utiliser a la plasse let slides = document.getElementsByClassName('banner-img');










// const slides = [
// 	{
// 		"image":"slide1.jpg",
// 		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		"image":"slide2.jpg",
// 		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 	},
// 	{
// 		"image":"slide3.jpg",
// 		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		"image":"slide4.png",
// 		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
// 	}
// ]
