window.addEventListener('scroll', function() {
    var headerTexts = document.querySelectorAll('.color-text');
    var scrollPosition = window.scrollY;

    headerTexts.forEach(function(headerText) {
        if (scrollPosition > 900) {
            headerText.style.color = '#447df8'; // Neue Schriftfarbe beim Scrollen
        }else if(scrollPosition > 400){
            headerText.style.color = '#7130bf';// Neue Schriftfarbe beim Scrollen
        } else{
            headerText.style.color = '#E94057'; // Ursprüngliche Schriftfarbe

        }
    });
});

window.addEventListener('scroll', function() {
    var scrollImages = document.querySelectorAll('.scroll-image');
    var scrollPosition = window.scrollY;

    scrollImages.forEach(function(image, index) {
        if (scrollPosition > 900) {
            image.src = `../static/imgs/image${index + 7}.png`;
        } else if (scrollPosition > 400){
            image.src = `../static/imgs/image${index + 4}.png`;
        }else{
            image.src = `../static/imgs/image${index + 1}.png`;
        }
    });
});

// ----------------------------------------



const words = ["WEB-DEVELOPER", "FRONTEND-DEVELOPER", "BACKEND-DEVELOPER", "FULLSTACK-DEVELOPER", ];
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


// document.addEventListener("DOMContentLoaded", () => {
//     const textFromRight = document.querySelectorAll(".textFromRight");
//     const textFromLeft = document.querySelectorAll(".textFromLeft");
//     const textFromBottom = document.querySelectorAll(".textFromBottom");
//
//     textFromRight.style.animation = "slideInFromRight 2s forwards";
//     textFromLeft.style.animation = "slideInFromLeft 2s forwards";
//     textFromBottom.style.animation = "slideInFromBottom 2s forwards";
// });


// --------

document.addEventListener("DOMContentLoaded", () => {
    const texts = document.querySelectorAll(".animatedText");

    const observerOptions = {
        threshold: 0.5 // 50% of the element must be visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    texts.forEach(text => {
        observer.observe(text);
    });
});
