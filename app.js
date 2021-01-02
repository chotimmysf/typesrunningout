const word=document.getElementById('word');
const text=document.getElementById('text');
const scoreEl=document.getElementById('score');
const timeEl=document.getElementById('time');
const endgameEl=document.getElementById('end-game-container');
const settingsBtn=document.getElementById('settings-btn');
const settings=document.getElementById('settings');
const settingsForm=document.getElementById('settings-form');
const levelSelection=document.getElementById('level');

// Words List
const words = [
    'virulent', 'mismagious', 'panna cotta', 'dolphin', 'online', 'shopping', 'petulant','karma','target','challenger','bloom','flora','fauna', 
    'stars','Duolingo','Korean BBQ Beef', 'Okinawa-Style Okonomiyaki', 'Maguro Maki', 'tteokbokki'
]

// Initialize word
let randomWord;

// Init score
let score=0;

// Init time
let time=30;
let initialTime=time;

// Focus on text on start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);


function getRandomWord() {
    return words[Math.floor(Math.random()* words.length)];
}

console.log(getRandomWord());

// Add word to DOM
function addWordtoDOM() {
    randomWord=getRandomWord();
    word.innerHTML=`<h1 id="word">Type "${randomWord}".</h1>`;
}

// Update score
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

addWordtoDOM();

// Update time
function updateTime() {
    time--;
    timeEl.innerHTML=time+' seconds';

    if (time===0) {
        clearInterval(timeInterval);

        // End game
        gameOver();
    }
}

// Game Over
function gameOver() {
    endgameEl.innerHTML = `
    <h1>Time is up!</h1>
    <p>You typed ${score} words within ${initialTime} seconds! Your score is ${score}!</p>
    <button onclick='location.reload()'>Replay</button> 
    `;

    endgameEl.style.display = "flex";
}

// Event Listeners

text.addEventListener('input', e => {
    const insertedText = e.target.value;
    console.log(insertedText)

    if (insertedText===randomWord) {
        addWordtoDOM();
        updateScore();

        // Clear previous word
        e.target.value = '';

        time += 2.5;
        updateTime();
        Math.floor(time);
    }
})

// Settings btn click