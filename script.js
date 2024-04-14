let board = document.querySelector('.board');
let pops = document.querySelectorAll('.pop');
let popSound = new Audio('pop.mp3');
let flipH = document.getElementById('flipH');
let flipV = document.getElementById('flipV');

pops.forEach(pop => {
    pop.addEventListener('click', ()=>{
        pop.classList.toggle('active');
        popSound.pause();
        popSound.currentTime = 0;
        popSound.play();
    });
});

flipH.addEventListener('click', ()=>{
    board.classList.toggle('flipH');
    setTimeout(()=>{
        pops.forEach(pop => {
            pop.classList.toggle('active');
        });
    }, 200);
});
flipV.addEventListener('click', ()=>{
    board.classList.toggle('flipV');
    setTimeout(()=>{
        pops.forEach(pop => {
            pop.classList.toggle('active');
        });
    }, 200);
});
