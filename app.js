const sectionToNavMap = {
    'aboutSection': 'aboutNav',
    'studySection': 'studyNav',
    'experiencesSection': 'experiencesNav',
    'projectsSection': 'projectsNav',
};

// Configurazione dell'IntersectionObserver
const navObserverOptions = {
    root: null,  // viewport
    threshold: 0.5  // La sezione è considerata visibile quando almeno il 50% è visibile
};

// Funzione per gestire l'intersezione
const navObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
        const navId = sectionToNavMap[entry.target.id];
        const menuItem = document.getElementById(navId);
        //console.log("originale: ", menuItem);
        if (entry.isIntersecting) {
            menuItem.classList.add('toggled');
            //console.log("aggiornato: ", menuItem);
        } else {
            menuItem.classList.remove('toggled');
        }
    });
};

// Creiamo l'IntersectionObserver
const navObserver = new IntersectionObserver(navObserverCallback, navObserverOptions);

// Osserviamo ogni sezione
document.querySelectorAll('section').forEach(section => {
    navObserver.observe(section);
});



const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=> {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


function scrollToSection(sectionId, offset) {
    const section = document.getElementById(sectionId);
    const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset; // Posizione della sezione rispetto al top della pagina
    const scrollPosition = sectionPosition + offset; // Aggiungi l'offset

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth' // Scroll animato
    });
  }

function scrollToDivSection(sectionId, offset) {
    const container = document.getElementById('scrollableDiv');
    const section = document.getElementById(sectionId);
    if (section) {
        // Calcola la posizione di scroll necessaria
        const targetPosition = section.offsetTop + offset;
        
        // Usa scrollTo con behavior smooth per animare lo scroll
        container.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    } else {
        console.error(`Sezione con ID ${sectionId} non trovata.`);
    }
}