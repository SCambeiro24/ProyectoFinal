document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('#nextBtn');
    const prevButton = document.querySelector('#prevBtn');

    if (!track || !nextButton || !prevButton) {
        console.error("ERROR: No encuentro los elementos. Revisa los IDs en el HTML.");
        return;
    }

    let currentIndex = 0;

    const updateSlider = () => {
        // Multiplicamos el índice por -100 para mover el track a la izquierda
        const amountToMove = currentIndex * 100;
        track.style.transform = `translateX(-${amountToMove}%)`;
    };

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });

    console.log("Slider listo con " + slides.length + " imágenes.");
});