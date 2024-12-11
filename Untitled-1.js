document.addEventListener("DOMContentLoaded", () => {
    const ball = document.getElementById('ball');
    const title = document.getElementById('title');

    // Borrar la pelota después de la animación
    ball.addEventListener('animationend', () => {
        ball.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const introText = document.querySelector(".intro-text");

    const handleScrollAnimation = () => {
        const introPosition = introText.getBoundingClientRect().top; // Posición relativa al viewport
        const screenHeight = window.innerHeight; // Altura de la ventana visible

        // Si el texto está dentro del viewport, añade la clase de animación
        if (introPosition < screenHeight * 0.75) { // 75% visible
            introText.classList.add("visible");
        }
    };

    // Ejecuta la función al hacer scroll
    window.addEventListener("scroll", handleScrollAnimation);

    // Verifica la posición inicial en caso de que ya esté visible
    handleScrollAnimation();
});

document.addEventListener("DOMContentLoaded", () => {
    const logos = document.querySelectorAll("#agencias .logos img");

    const handleLogoAnimation = () => {
        logos.forEach((logo) => {
            const logoPosition = logo.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (logoPosition < screenHeight * 0.75) { // Si está 75% visible
                logo.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", handleLogoAnimation);

    // Verifica la posición inicial en caso de que ya estén visibles
    handleLogoAnimation();
});

document.addEventListener("DOMContentLoaded", () => {
    const ball = document.getElementById('ball');
    const title = document.getElementById('title');

    // Interacción con el mouse
    document.addEventListener('mousemove', (event) => {
        ball.style.left = `${event.pageX}px`;
        ball.style.top = `${event.pageY}px`;
    });

    // Borrar la pelota después de la animación
    ball.addEventListener('animationend', () => {
        ball.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const logos = document.querySelectorAll("#agencias .logos img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 }); // 50% visibilidad

    logos.forEach((logo) => observer.observe(logo));
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('header nav ul li a');

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href").substring(1); // Obtener el ID del destino
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                event.preventDefault(); // Evita el comportamiento por defecto
                targetElement.scrollIntoView({ behavior: "smooth" }); // Scroll suave
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('header nav ul li a');

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href").substring(1); // Extraer ID del destino
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                event.preventDefault(); // Prevenir el comportamiento por defecto
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" }); // Scroll suave
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('header nav ul li a, .logo a'); // Incluye el logo

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href").substring(1); // Extraer el ID del destino
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                event.preventDefault(); // Prevenir el comportamiento por defecto
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" }); // Scroll suave
            }
        });
    });
});


