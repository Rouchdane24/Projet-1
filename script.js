document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".bg-img");
    let index = 0;

    setInterval(() => {
        images[index].classList.remove("active"); // Masque l’image actuelle
        index = (index + 1) % images.length; // Passe à l’image suivante
        images[index].classList.add("active"); // Affiche la nouvelle image
    }, 5000); // Change toutes les 5 secondes
});

document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".animated-icon");

    icons.forEach(icon => {
        let position = 0;
        let direction = 1;

        setInterval(() => {
            if (position >= 10) direction = -1;
            if (position <= 0) direction = 1;

            position += direction;
            icon.style.transform = `translateY(${position}px)`;
        }, 100);
    });
});
