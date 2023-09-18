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


// Étape 1: Ajout de la variable messlides avec une valeur initiale de 1
let messlides = 1;

// Étape 2: Sélection des éléments HTML avec les classes '.banner-img' et '.tag-line'
const imageElement = document.querySelector('.banner-img');
const tagLineElement = document.querySelector('.tag-line');

// Étape 3: Création d'une fonction pour les dot
function currentSlide(n) {
	updateSlide(messlides = n);
};

// Étape 4: Création d'une fonction pour mettre à jour l'image actuelle
function updateSlide() {
    const slide = slides[messlides];
	let dots = document.getElementsByClassName('dot');
    imageElement.src = `./assets/images/slideshow/${slide.image}`;
    tagLineElement.innerHTML = slide.tagLine;

		// Retirer "dot_selected" de tous les points
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot_selected');
		}
		// Ajouter "dot_selected" sur le point cliqué
		dots[messlides - 1].classList.add('dot_selected');
}

// Afficher la première image au chargement
updateSlide();

// Étape 5: Création de la fonction pour afficher l'image suivante
function nextSlide() {
    messlides = (messlides + 1) % slides.length;
    updateSlide();
}
// Étape 6: Création de la fonction pour afficher l'image précédent
function prevSlide() {
    messlides = (messlides - 1 + slides.length) % slides.length;
    updateSlide();
}
// Étape 7: Ajout des boutons "Précédent" et "Suivant"
document.getElementById('precedent').addEventListener('click', prevSlide);
document.getElementById('suivant').addEventListener('click', nextSlide);