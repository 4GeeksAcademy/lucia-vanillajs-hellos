import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    generateRandomCard();
};

function generateRandomCard() {
    const suits = ['♦', '♥', '♠', '♣'];
    const suitClasses = ['diamond', 'heart', 'spade', 'club'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    
    const randomSuit = Math.floor(Math.random() * 4);
    const randomValue = Math.floor(Math.random() * 13);
    
    const card = document.querySelector('.playing-card');
    const topNumber = document.querySelector('.top-number');
    const bottomNumber = document.querySelector('.bottom-number');
    const suitSymbol = document.querySelector('.suit');
    
    topNumber.innerHTML = values[randomValue];
    bottomNumber.innerHTML = values[randomValue];
    suitSymbol.innerHTML = suits[randomSuit];
    
    card.className = 'playing-card ' + suitClasses[randomSuit];
}