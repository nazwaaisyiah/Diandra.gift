const API_URL = "https://script.google.com/macros/s/AKfycbw00QGf2SbhxgbWXkHJHOOn-eQJzLZyBf2IYzB00SKUpW_T6f91ueDHIPTRsZyAVBTe/exec";

function login(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  msg.innerText = "Loading...";

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      action: "login",
      username: username,
      password: password
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "success") {
      // simpan status login
      localStorage.setItem("admin", "true");

      // redirect ke admin (FIXED)
      window.location.href = "admin.html";
    } else {
      msg.innerText = data.message || "Login gagal";
    }
  })
  .catch(() => {
    msg.innerText = "Server error";
  });
}