// Menu mobile
const bouton = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-links");

bouton.addEventListener("click", function() {
  menu.classList.toggle("ouvert");
});

// Formulaire de contact
const formulaire = document.getElementById("formulaire-contact");
const confirmation = document.getElementById("confirmation");

formulaire.addEventListener("submit", function(event) {
  event.preventDefault();
  confirmation.textContent = "Merci ! Votre message a bien été envoyé.";
  formulaire.reset();
});

// Animations au défilement
const elementsAAnimer = document.querySelectorAll(".reveal");

const observateur = new IntersectionObserver(function(entrees) {
  entrees.forEach(function(entree) {
    if (entree.isIntersecting) {
      entree.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

elementsAAnimer.forEach(function(element) {
  observateur.observe(element);
});