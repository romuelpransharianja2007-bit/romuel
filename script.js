document.addEventListener("DOMContentLoaded", function () {
  // Greeting Nama Dinamis
  const welcome = document.getElementById("welcome");
  let nama = prompt("Masukkan Nama Anda:");
  if (nama && welcome) {
    welcome.textContent = "Hai " + nama + ", Selamat Datang di Website Kami";
  }

  // Validasi Form
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let phone = document.getElementById("phone").value.trim();
      let message = document.getElementById("message").value.trim();

      // Validasi kosong
      if (name === "" || email === "" || phone === "" || message === "") {
        alert("Harap isi semua field!");
        return;
      }

      // Validasi Email (sederhana tapi aman)
      let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
      if (!emailPattern.test(email)) {
        alert("Email tidak valid!");
        return;
      }

      // Validasi Nomor Telepon (hanya angka, 8-15 digit)
      let phonePattern = /^[0-9]{8,15}$/;
      if (!phonePattern.test(phone)) {
        alert("Nomor telepon tidak valid! (hanya angka, 8-15 digit)");
        return;
      }

      // Jika lolos semua
      alert(
        "Pesan terkirim!\n\n" +
        "Nama: " + name + "\n" +
        "Email: " + email + "\n" +
        "Telepon: " + phone + "\n" +
        "Pesan: " + message
      );

      form.reset();
    });
  }
});