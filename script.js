document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Fonctionnalité Slider Interactif (Page d'accueil)
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentSlide = 0;

    function showSlide(index) {
        if (slides.length === 0) return;
        slides.forEach((slide) => slide.classList.remove("active"));
        
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        
        slides[currentSlide].classList.add("active");
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
            showSlide(currentSlide - 1);
        });

        nextBtn.addEventListener("click", () => {
            showSlide(currentSlide + 1);
        });
    }

    // 2. Fonctionnalité Show / Hide Password (Login & Register)
    const toggleButtons = document.querySelectorAll(".toggle-password");

    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            const passwordInput = document.getElementById(targetId);

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                button.textContent = "Masquer";
            } else {
                passwordInput.type = "password";
                button.textContent = "Afficher";
            }
        });
    });

});