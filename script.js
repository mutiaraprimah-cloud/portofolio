const form = document.getElementById("formKontak");
const hasil = document.getElementById("hasil");
const dataTerkirim = document.getElementById("dataTerkirim");

// FITUR DARK MODE
const tombolDark = document.getElementById("darkMode");

tombolDark.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    tombolDark.textContent = "☀️ Mode";
  } else {
    tombolDark.textContent = "🌙 Mode";
  }
});

// VALIDASI FORM KONTAK
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  // Memeriksa kolom kosong
  if (nama === "" || email === "" || pesan === "") {
    hasil.textContent = "Semua kolom wajib diisi!";
    hasil.style.color = "red";
    dataTerkirim.replaceChildren();
    return;
  }

  // Memeriksa format email
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!polaEmail.test(email)) {
    hasil.textContent = "Format email tidak valid!";
    hasil.style.color = "red";
    dataTerkirim.replaceChildren();
    return;
  }

  // Menampilkan pesan berhasil
  hasil.textContent = "Pesan berhasil dikirim!";
  hasil.style.color = "green";

  // Menampilkan data yang dimasukkan
  dataTerkirim.replaceChildren();

  const judul = document.createElement("h3");
  judul.textContent = "Data yang Kamu Kirim";
  dataTerkirim.appendChild(judul);

  const data = [
    ["Nama", nama],
    ["Email", email],
    ["Pesan", pesan],
  ];

  data.forEach(function (item) {
    const paragraf = document.createElement("p");
    const label = document.createElement("strong");

    label.textContent = item[0] + ": ";
    paragraf.appendChild(label);
    paragraf.appendChild(document.createTextNode(item[1]));

    dataTerkirim.appendChild(paragraf);
  });

  form.reset();
});
