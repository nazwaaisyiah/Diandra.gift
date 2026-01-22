
// DOM Elements
const productsGrid = document.querySelector('.products-grid');
const categoryButtons = document.querySelectorAll('.category-btn');
const modal = document.getElementById('productModal');
const closeModal = document.querySelector('.close-modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');

// DOM Elements untuk pencarian
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.querySelector('.search-results');
const suggestionTags = document.querySelectorAll('.suggestion-tag');


// search.js
function searchProducts(keyword) {
    const results = document.querySelector(".search-results");
    if (!keyword.trim()) {
        results.innerHTML = "<p>Masukkan kata kunci pencarian</p>";
        return;
    }

    const matched = products.filter(p => 
        p.name.toLowerCase().includes(keyword.toLowerCase()) ||
        p.description.toLowerCase().includes(keyword.toLowerCase()) ||
        formatCategory(p.category).toLowerCase().includes(keyword.toLowerCase())
    );

    if (matched.length === 0) {
        results.innerHTML = `<p>Tidak ada hasil untuk "${keyword}"</p>`;
        return;
    }

    results.innerHTML = "";
    matched.forEach(p => {
        const card = document.createElement("div");
        card.className = "search-result-product";
        card.innerHTML = `<img src="${p.image}" alt="${p.name}"><div><h4>${p.name}</h4><div class="price">${p.price}</div></div>`;
        card.addEventListener("click", () => openProductModal(p));
        results.appendChild(card);
    });
}

document.getElementById("searchBtn").addEventListener("click", () => searchProducts(document.getElementById("searchInput").value));
document.getElementById("searchInput").addEventListener("keypress", e => { if (e.key === "Enter") searchProducts(e.target.value); });


    // Tutup modal
    document.querySelector(".close-modal").addEventListener("click", closeProductModal);
    document.getElementById("productModal").addEventListener("click", e => {
        if (e.target.id === "productModal") closeProductModal();
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeProductModal(); });
