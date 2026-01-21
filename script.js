// Data Produk
const products = [
    {
        id: 1,
        name: "Buket Bunga Mawar",
        category: "buket-bunga",
        price: "Rp 250.000",
        image: "Assets/mawarmerah.jpg",
        description: "Buket elegan berisi mawar segar yang sejak zaman Romawi menjadi simbol cinta abadi dan kasih sayang tulus."
    },
    {
        id: 2,
        name: "Rangkaian Bunga Meja Anggrek",
        category: "bunga-meja",
        price: "Rp 250.000",
        image: "Assets/mejaanggrek.jpg",
        description: "Rangkaian anggrek eksotis yang sejak dahulu dikenal di Asia Tenggara sebagai lambang keanggunan dan kemewahan alami."
    },
    {
        id: 3,
        name: "Ucapan Papan Bunga Bahagia",
        category: "bunga-papan",
        price: "Rp 1.500.000",
        image: "Assets/papanselamat.jpg",
        description: "Papan bunga penuh warna khas tradisi Indonesia untuk menyampaikan ucapan selamat pada momen bahagia."
    },
    {
        id: 4,
        name: "Buket Uang Ukuran L",
        category: "buket-uang",
        price: "Rp 200.000",
        image: "Assets/bucketuang.jpg",
        description: "Buket uang bernilai tinggi yang populer sejak 2010-an sebagai hadiah modern dan berkesan mewah."
    },
    {
        id: 5,
        name: "Rangkaian Bunga Meja Mawar",
        category: "bunga-meja",
        price: "Rp 180.000",
        image: "Assets/mejamawar.jpg",
        description: "Kombinasi mawar segar dalam vas elegan yang sejak lama digunakan di Eropa sebagai simbol cinta dan keindahan."
    },
    {
        id: 6,
        name: "Ucapan Papan Bunga Duka",
        category: "bunga-papan",
        price: "Rp 1.200.000",
        image: "Assets/duka.jpg",
        description: "Papan bunga bernuansa lembut sebagai bentuk penghormatan terakhir, mengikuti tradisi belasungkawa yang telah ada berabad-abad."
    },
    {
        id: 7,
        name: "Buket Snack Ukuran M",
        category: "buket-snack",
        price: "Rp 100.000",
        image: "Assets/snack.jpg",
        description: "Buket unik berisi aneka snack kekinian yang populer di media sosial karena tampilannya yang lucu dan praktis."
    },
    {
        id: 8,
        name: "Rangkaian Bunga Meja Melati",
        category: "bunga-meja",
        price: "Rp 220.000",
        image: "Assets/mejamelati.jpg",
        description: "Rangkaian melati harum yang sejak lama menjadi bunga nasional Indonesia, simbol kesucian dan ketulusan."
    },
    {
        id: 9,
        name: "Papan Bunga Wisuda",
        category: "bunga-papan",
        price: "Rp 500.000",
        image: "Assets/wisuda.jpg",
        description: "Papan bunga ceria untuk ucapan selamat kelulusan yang berasal dari tradisi ucapan akademik khas Indonesia."
    },
    {
        id: 10,
        name: "Bunga Mawar Tangkai",
        category: "bunga-tangkai",
        price: "Rp 50.000",
        image: "Assets/tangkaimawar.jpg",
        description: "Satu tangkai mawar segar yang sejak dulu digunakan sebagai simbol cinta murni dan penghargaan."
    },
    {
        id: 11,
        name: "Buket Bunga Ungu",
        category: "buket-bunga",
        price: "Rp 250.000",
        image: "Assets/buketbungaungu.jpg",
        description: "Buket bernuansa ungu yang melambangkan kemewahan dan spiritualitas, warna kebangsawanan sejak zaman kuno."
    },
    {
        id: 12,
        name: "Buket Uang Ukuran M",
        category: "buket-uang",
        price: "Rp 200.000",
        image: "Assets/buketuang50.jpg",
        description: "Buket uang menawan ukuran sedang yang muncul dari tren menggabungkan estetika bunga dengan hadiah tunai praktis."
    },
    {
        id: 13,
        name: "Buket Bunga Mini",
        category: "buket-bunga",
        price: "Rp 150.000",
        image: "Assets/buketbunga1.jpg",
        description: "Buket kecil nan manis yang terinspirasi dari budaya Jepang sebagai simbol kesederhanaan dan keindahan alami."
    },
    {
        id: 14,
        name: "Buket Bunga Gold",
        category: "buket-bunga",
        price: "Rp 250.000",
        image: "Assets/buketbunga2.jpg",
        description: "Buket bernuansa emas yang memberi kesan glamor dan melambangkan kemakmuran dalam budaya Timur."
    },
    {
        id: 15,
        name: "Buket Uang Ukuran S",
        category: "buket-uang",
        price: "Rp 200.000",
        image: "Assets/buketuangS.jpg",
        description: "Buket uang kecil elegan yang diciptakan untuk hadiah personal bernilai simbolis namun tetap indah."
    },
    {
        id: 16,
        name: "Buket Bunga Nuansa Biru",
        category: "buket-bunga",
        price: "Rp 250.000",
        image: "Assets/buketbunga3.jpg",
        description: "Buket uang bertema biru yang mencerminkan ketenangan dan menjadi tren modern di kalangan muda."
    },
    {
        id: 17,
        name: "Buket Bunga Blossom",
        category: "buket-bunga",
        price: "Rp 250.000",
        image: "Assets/buketbunga4.jpg",
        description: "Buket bunga pastel terinspirasi bunga sakura Jepang yang melambangkan harapan dan awal baru."
    },
    {
        id: 18,
        name: "Buket Snack Ukuran L",
        category: "buket-snack",
        price: "Rp 100.000",
        image: "Assets/buketsnack1.jpg",
        description: "Buket besar berisi berbagai camilan favorit yang lahir dari tren hadiah estetik dan penuh kejutan."
    },
    {
        id: 19,
        name: "Buket Ballon",
        category: "others",
        price: "Rp 100.000",
        image: "Assets/buketbalon.jpg",
        description: "Kombinasi balon dan bunga yang populer di Korea sebagai hadiah ceria dan fotogenik untuk perayaan spesial."
    },
    {
        id: 20,
        name: "Hand Bouquet",
        category: "others",
        price: "Rp 100.000",
        image: "Assets/handbuket.jpg",
        description: "Buket bunga genggam klasik yang berasal dari tradisi pernikahan Eropa, simbol kebahagiaan dan kesetiaan."
    },
    {
        id: 21,
        name: "Vas Bunga",
        category: "others",
        price: "Rp 100.000",
        image: "Assets/vas.jpg",
        description: "Vas elegan untuk mempercantik ruangan, digunakan sejak zaman Mesir kuno sebagai simbol keindahan dan status."
    },
];

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


