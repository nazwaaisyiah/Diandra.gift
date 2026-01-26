/* ==== katalog button ==== */
document.addEventListener("DOMContentLoaded", function () {
  const btnCatalog = document.getElementById("btnCatalog");

  if (btnCatalog) {
    btnCatalog.addEventListener("click", function () {
      window.location.href = "../katalog.html";
    });
  }
});

/* == pop up bunga == */
function kirimBunga(bunga) {
  const overlay = document.getElementById("bungaOverlay");
  if (overlay) overlay.style.display = "none";

  localStorage.setItem("bungaDone", "yes");

  fetch("https://script.google.com/macros/s/AKfycbwF_90zStKL4p6IdNL16XkLo5WIA5RZ1QQkFDRNWIikfesYrp2TI181q6NruJXL0QAm/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "bunga=" + encodeURIComponent(bunga)
  });
}


/* == popup biar muncul sekali == */
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("bungaOverlay");
  if (!overlay) return;

  if (localStorage.getItem("bungaDone")) {
    overlay.style.display = "none";
  } else {
    overlay.style.display = "flex";
  }
});

/* == buat reset manual == */
function resetBunga() {
  localStorage.removeItem("bungaDone");
  location.reload();
}