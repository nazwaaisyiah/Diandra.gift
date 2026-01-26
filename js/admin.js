const API_URL = "https://script.google.com/macros/s/AKfycbw00QGf2SbhxgbWXkHJHOOn-eQJzLZyBf2IYzB00SKUpW_T6f91ueDHIPTRsZyAVBTe/exec";

const adminList = document.getElementById("adminList");
const msgAdd = document.getElementById("msgAdd");

function loadAdmins() {
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      action: "getAdmins"
    })
  })
  .then(r => r.json())
  .then(data => {
    adminList.innerHTML = "";
    if (data.length === 0) {
      adminList.innerHTML = "<li>Belum ada admin</li>";
    } else {
      data.forEach(a => {
        adminList.innerHTML += `<li>ID: ${a.id} | Username: ${a.username}</li>`;
      });
    }
  });
}

function addAdmin() {
  const username = document.getElementById("newUsername").value.trim();
  const password = document.getElementById("newPassword").value.trim();

  if (!username || !password) {
    msgAdd.innerText = "Isi username & password!";
    return;
  }

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      action: "addAdmin",
      username: username,
      password: password
    })
  })
  .then(r => r.json())
  .then(data => {
    msgAdd.innerText = data.message;
    loadAdmins();
  });
}

function logout() {
  localStorage.removeItem("admin");
  window.location.href = "login.html";
}

loadAdmins();