// Tampilkan produk di katalog
function displayProducts(filteredProducts = products) {
    productsGrid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${formatCategory(product.category)}</span>
                <h3>${product.name}</h3>
                <div class="product-price">${product.price}</div>
            </div>
        `;
        
        productCard.addEventListener('click', () => openProductModal(product));
        productsGrid.appendChild(productCard);
    });
}

// Format kategori untuk tampilan
function formatCategory(category) {
    const categoryMap = {
        'buket-bunga': 'Buket Bunga',
        'bunga-meja': 'Bunga Meja',
        'bunga-papan': 'Bunga Papan',
        'bunga-tangkai': 'Bunga Tangkai',
        'buket-uang': 'Buket Uang',
        'buket-snack': 'Buket Snack',
        'others': 'Lainnya'
    };
    return categoryMap[category] || category;
}

// Buka modal detail produk
function openProductModal(product) {
    if (typeof product === 'string') {
        try {
            product = JSON.parse(product);
        } catch (e) {
            console.error('Error parsing product data:', e);
            return;
        }
    }
    
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalTitle.textContent = product.name;
    modalCategory.textContent = formatCategory(product.category);
    modalDescription.textContent = product.description;
    modalPrice.textContent = product.price;
    
    // Update link WhatsApp dengan nama produk
    const orderBtn = document.querySelector('.order-btn');
    const message = `Halo, saya ingin memesan ${product.name} dari Flower the Harmony.`;
    orderBtn.href = `https://wa.me/6287848520130?text=${encodeURIComponent(message)}`;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Helper function untuk membuka modal dari hasil pencarian
function openProductModalFromSearch(productString) {
    openProductModal(productString);
}

// Tutup modal
function closeProductModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Filter produk berdasarkan kategori
function filterProducts(category) {
    // Hapus class active dari semua button kategori
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    
    // Tambah class active ke button yang diklik
    event.target.classList.add('active');
    
    if (category === 'all') {
        displayProducts();
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Toggle menu mobile
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
}

// Handle form kontak
function handleContactForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Validasi form
    if (!name || !email || !subject || !message) {
        alert('Harap lengkapi semua field sebelum mengirim pesan.');
        return;
    }
    
    // Simulasi pengiriman pesan
    alert(`Terima kasih ${name}! Pesan Anda telah berhasil dikirim. Kami akan membalas melalui email ${email} secepatnya.`);
    
    // Reset form
    contactForm.reset();
}

// Fungsi pencarian berdasarkan kata kunci
function searchProducts(keyword) {
    if (!keyword.trim()) {
        searchResults.innerHTML = '<div class="no-results"><p>Masukkan kata kunci untuk mencari produk.</p></div>';
        return;
    }
    
    // Normalisasi keyword
    const normalizedKeyword = keyword.toLowerCase().trim();
    
    // Cari momen yang sesuai
    const matchedMoments = Object.keys(rekomendasiMomen).filter(momentKey => 
        momentKey.toLowerCase().includes(normalizedKeyword) || 
        rekomendasiMomen[momentKey].title.toLowerCase().includes(normalizedKeyword)
    );
    
    // Jika tidak ada momen yang cocok, cari di nama produk
    if (matchedMoments.length === 0) {
        const matchedProducts = products.filter(product => 
            product.name.toLowerCase().includes(normalizedKeyword) ||
            product.description.toLowerCase().includes(normalizedKeyword) ||
            formatCategory(product.category).toLowerCase().includes(normalizedKeyword)
        );
        
        if (matchedProducts.length > 0) {
            displaySearchResultsFromProducts(matchedProducts, keyword);
        } else {
            displayNoResults(keyword);
        }
    } else {
        displaySearchResults(matchedMoments, keyword);
    }
}

// Tampilkan hasil pencarian dari momen
function displaySearchResults(matchedMoments, keyword) {
    searchResults.innerHTML = '';
    
    matchedMoments.forEach(momentKey => {
        const momenData = rekomendasiMomen[momentKey];
        createSearchResultCard(momenData, momentKey);
    });
}

// Tampilkan hasil pencarian dari produk
function displaySearchResultsFromProducts(matchedProducts, keyword) {
    searchResults.innerHTML = '';
    
    const card = document.createElement('div');
    card.className = 'search-result-card';
    
    let productsHTML = '';
    matchedProducts.forEach(product => {
        productsHTML += `
            <div class="search-result-product" onclick="openProductModalFromSearch('${JSON.stringify(product).replace(/'/g, "\\'")}')">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="search-result-product-info">
                    <h4>${product.name}</h4>
                    <div class="price">${product.price}</div>
                </div>
            </div>
        `;
    });
    
    card.innerHTML = `
        <div class="search-result-header">
            <div class="moment-icon">🔍</div>
            <h3>Hasil Pencarian: "${keyword}"</h3>
            <p>Ditemukan ${matchedProducts.length} produk yang sesuai</p>
        </div>
        <div class="search-result-body">
            <div class="search-result-products">
                ${productsHTML}
            </div>
        </div>
    `;
    
    searchResults.appendChild(card);
}

// Tampilkan pesan tidak ada hasil
function displayNoResults(keyword) {
    searchResults.innerHTML = `
        <div class="no-results">
            <h3>Tidak ada hasil untuk "${keyword}"</h3>
            <p>Coba gunakan kata kunci yang berbeda seperti:</p>
            <p>
                <span class="suggestion-tag" data-keyword="wisuda">wisuda</span>, 
                <span class="suggestion-tag" data-keyword="ulang tahun">ulang tahun</span>, 
                <span class="suggestion-tag" data-keyword="pernikahan">pernikahan</span>, 
                <span class="suggestion-tag" data-keyword="valentine">valentine</span>
            </p>
        </div>
    `;
    
    // Tambahkan event listener untuk suggestion tags baru
    document.querySelectorAll('.suggestion-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const keyword = tag.getAttribute('data-keyword');
            searchInput.value = keyword;
            searchProducts(keyword);
        });
    });
}

