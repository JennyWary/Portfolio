window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight - 700
    var headerTexts = document.querySelectorAll('.color-text');
    var scrollPosition = window.scrollY;

    headerTexts.forEach(function(headerText) {
        if (scrollPosition > 2800) {
            headerText.style.color = '#447df8'; // Neue Schriftfarbe beim Scrollen
        }else if(scrollPosition > 1800){
            headerText.style.color = '#8A2BE2';// Neue Schriftfarbe beim Scrollen
        } else if(scrollPosition > windowHeight){
            headerText.style.color = '#E94057'; // Ursprüngliche Schriftfarbe
        }else{
            headerText.style.color = '#e9b340'; // Ursprüngliche Schriftfarbe

        }
    });
});



window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight - 700
    var logos = document.querySelectorAll('.logo-nav');
    var scrollPosition = window.scrollY;

    var shadowColor;
    if (scrollPosition > 2800) {
        shadowColor = '#447df8';
    } else if (scrollPosition > 1800) {
        shadowColor = '#8A2BE2';
    } else if (scrollPosition > windowHeight) {
        shadowColor = '#E94057';
    }else {
        shadowColor = '#e9b340';

    }

    logos.forEach(function(logo) {
        logo.addEventListener('mouseover', function() {
            logo.style.filter = `drop-shadow(5px 5px 5px ${shadowColor})`;
        });

        logo.addEventListener('mouseout', function() {
            logo.style.filter = 'none';
        });
    });
});

// ----------------Tippen------------------------



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

// --------


document.addEventListener("DOMContentLoaded", function() {
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateBars() {
        var bars = document.querySelectorAll('.bar');
        for (var i = 0; i < bars.length; i++) {
            if (isElementInViewport(bars[i])) {
                bars[i].style.width = bars[i].getAttribute('data-percent');
            }
        }
    }

    window.addEventListener('scroll', animateBars);
    animateBars();  // Initial check in case bars are already in view on load
});
// --------------
function updateWidthInStyle() {
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth;
    const myElement = document.getElementById('image');
    // const myAside = document.getElementById('aside');
    const myImage = document.getElementById('image-container');


    // Anwenden der Fensterbreite auf das Element
    myElement.style.height = `${windowHeight}px`;
    myElement.style.width = `${windowWidth}px`;

    // myAside.style.height = `${windowHeight}px`;
    //
    // myImage.style.width = `${windowWidth}px`;
    myImage.style.height = `${windowHeight}px`;
}

// Initialer Aufruf
updateWidthInStyle();

// Aktualisieren bei Größenänderung des Fensters
window.addEventListener('resize', updateWidthInStyle);
