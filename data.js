// Data as an array of objects
const data = [
    { nama: "Data 1", golongan: "A", status: "NIKAH", gajiPokok: 0, tunjangan: 0, totalGaji: 0 },
    { nama: "Data 2", golongan: "B", status: "BELUM", gajiPokok: 0, tunjangan: 0, totalGaji: 0 },
    { nama: "Data 3", golongan: "C", status: "NIKAH", gajiPokok: 0, tunjangan: 0, totalGaji: 0 },
    { nama: "Data 4", golongan: "B", status: "BELUM", gajiPokok: 0, tunjangan: 0, totalGaji: 0 },
    { nama: "Data 5", golongan: "C", status: "NIKAH", gajiPokok: 0, tunjangan: 0, totalGaji: 0 },
    { nama: "Data 6", golongan: "B", status: "BELUM", gajiPokok: 0, tunjangan: 0, totalGaji: 0 },
    { nama: "Data 7", golongan: "C", status: "NIKAH", gajiPokok: 0, tunjangan: 0, totalGaji: 0 },
    { nama: "Data 8", golongan: "A", status: "BELUM", gajiPokok: 0, tunjangan: 0, totalGaji: 0 },
    { nama: "Data 9", golongan: "A", status: "NIKAH", gajiPokok: 0, tunjangan: 0, totalGaji: 0 },
    { nama: "Data 10", golongan: "A", status: "BELUM", gajiPokok: 0, tunjangan: 0, totalGaji: 0 },
];

// Salary rules based on Golongan
const gajiPokokGolongan = {
    "A": 10000000,
    "B": 8000000,
    "C": 5000000
};

// Tunjangan rules based on Golongan and Status
const tunjanganGolongan = {
    "A": 2000000,
    "B": 1500000,
    "C": 1000000
};

// Function to calculate Gaji Pokok, Tunjangan, and Total Gaji
data.forEach((item) => {
    item.gajiPokok = gajiPokokGolongan[item.golongan];

    // Check if status is "NIKAH", apply tunjangan if true
    if (item.status === "NIKAH") {
        item.tunjangan = tunjanganGolongan[item.golongan];
    } else {
        item.tunjangan = 0;
    }

    // Calculate total salary
    item.totalGaji = item.gajiPokok + item.tunjangan;
});

// Output the data
data.forEach((item, index) => {
    console.log(`\nData ${index + 1}:`);
    console.log(`Nama       : ${item.nama}`);
    console.log(`Golongan   : ${item.golongan}`);
    console.log(`Status     : ${item.status}`);
    console.log(`Gaji Pokok : Rp. ${item.gajiPokok}`);
    console.log(`Tunjangan  : Rp. ${item.tunjangan}`);
    console.log(`Total Gaji : Rp. ${item.totalGaji}`);
});

// console.table(data);
