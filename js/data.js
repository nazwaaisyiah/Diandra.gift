// Data Produk
const products = [
    {
        id: 1,
        name: "Buket Bunga Mawar",
        category: "buket-bunga",
        price: "Rp 250.000",
        image: "../Assets/mawarmerah.jpg",
        description: "Buket elegan berisi mawar segar yang sejak zaman Romawi menjadi simbol cinta abadi dan kasih sayang tulus."
    },
    {
        id: 2,
        name: "Rangkaian Bunga Meja Anggrek",
        category: "bunga-meja",
        price: "Rp 250.000",
        image: "../Assets/mejaanggrek.jpg",
        description: "Rangkaian anggrek eksotis yang sejak dahulu dikenal di Asia Tenggara sebagai lambang keanggunan dan kemewahan alami."
    },
    {
        id: 3,
        name: "Ucapan Papan Bunga Bahagia",
        category: "bunga-papan",
        price: "Rp 1.500.000",
        image: "../Assets/papanselamat.jpg",
        description: "Papan bunga penuh warna khas tradisi Indonesia untuk menyampaikan ucapan selamat pada momen bahagia."
    },
    {
        id: 4,
        name: "Buket Uang Ukuran L",
        category: "buket-uang",
        price: "Rp 200.000",
        image: "../Assets/bucketuang.jpg",
        description: "Buket uang bernilai tinggi yang populer sejak 2010-an sebagai hadiah modern dan berkesan mewah."
    },
    {
        id: 5,
        name: "Rangkaian Bunga Meja Mawar",
        category: "bunga-meja",
        price: "Rp 180.000",
        image: "../Assets/mejamawar.jpg",
        description: "Kombinasi mawar segar dalam vas elegan yang sejak lama digunakan di Eropa sebagai simbol cinta dan keindahan."
    },
    {
        id: 6,
        name: "Ucapan Papan Bunga Duka",
        category: "bunga-papan",
        price: "Rp 1.200.000",
        image: "../Assets/duka.jpg",
        description: "Papan bunga bernuansa lembut sebagai bentuk penghormatan terakhir, mengikuti tradisi belasungkawa yang telah ada berabad-abad."
    },
    {
        id: 7,
        name: "Buket Snack Ukuran M",
        category: "buket-snack",
        price: "Rp 100.000",
        image: "../Assets/snack.jpg",
        description: "Buket unik berisi aneka snack kekinian yang populer di media sosial karena tampilannya yang lucu dan praktis."
    },
    {
        id: 8,
        name: "Rangkaian Bunga Meja Melati",
        category: "bunga-meja",
        price: "Rp 220.000",
        image: "../Assets/mejamelati.jpg",
        description: "Rangkaian melati harum yang sejak lama menjadi bunga nasional Indonesia, simbol kesucian dan ketulusan."
    },
    {
        id: 9,
        name: "Papan Bunga Wisuda",
        category: "bunga-papan",
        price: "Rp 500.000",
        image: "../Assets/wisuda.jpg",
        description: "Papan bunga ceria untuk ucapan selamat kelulusan yang berasal dari tradisi ucapan akademik khas Indonesia."
    },
    {
        id: 10,
        name: "Bunga Mawar Tangkai",
        category: "bunga-tangkai",
        price: "Rp 50.000",
        image: "../Assets/tangkaimawar.jpg",
        description: "Satu tangkai mawar segar yang sejak dulu digunakan sebagai simbol cinta murni dan penghargaan."
    },
    {
        id: 11,
        name: "Buket Bunga Ungu",
        category: "buket-bunga",
        price: "Rp 250.000",
        image: "../Assets/buketbungaungu.jpg",
        description: "Buket bernuansa ungu yang melambangkan kemewahan dan spiritualitas, warna kebangsawanan sejak zaman kuno."
    },
    {
        id: 12,
        name: "Buket Uang Ukuran M",
        category: "buket-uang",
        price: "Rp 200.000",
        image: "../Assets/buketuang50.jpg",
        description: "Buket uang menawan ukuran sedang yang muncul dari tren menggabungkan estetika bunga dengan hadiah tunai praktis."
    },
    {
        id: 13,
        name: "Buket Bunga Mini",
        category: "buket-bunga",
        price: "Rp 150.000",
        image: "../Assets/buketbunga1.jpg",
        description: "Buket kecil nan manis yang terinspirasi dari budaya Jepang sebagai simbol kesederhanaan dan keindahan alami."
    },
    {
        id: 14,
        name: "Buket Bunga Gold",
        category: "buket-bunga",
        price: "Rp 250.000",
        image: "../Assets/buketbunga2.jpg",
        description: "Buket bernuansa emas yang memberi kesan glamor dan melambangkan kemakmuran dalam budaya Timur."
    },
    {
        id: 15,
        name: "Buket Uang Ukuran S",
        category: "buket-uang",
        price: "Rp 200.000",
        image: "../Assets/buketuangS.jpg",
        description: "Buket uang kecil elegan yang diciptakan untuk hadiah personal bernilai simbolis namun tetap indah."
    },
    {
        id: 16,
        name: "Buket Bunga Nuansa Biru",
        category: "buket-bunga",
        price: "Rp 250.000",
        image: "../Assets/buketbunga3.jpg",
        description: "Buket uang bertema biru yang mencerminkan ketenangan dan menjadi tren modern di kalangan muda."
    },
    {
        id: 17,
        name: "Buket Bunga Blossom",
        category: "buket-bunga",
        price: "Rp 250.000",
        image: "../Assets/buketbunga4.jpg",
        description: "Buket bunga pastel terinspirasi bunga sakura Jepang yang melambangkan harapan dan awal baru."
    },
    {
        id: 18,
        name: "Buket Snack Ukuran L",
        category: "buket-snack",
        price: "Rp 100.000",
        image: "../Assets/buketsnack1.jpg",
        description: "Buket besar berisi berbagai camilan favorit yang lahir dari tren hadiah estetik dan penuh kejutan."
    },
    {
        id: 19,
        name: "Buket Ballon",
        category: "others",
        price: "Rp 100.000",
        image: "../Assets/buketbalon.jpg",
        description: "Kombinasi balon dan bunga yang populer di Korea sebagai hadiah ceria dan fotogenik untuk perayaan spesial."
    },
    {
        id: 20,
        name: "Hand Bouquet",
        category: "others",
        price: "Rp 100.000",
        image: "../Assets/handbuket.jpg",
        description: "Buket bunga genggam klasik yang berasal dari tradisi pernikahan Eropa, simbol kebahagiaan dan kesetiaan."
    },
    {
        id: 21,
        name: "Vas Bunga",
        category: "others",
        price: "Rp 100.000",
        image: "../Assets/vas.jpg",
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
    document.querySelector(".order-btn").href = `https://wa.me/6287848520130?text=${encodeURIComponent(`Halo, saya ingin memesan ${product.name}`)}`;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeProductModal() {
    const modal = document.getElementById("productModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}
