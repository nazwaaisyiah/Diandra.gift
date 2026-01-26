// main.js
document.addEventListener("DOMContentLoaded", () => {

    // Hamburger menu
    const nav = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");

    if (hamburger && nav) {
        hamburger.addEventListener("click", () => {
            nav.classList.toggle("active");
        });

        // Tutup menu saat link diklik
        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
            });
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    // Animasi scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.opacity = 1;
                e.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(
        ".product-card, .search-result-product, .about-content, .contact-container"
    ).forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(el);
    });

    // Tutup menu saat resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && nav) {
            nav.classList.remove("active");
        }
    });
});
   