document.addEventListener("DOMContentLoaded", () => {
  const reviewList = document.getElementById("reviewList");
  const reviewForm = document.getElementById("reviewForm");

  const API_URL = "https://script.google.com/macros/s/AKfycbwnaqABaHNYmiKdPCXU_PUaRG2-92JMON3jUuOXfTj8RcKyjcscykrE8_bpCOyfMLCo/exec";

  // LOAD ULASAN
  function loadReviews() {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        reviewList.innerHTML = "";
        data.reverse().forEach(r => {
          reviewList.innerHTML += `
            <div class="review-card">
              <h4>${r.nama}</h4>
              <div>${"⭐".repeat(Number(r.rating))}</div>
              <p>${r.komentar}</p>
            </div>
          `;
        });
      })
      .catch(() => {
        reviewList.innerHTML = "<p>Ulasan gagal dimuat</p>";
      });
  }

  loadReviews();

  // KIRIM ULASAN
  reviewForm.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nama", reviewName.value);
    formData.append("rating", reviewRating.value);
    formData.append("komentar", reviewMessage.value);

    fetch(API_URL, {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(() => {
      reviewForm.reset();
      loadReviews();
      alert("Ulasan berhasil dikirim ❤️");
    })
    .catch(() => {
      alert("Gagal mengirim ulasan 😢");
    });
  });
});
