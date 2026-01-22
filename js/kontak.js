// DOM Elements untuk kontak
const contactForm = document.getElementById('contactForm');

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

// Inisialisasi kontak
function initKontak() {
    // Event listener untuk form kontak
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Event listener untuk tombol "Lihat Lokasi di Maps"
    const mapBtn = document.querySelector('.map-btn');
    if (mapBtn) {
        mapBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://maps.app.goo.gl/FxPdjfov4QuwGKYh9?g_st=aw', '_blank'); 
        });
    }
}