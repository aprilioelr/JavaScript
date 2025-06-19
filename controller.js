// controller.js
let data = require('./data');

// Fungsi menampilkan data
function lihatData() {
  console.log("Data Pengguna:");
  data.map((item, index) => {
    console.log(`${index + 1}. Nama: ${item.nama}, Umur: ${item.umur}, Alamat: ${item.alamat}, Email: ${item.email}`);
  });
}

// Fungsi menambah data
function tambahData(nama, umur, alamat, email) {
  data.push({ nama, umur, alamat, email });
  console.log(`Data ${nama} berhasil ditambahkan!`);
}

// Fungsi menghapus data berdasarkan index
function hapusData(index) {
  if (index >= 0 && index < data.length) {
    let hapus = data.splice(index, 1);
    console.log(`Data ${hapus[0].nama} berhasil dihapus.`);
  } else {
    console.log("Index tidak valid!");
  }
}

// Contoh penggunaan
tambahData("Kevin", 23, "Bali", "kevin@mail.com");
tambahData("Lina", 24, "Palembang", "lina@mail.com");

lihatData();
hapusData(2);  // Menghapus data ke-3 (index 2)
lihatData();
