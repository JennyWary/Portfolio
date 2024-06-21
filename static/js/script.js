window.addEventListener('scroll', function() {
    var headerTexts = document.querySelectorAll('.color-text');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    // Positionen der Elemente ermitteln
    var scroll1 = document.getElementById('scroll1').offsetTop;
    var scroll2 = document.getElementById('scroll2').offsetTop;
    var scroll3 = document.getElementById('scroll3').offsetTop;

    headerTexts.forEach(function(headerText) {
        if (scrollPosition >= scroll3) {
            headerText.style.color = '#447df8'; // Neue Schriftfarbe für scroll3
        } else if (scrollPosition >= scroll2) {
            headerText.style.color = '#8A2BE2'; // Neue Schriftfarbe für scroll2
        } else if (scrollPosition >= scroll1) {
            headerText.style.color = '#E94057'; // Neue Schriftfarbe für scroll1
        } else {
            headerText.style.color = '#e9b340'; // Ursprüngliche Schriftfarbe
        }
    });
});



window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    var logos = document.querySelectorAll('.logo-nav');

    var scroll1 = document.getElementById('scroll1').offsetTop;
    var scroll2 = document.getElementById('scroll2').offsetTop;
    var scroll3 = document.getElementById('scroll3').offsetTop;

    var shadowColor;

    logos.forEach(function(logos) {
        if (scrollPosition >= scroll3) {
            shadowColor = '#447df8';
        } else if (scrollPosition >= scroll2) {
            shadowColor = '#8A2BE2';
        } else if (scrollPosition >= scroll1) {
            shadowColor = '#E94057';
        } else {
            shadowColor = '#e9b340';
        }
    });

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

// ----Sprach bar----


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
    const myImage = document.getElementById('image-container');
    const myNav = document.getElementById('nav');

    myImage.style.height = `${windowHeight}px`;

    myNav.style.width = `${windowWidth}px`;
}

// Initialer Aufruf
updateWidthInStyle();

// Aktualisieren bei Größenänderung des Fensters
window.addEventListener('resize', updateWidthInStyle);


// ----------------

function updateStyle() {
    const windowWidth = window.outerWidth;
    var title = document.querySelectorAll('.title');
    var stichpunkte = document.querySelectorAll('.width');
    var language = document.querySelectorAll('.size');

    if (windowWidth <= 760) {
        title.forEach(function(element) {
            element.style.fontSize = '25px';
        });
    }
    if (windowWidth <= 760) {
        language.forEach(function(element) {
            element.style.fontSize = '25px';
        });
    }

    if (windowWidth <= 687) {
        stichpunkte.forEach(function(element) {
            element.style.fontSize = '14px';
        });
    }
    if (windowWidth <= 558) {
        title.forEach(function(element) {
            element.style.fontSize = '35px';
        });
    }
    if (windowWidth <= 558) {
        language.forEach(function(element) {
            element.style.fontSize = '35px';
        });
    }
}

// Initialer Aufruf
updateStyle();

// Aktualisieren bei Größenänderung des Fensters
window.addEventListener('resize', updateStyle);

// -------------------

function updateAnimationClasses() {
    const elements = document.querySelectorAll('.animate');
    const width = window.innerWidth;

    elements.forEach(element => {
        if (width <= 981) {
            element.classList.remove('fromLeft');
            element.classList.add('fromBottom');
            console.log('test');
        } else {
            element.classList.remove('fromBottom');
            element.classList.add('fromLeft');
            console.log('test1');
        }
    });
}

// Initiale Überprüfung beim Laden der Seite
window.addEventListener('load', updateAnimationClasses);

// Überprüfung bei Größenänderung des Fensters
window.addEventListener('resize', updateAnimationClasses);


// ---------

document.addEventListener("DOMContentLoaded", function() {
    const expImg = document.getElementById("exp-img");
    const laptopImg = document.getElementById("laptop-img");
    const personImg = document.getElementById("person-img");

    const scroll1 = document.getElementById("scroll1");
    const scroll2 = document.getElementById("scroll2");
    const scroll3 = document.getElementById("scroll3");

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (isElementInViewport(scroll1, scrollPosition)) {
            expImg.src = "../static/imgs/exp-red.png";
            laptopImg.src = "../static/imgs/laptop-white.png";
            personImg.src = "../static/imgs/person-white.png";
        } else {
            expImg.src = "../static/imgs/exp-white.png";
        }

        if (isElementInViewport(scroll2, scrollPosition)) {
            expImg.src = "../static/imgs/exp-white.png";
            laptopImg.src = "../static/imgs/laptop-purple.png";
            personImg.src = "../static/imgs/person-white.png";
        } else {
            laptopImg.src = "../static/imgs/laptop-white.png";
        }

        if (isElementInViewport(scroll3, scrollPosition)) {
            expImg.src = "../static/imgs/exp-white.png";
            laptopImg.src = "../static/imgs/laptop-white.png";
            personImg.src = "../static/imgs/person-blue.png";
        } else {
            personImg.src = "../static/imgs/person-white.png";
        }
    });

    function isElementInViewport(element, scrollPosition) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + element.clientHeight;

        return scrollPosition >= elementTop && scrollPosition <= elementBottom;
    }
});

