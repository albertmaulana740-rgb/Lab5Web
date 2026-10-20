// =====================================================
// script.js — Praktikum 5: JavaScript Dasar & Manipulasi HTML
// =====================================================

// Fungsi bantu singkat untuk memilih elemen berdasarkan id
const $ = (id) => document.getElementById(id);

// -----------------------------------------------------
// LATIHAN 1 — Menampilkan output
// -----------------------------------------------------
$("pesan").textContent = "Hello World";
console.log("Hello World");

// Dari teori bagian C.8: mengubah tampilan halaman
function ubahTampilan() {
  document.body.style.backgroundColor = "lightyellow";
  $("pesan").style.color = "blue";
  $("pesan").textContent = "Tampilan berhasil diubah.";
}

// -----------------------------------------------------
// LATIHAN 2 — Alert dan prompt
// Uji: isi nama, tekan Cancel, dan biarkan kosong
// -----------------------------------------------------
function latihan2() {
  const namaPengguna = prompt("Masukkan nama Anda:", "");

  // Cancel menghasilkan null, input kosong menghasilkan ""
  if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    $("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
  } else {
    alert("Nama belum diisi.");
  }
}

// -----------------------------------------------------
// LATIHAN 3 — Function dan operasi aritmetika
// -----------------------------------------------------
function operasiDasar(a, b) {
  const hasil = [
    "Penjumlahan: " + (a + b),
    "Pengurangan: " + (a - b),
    "Perkalian: " + (a * b),
    "Pembagian: " + (b !== 0 ? a / b : "Tidak dapat dibagi nol"),
    "Modulus: " + (b !== 0 ? a % b : "Tidak dapat dibagi nol")
  ];

  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", b !== 0 ? a % b : "Tidak dapat dibagi nol");

  $("hasilOperasi").textContent = "a = " + a + ", b = " + b + "\n" + hasil.join("\n");
}

// Eksperimen Mandiri 1: dua nilai dari prompt, dikonversi ke number
function operasiDariPrompt() {
  const inputA = prompt("Masukkan bilangan pertama:");
  if (inputA === null) return;
  const inputB = prompt("Masukkan bilangan kedua:");
  if (inputB === null) return;

  const a = Number(inputA);
  const b = Number(inputB);

  if (inputA.trim() === "" || inputB.trim() === "" || Number.isNaN(a) || Number.isNaN(b)) {
    alert("Input harus berupa bilangan yang valid.");
    return;
  }
  operasiDasar(a, b);
}

// -----------------------------------------------------
// LATIHAN 4 — Seleksi kondisi if–else
// -----------------------------------------------------
function latihan4() {
  const inputNilai = prompt("Masukkan nilai (0–100):");

  // Cancel → null, jadi cek null lebih dulu sebelum memanggil trim()
  if (inputNilai === null) {
    alert("Input nilai tidak valid.");
    return;
  }

  const nilaiMahasiswa = Number(inputNilai);

  if (inputNilai.trim() === "" ||
      Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    alert("Input nilai tidak valid.");
  } else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
  } else {
    alert("Belum lulus");
  }
}

// -----------------------------------------------------
// LATIHAN 5 — Seleksi kondisi switch
// -----------------------------------------------------
function latihan5() {
  const inputPilihan = prompt("Masukkan angka 1–5:");

  switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
  }
}

