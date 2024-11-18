import { lihatData, tambahData, hapusData } from './controller.mjs';

// Melihat data awal
console.log("=== Melihat Data Awal ===");
lihatData();

// Menambah dua data baru
console.log("\n=== Menambah 2 Data Baru ===");
tambahData(
  { nama: "Lisa Putri", umur: 27, alamat: "Jalan Anggrek No. 25, Jakarta", email: "lisa.putri@email.com" },
  { nama: "Agus Kurniawan", umur: 33, alamat: "Jalan Sudirman No. 45, Bandung", email: "agus.kurniawan@email.com" }
);

// Melihat data setelah penambahan
console.log("\n=== tampilan Data Setelah ditambahkan ===");
lihatData();

// Menghapus data dengan index 3 (misalnya)
console.log("\n=== Menghapus Data di Index 3 ===");
hapusData(3);

// Melihat data setelah penghapusan
console.log("\n=== tampilan Data Setelah dihapus ===");
lihatData();
