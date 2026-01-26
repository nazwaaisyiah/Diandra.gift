function initKontak() {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); //  stop reload

    fetch("https://script.google.com/macros/s/AKfycbxa4Y0Ap-a3H1r7rFc7fU0ymDj3mmj7cjUBKy9-KNRcGyvXjWNhYFq5VC9gH2dE8D_l/exec", {
      method: "POST",
      body: new FormData(form)
    })
    .then(res => res.text())
    .then(() => {
      alert("Terima kasih 😊\nPesan Anda berhasil dikirim!");
      form.reset(); // 
    })
    .catch(() => {
      alert("Gagal mengirim pesan ❌");
    });
  });
}