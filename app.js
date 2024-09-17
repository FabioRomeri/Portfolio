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


function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
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