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
/* =========================
   SEARCH & MODAL FIX
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      searchByKeyword(searchInput.value);
    });

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        searchByKeyword(searchInput.value);
      }
    });
  }

  // Modal close
  const modal = document.getElementById("productModal");
  const closeBtn = document.querySelector(".close-modal");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProductModal);
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProductModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
    }
  });
});

/* =========================
   SEARCH FUNCTION
   ========================= */

function searchByKeyword(keyword) {
  keyword = keyword.toLowerCase().trim();
  const container = document.querySelector(".search-results");
  container.innerHTML = "";

  // CEK MOMEN
  if (rekomendasiMomen[keyword]) {
    const rekom = rekomendasiMomen[keyword];
    const hasil = products.filter(p =>
      rekom.products.includes(Number(p.id))
    );
    tampilkanHasilSearch(hasil, rekom);
    return;
  }

  // SEARCH NORMAL
  const hasil = products.filter(p =>
    p.name.toLowerCase().includes(keyword) ||
    p.description.toLowerCase().includes(keyword) ||
    p.category.toLowerCase().includes(keyword)
  );

  tampilkanHasilSearch(hasil);
}

/* =========================
   RENDER HASIL SEARCH
   ========================= */

function tampilkanHasilSearch(data, momen = null) {
  const container = document.querySelector(".search-results");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>Tidak ada rekomendasi 😢</p>";
    return;
  }

  if (momen) {
    container.innerHTML += `
      <div class="search-moment">
        <h3>${momen.icon} ${momen.title}</h3>
        <p>${momen.description}</p>
      </div>
    `;
  }

  data.forEach(product => {
    const card = document.createElement("div");
    card.className = "search-result-card";

    card.innerHTML = `
      <img src="${product.image}">
      <h4>${product.name}</h4>
      <p>${product.description}</p>
      <span class="price">${product.price}</span>
    `;

    card.addEventListener("click", () => {
      openProductModal(product);
    });

    container.appendChild(card);
  });
}

   