const karakter = document.getElementById('karakter');
const musuh = document.getElementById('musuh');
const Jumpbtn = document.getElementById('jumpbtn');

let KarakterTop = 116;
let MusuhLeft = 600;
Jumpbtn.addEventListener('click',()=>{
    KarakterTop-=30;
    karakter.style.top = KarakterTop + 'px';
    karakter.style.transform = 'rotate(-60deg)';
    karakter.style.transition = '100ms linear';
    
    if(KarakterTop <= -50 || KarakterTop >= 200){
        gameOver()
     }
        deathByenemy()
});

Turun();
function Turun(){
    setInterval(() => {
        KarakterTop+=5;
        karakter.style.top = KarakterTop + 'px';
        TurunAnimation();
        deathByenemy() 
        
        if(KarakterTop <= -50 || KarakterTop >= 260){
            gameOver()
         }
    }, 100);
}

function TurunAnimation(){
setTimeout(() => {
    karakter.style.transform = 'rotate(0deg)';
    karakter.style.transition = '100ms linear';
}, 80);
}

Musuh();
function Musuh() {
    setInterval(() => {
        if (MusuhLeft <= -50) {
            MusuhLeft = 600;
            const randomTop = Math.random() * 200;
            musuh.style.top = randomTop + 'px';
        }
        MusuhLeft -= 5;
        musuh.style.left = MusuhLeft + 'px';
        deathByenemy(); 
    }, 100);
}

function deathByenemy() {
    const karakterRect = karakter.getBoundingClientRect();
    const musuhRect = musuh.getBoundingClientRect();
    if (
        karakterRect.left < musuhRect.right &&
        karakterRect.right > musuhRect.left &&
        karakterRect.top < musuhRect.bottom &&
        karakterRect.bottom > musuhRect.top
    ) {
        gameOver()
    }
}

//alert
const Alerts = document.getElementById('alert');
const Retrybtn = document.getElementById('closebtn');

Retrybtn.addEventListener('click',()=>{
    Alerts.style.visibility = 'hidden';
    window.location.reload();
})

//score
const Score = document.getElementById('score');
const Result = document.getElementById('Result');
let score = 0;
let scoreInterval;


function startScore() {
    scoreInterval = setInterval(() => {
        score += 1;
        Score.innerText = score;
    }, 100);
}


function gameOver() {
    clearInterval(scoreInterval); 
    Result.innerText = `Game Over! Your score is: ${score}`; 
    Alerts.style.visibility = 'visible'; 
}

startScore();