document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("searchInput");
    const btn = document.getElementById("searchBtn");
    const results = document.querySelector(".search-results");

    function searchProducts(keyword) {

        if (!products || products.length === 0) {
            results.innerHTML = "<p>⏳ Produk masih dimuat...</p>";
            return;
        }

        if (!keyword.trim()) {
            results.innerHTML = "<p>Masukkan kata kunci pencarian</p>";
            return;
        }

        const found = products.filter(p =>
            p.name.toLowerCase().includes(keyword.toLowerCase()) ||
            p.description.toLowerCase().includes(keyword.toLowerCase()) ||
            p.category.toLowerCase().includes(keyword.toLowerCase())
        );

        if (found.length === 0) {
            results.innerHTML = `<p>Tidak ada hasil untuk "<b>${keyword}</b>"</p>`;
            return;
        }

        results.innerHTML = "";
        found.forEach(p => {
            const card = document.createElement("div");
            card.className = "search-result-product";
            card.innerHTML = `
                <img src="${p.image}" alt="${p.name}">
                <div>
                    <h4>${p.name}</h4>
                    <div class="price">${p.price}</div>
                </div>
            `;
            card.onclick = () => openProductModal(p);
            results.appendChild(card);
        });
    }

    btn.addEventListener("click", () => searchProducts(input.value));
    input.addEventListener("keydown", e => e.key === "Enter" && searchProducts(input.value));

});
