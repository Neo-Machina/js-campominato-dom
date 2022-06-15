// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// BONUS:
// 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// 2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste


const button = document.getElementById('btn-game');
button.addEventListener('click', startGame)

function startGame() {
    // 1 - Chiediere un livello di difficoltà (1,2,3) all'utente, con un prompt 
    // se si sceglie 1, il range di numeri possibili del gioco è 1-100
    // se si sceglie 2, il range di numeri possibili del gioco è 1-81
    // se si sceglie 3, il range di numeri possibili del gioco è 1-49
    let userDifficultyLevel = document.getElementById('user-level-difficulty').value;
    console.log(userDifficultyLevel);
    
    let gameMaxRange;
    switch(userDifficultyLevel) {
        case '1':
            gameMaxRange = 100;
            break;
        case '2':
            gameMaxRange = 81;
            break;
        case '3':
            gameMaxRange = 49;
            break;
    }
    
    // 2- Generare 16 numeri random (bombe) 
    // nello stesso range delle tre difficoltà:
    // gameMinRange(1)-gameMaxRange(100 o 81 o 49)
    const bombsNumber = 16;
    const bombs = bombsGenerator(bombsNumber, 1, gameMaxRange);
    console.log(bombs);
    
    // 3 - Numero max di tentativi possibili per ogni difficoltà scelta: gameMaxRange - bombe(16)
    const maxAttemptsNumbers = gameMaxRange - bombsNumber;
    console.log(maxAttemptsNumbers);
    
    // Array numeri indovinati     
    const guessedArrayNumbers = []; 
}

// ------------------
// UTILITY FUNCTIONS
// ------------------
    
// Generare un array di tot numero di elementi random 
// Inputs: 
// numberOfArrayElements -> numero di elementi dell'array
// rangeMin -> range minimo dei numeri random generati
// rangeMax -> range massimo dei numeri random generati
// Output:
// return -> array di elementi random con lunghezza numberOfArrayElements
function bombsGenerator(numberOfArrayElements, rangeMin, rangeMax) {
    // Creazione array vuoto
    const randomNumbersArray = [];
    // Finchè la lunghezza dell'array è inferiore al numero di elementi dell'arrey
    while(randomNumbersArray.length < numberOfArrayElements) {
        // Genero un numero random da rangeMin a rangeMax
        const randomNumber = getRndInteger(rangeMin, rangeMax);
        // Inserisco il numero nell'array solo se esso non è già presente 
        if(!randomNumbersArray.includes(randomNumber)) {
                randomNumbersArray.push(randomNumber);
        }
        
    }
        
    return randomNumbersArray;
}
        
// Funzione per generare un numero random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
