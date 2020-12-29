const word=document.getElementById('word');
const text=document.getElementById('text');
const scoreEl=document.getElementById('score');
const timeEl=document.getElementById('time');
const endgameEl=document.getElementById('end-game');
const settingsBtn=document.getElementById('settings-btn');
const settings=document.getElementById('settings');
const settingsForm=document.getElementById('settings-form');
const levelSelection=document.getElementById('level');

// Words List
const words = [
    'virulent', 'mismagious', 'panna cotta', 'dolphin', 'online', 'shopping', 'petulant','karma','target','challenger','bloom','flora','fauna'
]

// Initialize word
let randomWord;

// Init score
let score=0;

// Init time
let time=30;

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
    scoreEl.innerHTML=score;
}

addWordtoDOM();

// Event Listeners

text.addEventListener('input', e => {
    const insertedText = e.target.value;
    console.log(insertedText)

    if (insertedText===randomWord) {
        addWordtoDOM();

        // Clear previous word
        e.target.value = '';
    }
})