// -----------------------------------------------------
// LATIHAN 6 — Form bilangan genap atau ganjil
// -----------------------------------------------------
function cekBilangan() {
  const input = $("bilangan").value;
  const angka = Number(input);
  const hasil = $("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

// -----------------------------------------------------
// LATIHAN 7 — Mengubah warna halaman
// -----------------------------------------------------
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

// -----------------------------------------------------
// LATIHAN 8 — DOM dan checkbox menu makanan
// -----------------------------------------------------
const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  $("total").textContent = total.toLocaleString("id-ID");
}

// -----------------------------------------------------
// MINI PROJECT — Kalkulator Nilai Mahasiswa
// -----------------------------------------------------

// Bagian perhitungan (tidak menyentuh tampilan)
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function tentukanStatus(nilai) {
  return nilai >= 60 ? "Lulus" : "Belum lulus";
}

// Bagian validasi: mengembalikan angka, atau null bila tidak valid
function bacaNilai(idInput) {
  const teks = $(idInput).value;
  if (teks.trim() === "") return null;
  const angka = Number(teks);
  if (Number.isNaN(angka) || angka < 0 || angka > 100) return null;
  return angka;
}

// Bagian tampilan hasil
function tampilkanHasil(tugas, uts, uas) {
  const akhir = hitungNilaiAkhir(tugas, uts, uas);
  const predikat = tentukanPredikat(akhir);
  const status = tentukanStatus(akhir);

  $("hasilNilai").innerHTML =
    "Nilai akhir: <strong>" + akhir.toFixed(2) + "</strong><br>" +
    "Predikat: <strong>" + predikat + "</strong><br>" +
    "Status: <strong class=\"" + (akhir >= 60 ? "sukses" : "gagal") + "\">" + status + "</strong>";

  console.log("Nilai akhir:", akhir.toFixed(2));
  console.log("Predikat:", predikat);
  console.log("Status:", status);
}

// Penghubung: dipanggil oleh tombol
function prosesNilai() {
  const tugas = bacaNilai("nilaiTugas");
  const uts = bacaNilai("nilaiUts");
  const uas = bacaNilai("nilaiUas");

  if (tugas === null || uts === null || uas === null) {
    $("hasilNilai").innerHTML =
      "<span class=\"gagal\">Semua nilai wajib diisi dengan angka 0–100.</span>";
    return;
  }
  tampilkanHasil(tugas, uts, uas);
}

// Contoh dari modul (hasil di Console)
console.log("--- Contoh Mini Project (Console) ---");
{
  const akhirContoh = hitungNilaiAkhir(85, 78, 88);
  console.log("Nilai akhir:", akhirContoh.toFixed(2));
  console.log("Predikat:", tentukanPredikat(akhirContoh));
  console.log("Status:", tentukanStatus(akhirContoh));
}

// -----------------------------------------------------
// EKSPERIMEN MANDIRI
// -----------------------------------------------------

// No. 2 — Tabel perkalian dengan perulangan for
function tampilTabelPerkalian(n) {
  let teks = "";
  for (let i = 1; i <= 10; i++) {
    teks += n + " x " + i + " = " + (n * i) + "\n";
  }
  $("tabelPerkalian").textContent = teks.trim();
  console.log(teks);
}

// No. 3 — function cekGenap mengembalikan true jika genap
function cekGenap(angka) {
  return angka % 2 === 0;
}

function ujiCekGenap() {
  const input = $("angkaGenap").value;
  const angka = Number(input);
  if (input.trim() === "" || !Number.isInteger(angka)) {
    $("hasilCekGenap").textContent = "Masukkan bilangan bulat yang valid.";
    return;
  }
  $("hasilCekGenap").textContent = "cekGenap(" + angka + ") = " + cekGenap(angka);
}

// No. 4 & Tugas H.7 — validasi form: nama tidak kosong, nilai 0–100
function validasiForm() {
  const nama = $("namaForm").value.trim();
  const inputNilai = $("nilaiForm").value;
  const nilai = Number(inputNilai);
  const hasil = $("hasilValidasi");

  hasil.className = "gagal";

  if (nama === "") {
    hasil.textContent = "Nama tidak boleh kosong.";
  } else if (inputNilai.trim() === "" || Number.isNaN(nilai)) {
    hasil.textContent = "Nilai tidak boleh kosong dan harus berupa angka.";
  } else if (nilai < 0 || nilai > 100) {
    hasil.textContent = "Nilai harus berada pada rentang 0–100.";
  } else {
    hasil.className = "sukses";
    hasil.textContent = "Data valid. Nama: " + nama + ", Nilai: " + nilai;
  }
}

// No. 6 — tombol sembunyikan/tampilkan elemen
function toggleElemen() {
  const kotak = $("kotakToggle");
  const tombol = $("tombolToggle");

  if (kotak.style.display === "none") {
    kotak.style.display = "block";
    tombol.textContent = "Sembunyikan";
  } else {
    kotak.style.display = "none";
    tombol.textContent = "Tampilkan";
  }
}