// Buat kartu hasil pencarian
function createSearchResultCard(momenData, momentKey) {
    const card = document.createElement('div');
    card.className = 'search-result-card';
    
    let productsHTML = '';
    momenData.products.forEach(productId => {
        const product = products.find(p => p.id === productId);
        if (product) {
            productsHTML += `
                <div class="search-result-product" onclick="openProductModalFromSearch('${JSON.stringify(product).replace(/'/g, "\\'")}')">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="search-result-product-info">
                        <h4>${product.name}</h4>
                        <div class="price">${product.price}</div>
                    </div>
                </div>
            `;
        }
    });
    
    card.innerHTML = `
        <div class="search-result-header">
            <div class="moment-icon">${momenData.icon}</div>
            <h3>${momenData.title}</h3>
            <p>${momenData.description}</p>
        </div>
        <div class="search-result-body">
            <div class="search-result-products">
                ${productsHTML}
            </div>
        </div>
    `;
    
    searchResults.appendChild(card);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Tampilkan semua produk saat halaman dimuat
    displayProducts();

    loadReviews();
 
    // Event listener untuk filter kategori produk
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterProducts(button.dataset.category);
        });
    });
    
    // Event listener untuk tutup modal
    closeModal.addEventListener('click', closeProductModal);
    
    // Tutup modal ketika klik di luar konten modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProductModal();
        }
    });
    
    // Tutup modal dengan tombol Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProductModal();
        }
    });
    
    // Event listener untuk menu mobile
   function on(el, event, handler) {
    if (el) el.addEventListener(event, handler);
}

