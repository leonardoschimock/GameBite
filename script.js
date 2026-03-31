document.addEventListener("DOMContentLoaded", function () {

    // SLIDER
    let slides = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[i].classList.add('active');
    }

    document.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });

    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 5000);

    showSlide(index);

    // BUSCA
    ativarBusca();
});