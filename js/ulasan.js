document.addEventListener("DOMContentLoaded", () => {
  const reviewList = document.getElementById("reviewList");
  if (!reviewList) return;

  const API_URL = "https://script.google.com/macros/s/AKfycbwYXCzA7e3aN9C8GU5JjuCfgHPx78JXBA8q-i3pyqPdD5RpI9R7q4vvS9EmHU4SRFoS/exec";

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
});
