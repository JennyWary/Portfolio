window.addEventListener('scroll', function() {
    var headerTexts = document.querySelectorAll('.color-text');
    var scrollPosition = window.scrollY;

    headerTexts.forEach(function(headerText) {
        if (scrollPosition > 400) {
            headerText.style.color = '#5F00C2'; // Neue Schriftfarbe beim Scrollen
        } else {
            headerText.style.color = '#FF352C'; // Ursprüngliche Schriftfarbe
        }
    });
});

window.addEventListener('scroll', function() {
    var scrollImages = document.querySelectorAll('.scroll-image');
    var scrollPosition = window.scrollY;

    scrollImages.forEach(function(image, index) {
        if (scrollPosition > 400) {
            image.src = `../imgs/image${index + 4}.png`; // Ändere das Bild auf eine neue URL beim Scrollen
        } else {
            image.src = `../imgs/image${index + 1}.png`; // Ursprüngliches Bild
        }
    });
});

// ----------------------------------------



const words = ["WEB-DEVELOPER", "FRONTEND-DEVELOPER", "BACKEND-DEVELOPER", "FULLSTACK-DEVEOLPER", ];
let currentWordIndex = 0;
let currentCharIndex = 0;
const typingSpeed = 200;
const deletingSpeed = 100;
const delayBetweenWords = 1500;
const textElement = document.getElementById('text');

function type() {
    if (currentCharIndex < words[currentWordIndex].length) {
        textElement.innerHTML += words[currentWordIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(deleteWord, delayBetweenWords);
    }
}

function deleteWord() {
    if (currentCharIndex > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        currentCharIndex--;
        setTimeout(deleteWord, deletingSpeed);
    } else {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(type, typingSpeed);
    }
}

type();