Lab5Web — Praktikum 5: JavaScript Dasar dan Manipulasi HTML
	
Mata Kuliah	Pemrograman Web
Pertemuan	6
Topik	JavaScript dasar dan manipulasi elemen HTML
Nama	(Albert M)
NIM	(312510162)

1. Tujuan Praktikum
Memahami sintaks dasar JavaScript dan cara menyisipkan JavaScript pada HTML.
Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
Menampilkan informasi melalui console, alert, prompt, dan elemen HTML.
Memanipulasi konten serta gaya elemen HTML menggunakan JavaScript.
Membuat interaksi sederhana pada form dan melakukan validasi input.
Mendokumentasikan pekerjaan praktikum beserta hasil pengujiannya.
2. Struktur Folder
Lab5Web/
├── index.html        # Halaman utama (semua latihan)
├── script.js         # Seluruh kode JavaScript
├── style.css         # Tampilan sederhana
├── README.md         # Laporan ini

Cara Menjalankan di VS Code
Buka Visual Studio Code → File → Open Folder… → pilih folder Lab5Web.
Pada panel Explorer (kiri) pastikan terlihat index.html, script.js, dan style.css.
Jalankan halaman dengan salah satu cara:
Cara cepat: klik kanan index.html di Explorer → Reveal in File Explorer, lalu klik dua kali untuk membuka di browser.
Disarankan: pasang ekstensi Live Server (Ritwick Dey) di panel Extensions (Ctrl+Shift+X), lalu klik kanan index.html → Open with Live Server. Halaman otomatis dimuat ulang setiap file disimpan.
Di browser, buka Console: klik kanan → Inspect/Periksa → tab Console (atau tekan F12).
Ambil screenshot untuk dua hal berikut dan simpan ke folder screenshots/:
Tampilan VS Code: Explorer + editor yang menampilkan kode latihan terkait.
Tampilan browser: hasil program, dan Console bila relevan.

Tips screenshot: Windows Win+Shift+S, macOS Cmd+Shift+4.

4. Langkah Kerja dan Hasil

Semua latihan berada pada satu halaman index.html dan dipisahkan dalam kartu bernomor. Latihan yang memakai prompt() dijalankan lewat tombol agar tidak muncul dialog beruntun saat halaman dimuat.

Latihan 1 — Menampilkan Output
Kode: script.js bagian Latihan 1.
Cara kerja: textContent pada elemen #pesan diubah menjadi "Hello World" dan console.log() mencetak pesan yang sama.
Perbedaan: teks di halaman terlihat oleh pengguna, sedangkan Console hanya terlihat oleh pengembang
HASIL:<img width="1920" height="1080" alt="Screenshot (145)" src="https://github.com/user-attachments/assets/c7850696-b63a-4982-8fba-f89998dffcd4" />


Latihan 2 — Alert dan Prompt
Cara kerja: prompt() meminta nama. Bila terisi, tampil alert sapaan dan teks halaman berubah. Bila kosong atau Cancel, tampil "Nama belum diisi."
Skenario	Hasil
Isi nama "Albert"	Alert "Halo, Albert!" dan teks halaman "Selamat datang, Albert."
Tekan Cancel	Alert "Nama belum diisi." (prompt mengembalikan null)
Kosong lalu OK	Alert "Nama belum diisi." (prompt mengembalikan "")
HASIL:<img width="1920" height="1080" alt="Screenshot (146)" src="https://github.com/user-attachments/assets/d731296d-deab-4395-8cfa-7bda08953908" />

Latihan 3 — Function dan Operasi Aritmetika
Cara kerja: operasiDasar(a, b) menampilkan hasil tambah, kurang, kali, bagi, dan modulus. Pembagian dicek agar tidak membagi nol.
Hasil operasiDasar(9, 4):
Operasi	Hasil
Penjumlahan	13
Pengurangan	5
Perkalian	36
Pembagian	2.25
Modulus	1
HASIL:<img width="1920" height="1080" alt="Screenshot (147)" src="https://github.com/user-attachments/assets/0734931d-0abc-40d1-b7a2-48362d6886ec" />

