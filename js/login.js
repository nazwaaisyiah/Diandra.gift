const API_URL = "https://script.google.com/macros/s/AKfycbw00QGf2SbhxgbWXkHJHOOn-eQJzLZyBf2IYzB00SKUpW_T6f91ueDHIPTRsZyAVBTe/exec";

function login(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

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
      localStorage.setItem("admin", "true");
      window.location.href = "../admin.html";
    } else {
      msg.innerText = data.message;
    }
  })
  .catch(() => {
    msg.innerText = "Server error";
  });
}
