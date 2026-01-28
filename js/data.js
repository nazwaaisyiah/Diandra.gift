// Data Rekomendasi berdasarkan momen
const rekomendasiMomen = {
    'wisuda': {
        title: 'Wisuda',
        icon: '🎓',
        description: 'Rayakan kelulusan dengan hadiah yang berkesan',
        products: [1, 3, 9, 4] // ID produk yang direkomendasikan
    },
    'ulang tahun': {
        title: 'Ulang Tahun',
        icon: '🎂',
        description: 'Buat hari spesial mereka lebih berwarna',
        products: [1, 5, 7, 13]
    },
    'anniversary': {
        title: 'Anniversary',
        icon: '💝',
        description: 'Ungkapkan cinta yang semakin dalam',
        products: [1, 11, 14, 16]
    },
    'valentine': {
        title: 'Valentine',
        icon: '❤️',
        description: 'Ekspresikan cinta dengan cara yang romantis',
        products: [1, 10, 16, 17]
    },
    'pernikahan': {
        title: 'Pernikahan',
        icon: '💍',
        description: 'Hadiah sempurna untuk pasangan baru',
        products: [3, 5, 8, 15]
    },
    'kelahiran': {
        title: 'Kelahiran',
        icon: '👶',
        description: 'Sambut bayi baru dengan penuh sukacita',
        products: [2, 12, 20, 19]
    }
};

// helper format kategori
function formatCategory(category) {
    const map = { "buket-bunga": "Buket Bunga", "bunga-meja": "Bunga Meja", "bunga-papan": "Bunga Papan", "bunga-tangkai": "Bunga Tangkai", "buket-uang": "Buket Uang", "buket-snack": "Buket Snack", others: "Lainnya" };
    return map[category] || category;
}

// fungsi modal global
function openProductModal(product) {
    const modal = document.getElementById("productModal");
    document.getElementById("modalImage").src = product.image;
    document.getElementById("modalTitle").textContent = product.name;
    document.getElementById("modalCategory").textContent = formatCategory(product.category);
    document.getElementById("modalDescription").textContent = product.description;
    document.getElementById("modalPrice").textContent = product.price;
    

    // WhatsApp order link
    document.querySelector(".order-btn").href = `https://wa.me/62895395835861?text=${encodeURIComponent(`Halo, saya ingin memesan ${product.name}`)}`;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeProductModal() {
    const modal = document.getElementById("productModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

function renderProducts(data) {
    if (window.displayProducts) {
        window.displayProducts(data);
        return;
    }
    
    // Fallback if displayProducts (from katalog.js) is not available
    const container = document.querySelector(".products-container");
    if (!container) return;

    container.innerHTML = "";

    data.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-image"><img src="${product.image}" alt="${product.name}"></div>
            <div class="product-info">
                <span class="product-category">${formatCategory(product.category)}</span>
                <h3>${product.name}</h3>
                <div class="product-price">${product.price}</div>
            </div>
        `;
        card.addEventListener("click", () => openProductModal(product));
        container.appendChild(card);
    });
}



// URL Google Apps Script
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx9Ba6hKchUOdxlySkva_atm3CyYo2jwJaBFj40CTac_9ejN2VulX2QGcSbWiAZVo4/exec"; 

function convertGoogleDriveLink(url) {
    try {
        if (!url) return url;
        if (url.includes("drive.google.com")) {
            let id = "";
            // Pattern 1: /file/d/ID/
            const match1 = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
            if (match1) {
                id = match1[1];
            } else {
                // Pattern 2: id=ID
                const match2 = url.match(/id=([a-zA-Z0-9_-]+)/);
                if (match2) {
                    id = match2[1];
                }
            }
            
            if (id) {
                // Menggunakan format thumbnail yang lebih stabil untuk gambar publik/share link
                return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
            }
        }
    } catch (e) {
        console.error("Error converting Drive link:", e);
    }
    return url;
}

function loadProductsFromSpreadsheet() {
    fetch(SCRIPT_URL)
        .then(res => res.json())
        .then(data => {
            console.log("✅ Data dari Spreadsheet:", data);
            products = data.map(p => ({
                ...p,
                image: convertGoogleDriveLink(p.image)
            }));
            renderProducts(products); 
        })
        .catch(err => {
            console.error("❌ Gagal ambil data:", err);
            alert("Gagal mengambil data dari Spreadsheet");
        });
}

document.addEventListener("DOMContentLoaded", function () {
    loadProductsFromSpreadsheet();
});