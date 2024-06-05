window.addEventListener('scroll', function() {
    var headerTexts = document.querySelectorAll('.color-text');
    var scrollPosition = window.scrollY;

    headerTexts.forEach(function(headerText) {
        if (scrollPosition > 200) {
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
        if (scrollPosition > 200) {
            image.src = `../imgs/image${index + 4}.png`; // Ändere das Bild auf eine neue URL beim Scrollen
        } else {
            image.src = `../imgs/image${index + 1}.png`; // Ursprüngliches Bild
        }
    });
});