Latihan 4 — Seleksi Kondisi if–else
Cara kerja: prompt() selalu menghasilkan string, sehingga dikonversi dengan Number(). Input kosong, NaN, atau di luar 0–100 dianggap tidak valid. Nilai ≥ 60 dinyatakan Lulus.
Input	Hasil
76	Lulus
60	Lulus
59	Belum lulus
150	Input nilai tidak valid
abc	Input nilai tidak valid
Kosong / Cancel	Input nilai tidak valid
HASIL:<img width="1920" height="1080" alt="Screenshot (148)" src="https://github.com/user-attachments/assets/ab1b9b98-b4b1-4cf5-8496-3a3fe6f83482" />

Latihan 5 — Seleksi Kondisi switch
Cara kerja: switch mencocokkan string "1"–"5" dengan case. Nilai lain masuk ke default. break mencegah eksekusi berlanjut ke case berikutnya.
Uji: masukkan 1, 3, 5, 9, dan kosong.
HASIL:<img width="1920" height="1080" alt="Screenshot (149)" src="https://github.com/user-attachments/assets/1ceb4f8f-b62a-4160-a479-9a0d6a5a6f99" />

Latihan 6 — Form Bilangan Genap atau Ganjil
Input	Hasil
4	Bilangan genap
7	Bilangan ganjil
-3	Bilangan ganjil
0	Bilangan genap
3.5	Masukkan bilangan bulat yang valid.
(kosong)	Masukkan bilangan bulat yang valid.
HASIL:<img width="1920" height="1080" alt="Screenshot (150)" src="https://github.com/user-attachments/assets/37103dea-0208-4bd6-9021-e735c6ea3a27" />

Latihan 7 — Mengubah Warna Halaman
Cara kerja: satu function ubahWarnaLatar(warna) dipakai oleh tiga tombol, sehingga kode tidak berulang.
HASIL:<img width="728" height="104" alt="image" src="https://github.com/user-attachments/assets/dd5d0f9d-e0a5-4f2b-bac3-7f9206cf3c9b" />

Latihan 8 — DOM dan Checkbox Menu Makanan
Cara kerja: querySelectorAll(".menu") mengambil semua checkbox. Tiap checkbox diberi addEventListener("change", hitungTotal). Total ditampilkan dengan toLocaleString("id-ID").
Contoh: Ayam Goreng + Telur Dadar = Rp7.500.
Eksperimen 5: ditambahkan dua menu, yaitu Tahu Goreng (Rp3.000) dan Nasi Putih (Rp4.000).
HASIL:<img width="563" height="188" alt="image" src="https://github.com/user-attachments/assets/52ef6fd7-1cf0-47a0-adce-ae199d551be3" />

Mini Project — Kalkulator Nilai Mahasiswa
Rumus: Nilai Akhir = Tugas × 30% + UTS × 30% + UAS × 40%
Predikat: A ≥ 85, B ≥ 75, C ≥ 60, D ≥ 50, selain itu E. Lulus bila nilai akhir ≥ 60.
Pemisahan function: hitungNilaiAkhir(), tentukanPredikat(), tentukanStatus() untuk perhitungan; bacaNilai() untuk validasi; tampilkanHasil() untuk tampilan.
Skenario	Tugas	UTS	UAS	Nilai Akhir	Predikat	Status
1	85	78	88	84.10	B	Lulus
2	100	100	100	100.00	A	Lulus
3	60	60	60	60.00	C	Lulus
4	50	40	45	45.00	E	Belum lulus
5	120	80	80	—	—	Ditolak (di luar 0–100)
HASIL:<img width="1920" height="1080" alt="Screenshot (151)" src="https://github.com/user-attachments/assets/3731e954-f6cd-41d7-8423-b06bf6a5320f" />

Eksperimen Mandiri
No.	Tugas	Lokasi
1	operasiDasar dengan dua nilai dari prompt dan konversi Number()	tombol "Hitung dari Prompt", fungsi operasiDariPrompt()
2	Tabel perkalian 7 dengan perulangan for	tampilTabelPerkalian(7)
3	cekGenap(angka) mengembalikan true/false	cekGenap() dan ujiCekGenap()
4	Validasi kolom tidak boleh kosong	validasiForm()
5	Tambah minimal dua menu	Tahu Goreng dan Nasi Putih di Latihan 8
6	Sembunyikan/tampilkan elemen	toggleElemen()
HASIL:<img width="1920" height="1080" alt="Screenshot (152)" src="https://github.com/user-attachments/assets/f676dc9c-0a4a-4f40-b0b1-c8c31e27f4ad" />