document.addEventListener('DOMContentLoaded', () => {

    // === DOM SEARCH ===
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    function doSearch() {
        if (!searchInput) return;
        searchProducts(searchInput.value.trim());
    }

    // === EVENT SEARCH (FIX ERROR NULL) ===
    on(searchBtn, 'click', doSearch);
    on(searchInput, 'keypress', e => {
        if (e.key === 'Enter') doSearch();
    });

});

    // Event listener untuk Enter di input pencarian
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const keyword = searchInput.value.trim();
            searchProducts(keyword);
        }
    });
    
    // Event listener untuk suggestion tags
    suggestionTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const keyword = tag.getAttribute('data-keyword');
            searchInput.value = keyword;
            searchProducts(keyword);
        });
    });
    
    // Smooth scroll untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Tambahkan event listener untuk tombol "Lihat Lokasi di Maps"
    const mapBtn = document.querySelector('.map-btn');
    if (mapBtn) {
        mapBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://maps.app.goo.gl/FxPdjfov4QuwGKYh9?g_st=aw', '_blank'); 
        });
    }
    
    // Animasi scroll untuk elemen saat masuk viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Amati elemen yang perlu animasi
    document.querySelectorAll('.product-card, .search-result-card, .about-content, .contact-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});

// Fungsi untuk menangani resize window
window.addEventListener('resize', () => {
    // Tutup menu mobile jika lebar layar lebih besar dari 768px
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
    }
});
const API_URL = "https://script.google.com/macros/s/AKfycbwYXCzA7e3aN9C8GU5JjuCfgHPx78JXBA8q-i3pyqPdD5RpI9R7q4vvS9EmHU4SRFoS/exec";

const reviewForm = document.getElementById("reviewForm");

reviewForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    nama: document.getElementById("reviewName").value,
    rating: document.getElementById("reviewRating").value,
    komentar: document.getElementById("reviewMessage").value
  };

  fetch(API_URL, {
    method: "POST",
    mode: "no-cors",   // 🔑 INI KUNCINYA
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  // ANGAP SUKSES
  alert("Terima kasih atas ulasan Anda 💐");
  reviewForm.reset();
  loadReviews();
});
function loadReviews() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const reviewList = document.getElementById("reviewList");
      reviewList.innerHTML = "";

      if (data.length === 0) {
        reviewList.innerHTML = "<p>Belum ada ulasan.</p>";
        return;
      }

      data.reverse().forEach(item => {
        reviewList.innerHTML += `
          <div class="review-card">
            <h4>${item.nama}</h4>
            <div class="rating">${"⭐".repeat(item.rating)}</div>
            <p>${item.komentar}</p>
          </div>
        `;
      });
    })
    .catch(() => {
      document.getElementById("reviewList").innerHTML =
        "<p>Gagal memuat ulasan.</p>";
    });
}
