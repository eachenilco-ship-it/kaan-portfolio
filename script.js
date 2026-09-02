// Menu mobile accessible
const bouton = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-links");

if (bouton && menu) {
  bouton.addEventListener("click", function () {
    const ouvert = menu.classList.toggle("ouvert");
    bouton.setAttribute("aria-expanded", ouvert ? "true" : "false");
    bouton.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
    bouton.textContent = ouvert ? "×" : "☰";
  });

  menu.querySelectorAll("a").forEach(function (lien) {
    lien.addEventListener("click", function () {
      menu.classList.remove("ouvert");
      bouton.setAttribute("aria-expanded", "false");
      bouton.setAttribute("aria-label", "Ouvrir le menu");
      bouton.textContent = "☰";
    });
  });
}

// Confirmation du formulaire statique
const formulaire = document.getElementById("formulaire-contact");
const confirmation = document.getElementById("confirmation");

if (formulaire && confirmation) {
  formulaire.addEventListener("submit", function (event) {
    event.preventDefault();
    confirmation.textContent = "Merci ! Votre demande a bien été prise en compte. Je vous réponds rapidement.";
    formulaire.reset();
  });
}

// Animations d’apparition au défilement
const elementsAAnimer = document.querySelectorAll(".reveal:not(.visible)");

if ("IntersectionObserver" in window) {
  const observateur = new IntersectionObserver(function (entrees, observer) {
    entrees.forEach(function (entree) {
      if (entree.isIntersecting) {
        entree.target.classList.add("visible");
        observer.unobserve(entree.target);
      }
    });
  }, { threshold: 0.14 });

  elementsAAnimer.forEach(function (element, index) {
    element.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    observateur.observe(element);
  });
} else {
  elementsAAnimer.forEach(function (element) {
    element.classList.add("visible");
  });
}