5. Jawaban Pertanyaan dan Tugas

1. Perbedaan console.log(), alert(), prompt(), dan textContent/innerHTML

Fungsi	Kegunaan
console.log()	Mencetak pesan ke Console browser. Dipakai untuk debugging dan tidak terlihat oleh pengguna biasa.
alert()	Menampilkan kotak dialog berisi pesan dan tombol OK. Menghentikan halaman sampai ditutup.
prompt()	Menampilkan dialog yang meminta input teks. Mengembalikan string, atau null bila dibatalkan.
textContent	Mengubah atau membaca isi teks elemen sebagai teks biasa (aman, tag HTML tidak diproses).
innerHTML	Mengubah atau membaca isi elemen sebagai HTML sehingga tag diproses. Hati-hati bila memasukkan input pengguna karena berisiko XSS.

2. Perbedaan let dan const let dipakai untuk variabel yang nilainya boleh ditetapkan ulang, sedangkan const untuk variabel yang tidak boleh ditetapkan ulang.

js
let umur = 20;
umur = 21;          // boleh

const nama = "Albert";
// nama = "Albert";   // error: Assignment to constant variable

3. Perbedaan == dan === == membandingkan nilai setelah melakukan konversi tipe otomatis, sedangkan === membandingkan nilai sekaligus tipe tanpa konversi (strict equality). Sebaiknya gunakan === agar hasil lebih dapat diprediksi.

js
5 == "5";    // true
5 === "5";   // false
0 == false;  // true
0 === false; // false

4. Fungsi if–else dan switch

if–else menguji kondisi logis, termasuk rentang nilai dan gabungan kondisi. Cocok untuk kasus seperti nilai >= 60.
switch memilih satu tindakan dari sejumlah nilai tertentu yang pasti. Cocok untuk menu atau pilihan angka 1–5. break mencegah eksekusi berlanjut ke case berikutnya.

5. Fungsi parameter dan return Parameter adalah variabel penerima data masukan saat function dipanggil. return mengembalikan hasil ke pemanggil dan menghentikan eksekusi function.

js
function hitungLuas(panjang, lebar) {   // panjang, lebar = parameter
  return panjang * lebar;               // mengembalikan hasil
}
console.log(hitungLuas(8, 4));          // 32

6. Memilih elemen dengan document.getElementById() Method ini mencari elemen di dokumen yang atribut id-nya sama persis dengan string argumen, lalu mengembalikan objek elemen tersebut (atau null bila tidak ada). Objek itu kemudian bisa diubah, misalnya lewat textContent, style, atau value.

js
const el = document.getElementById("pesan");
el.textContent = "Halo!";
el.style.color = "blue";

7. Script validasi form (nama tidak kosong, nilai 0–100) Lihat fungsi validasiForm() di script.js dan bagian "Validasi Form" di index.html.

Nama	Nilai	Hasil
(kosong)	80	Nama tidak boleh kosong.
Albert	(kosong)	Nilai tidak boleh kosong dan harus berupa angka.
ALBERT 105	Nilai harus berada pada rentang 0–100.
ALBERT 85	Data valid. Nama: Rani, Nilai: 85
6. Cara Commit dan Pengumpulan
bash
cd Lab5Web
git init
git add .
git commit -m "Praktikum 5: JavaScript dasar dan manipulasi HTML"
git branch -M main
git remote add origin https://github.com/<username>/Lab5Web.git
git push -u origin main

Langkah:

Buat repository baru bernama Lab5Web di GitHub (kosong, tanpa README bawaan).
Jalankan perintah di atas (ganti <username>). Di VS Code bisa juga lewat panel Source Control (Ctrl+Shift+G).
Kirim URL repository melalui e-learning/ecampus sesuai arahan dosen.
7. Kesimpulan

Praktikum ini memperlihatkan bahwa JavaScript dapat menampilkan output, menerima input, mengambil keputusan dengan if–else dan switch, mengulang proses, serta mengubah isi dan gaya elemen HTML melalui DOM. Memisahkan proses perhitungan, validasi, dan tampilan ke dalam function membuat kode lebih rapi dan mudah diuji.

8. Referensi
Flanagan, D. (2020). JavaScript: The Definitive Guide (7th ed.). O'Reilly Media.
MDN Web Docs. JavaScript Guide. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
