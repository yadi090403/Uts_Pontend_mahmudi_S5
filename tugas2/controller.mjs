import data from './data.mjs';

// Fungsi untuk melihat semua data
export const lihatData = () => {
  console.log("Data yang ada saat ini:");
  data.forEach((item, index) => {
    console.log(`${index + 1}. Nama: ${item.nama}, Umur: ${item.umur}, Alamat: ${item.alamat}, Email: ${item.email}`);
  });
};

// Fungsi untuk menambah data
export const tambahData = (nama, umur, alamat, email) => {
  const newData = { nama, umur, alamat, email };
  data.push(newData);
  console.log(`Data berhasil ditambahkan: ${JSON.stringify(newData)}`);
};

// Fungsi untuk menghapus data berdasarkan index
export const hapusData = (index) => {
  if (index > -1 && index < data.length) {
    const deletedData = data.splice(index, 1);
    console.log(`Data berhasil dihapus: ${JSON.stringify(deletedData[0])}`);
  } else {
    console.log("Index tidak valid, data tidak ditemukan.");
  }
};
