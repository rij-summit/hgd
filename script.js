const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function updateCarousel(){
    track.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => {
    index++;

    if(index >= slides.length){
        index = 0;
    }

    updateCarousel();
});

prev.addEventListener("click", () => {
    index--;

    if(index < 0){
        index = slides.length - 1;
    }

    updateCarousel();
});

confetti({
    particleCount: 250,
    spread: 180,
    origin: { y: 0.6 }
});

const duration = 5000;
const end = Date.now() + duration;

(function frame() {

    confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
    });

    confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }

})();