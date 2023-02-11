let pops = document.querySelectorAll('.pop');
let popSound = new Audio('pop.mp3');

pops.forEach(pop => {
    pop.addEventListener('click', function(){
        pop.classList.toggle('active');
        popSound.pause();
        popSound.currentTime = 0;
        popSound.play();
    });
});