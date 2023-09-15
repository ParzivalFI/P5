const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let messlides = 0;

const imageElement = document.querySelector('.banner-img');
const tagLineElement = document.querySelector('.tag-line');

function updateSlide() {
    const slide = slides[messlides];
    imageElement.src = `./assets/images/slideshow/${slide.image}`;
    tagLineElement.innerHTML = slide.tagLine;
}

// Afficher la première diapositive au chargement
updateSlide();

function nextSlide() {
    messlides = (messlides + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    messlides = (messlides - 1 + slides.length) % slides.length;
    updateSlide();
}

document.getElementById('precedant').addEventListener('click', prevSlide);
document.getElementById('suivant').addEventListener('click', nextSlide);



let slideIndex = 1;
showSlides(slideIndex);


// n c'est 1
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {

	const dots = document.getElementsByClassName('dot');

	
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
	dots[mslideIndex - 1].classList.add('dot_selected');

}


