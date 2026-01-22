// katalog.js
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".products-grid");
    const categoryBtns = document.querySelectorAll(".category-btn");

    function displayProducts(list = products) {
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
    }

    displayProducts();

    categoryBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const cat = btn.dataset.category;
            displayProducts(cat === "all" ? products : products.filter(p => p.category === cat));
        });
    });

    // Tutup modal
    document.querySelector(".close-modal").addEventListener("click", closeProductModal);
    document.getElementById("productModal").addEventListener("click", e => {
        if (e.target.id === "productModal") closeProductModal();
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeProductModal(); });
});
