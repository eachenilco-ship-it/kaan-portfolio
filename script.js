const bouton = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-links');

function fermerMenu() {
  if (!bouton || !menu) return;
  menu.classList.remove('ouvert');
  bouton.setAttribute('aria-expanded', 'false');
  bouton.setAttribute('aria-label', 'Ouvrir le menu');
  bouton.textContent = '☰';
}

if (bouton && menu) {
  bouton.addEventListener('click', function () {
    const ouvert = menu.classList.toggle('ouvert');
    bouton.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
    bouton.setAttribute('aria-label', ouvert ? 'Fermer le menu' : 'Ouvrir le menu');
    bouton.textContent = ouvert ? '×' : '☰';
  });
  menu.querySelectorAll('a').forEach((lien) => lien.addEventListener('click', fermerMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 800) fermerMenu(); });
}

const formulaire = document.getElementById('formulaire-contact');
const confirmation = document.getElementById('confirmation');
if (formulaire && confirmation) {
  formulaire.addEventListener('submit', function (event) {
    event.preventDefault();
    confirmation.textContent = 'Merci ! Votre demande a bien été prise en compte. Je vous réponds rapidement.';
    formulaire.reset();
  });
}

const elementsAAnimer = document.querySelectorAll('.reveal:not(.visible)');
if ('IntersectionObserver' in window) {
  const observateur = new IntersectionObserver((entrees, observer) => {
    entrees.forEach((entree) => {
      if (entree.isIntersecting) {
        entree.target.classList.add('visible');
        observer.unobserve(entree.target);
      }
    });
  }, { threshold: 0.12 });
  elementsAAnimer.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 65, 260)}ms`;
    observateur.observe(element);
  });
} else {
  elementsAAnimer.forEach((element) => element.classList.add('visible'));
}

const stage = document.querySelector('.panther-stage');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (stage && !prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
  stage.addEventListener('pointermove', (event) => {
    const bounds = stage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    stage.style.transform = `translate(${x * 8}px, ${y * 8}px) rotate(${x * 1.2}deg)`;
  });
  stage.addEventListener('pointerleave', () => { stage.style.transform = ''; });
}
