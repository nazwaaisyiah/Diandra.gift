// katalog.js
// Fungsi displayProducts dibuat global agar bisa dipanggil dari data.js
window.displayProducts = function(list = products) {
    const grid = document.querySelector(".products-grid");
    if (!grid) return;
    
    grid.innerHTML = "";
    list.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-image"><img src="${p.image}" alt="${p.name}"></div>
            <div class="product-info"><span class="product-category">${formatCategory(p.category)}</span><h3>${p.name}</h3><div class="product-price">${p.price}</div></div>
        `;
        card.addEventListener("click", () => openProductModal(p));
        grid.appendChild(card);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    const categoryBtns = document.querySelectorAll(".category-btn");

    window.displayProducts();

    categoryBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const cat = btn.dataset.category;
            window.displayProducts(cat === "all" ? products : products.filter(p => p.category === cat));
        });
    });

    // Tutup modal
    document.querySelector(".close-modal").addEventListener("click", closeProductModal);
    document.getElementById("productModal").addEventListener("click", e => {
        if (e.target.id === "productModal") closeProductModal();
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeProductModal(); });
});