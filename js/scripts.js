// Ini Javascript

// Validasi Input Form
// Event Submit untuk menghitung BMI
document.getElementById('hitung-button').addEventListener('click', function() {
    // Ambil nilai dari input
    const jenisKelaminLakiLaki = document.getElementById('laki-laki').checked;
    const jenisKelaminPerempuan = document.getElementById('perempuan').checked;
    const beratBadan = parseFloat(document.getElementById('input-berat-badan').value);
    const usia = parseInt(document.getElementById('input-usia').value);
    const tinggiBadan = parseFloat(document.getElementById('input-tinggi-badan').value);
    
    // Validasi input
    if (isNaN(tinggiBadan) || isNaN(beratBadan) || isNaN(usia) || (!jenisKelaminLakiLaki && !jenisKelaminPerempuan)) {
        alert('Pastikan semua input terisi dengan benar');
        return;
    }

    // Logika untuk menghitung BMI dan menampilkan hasil
    hitungBmi(tinggiBadan, beratBadan, usia, jenisKelaminLakiLaki);
});

// Fungsi Hitung BMI
function hitungBmi(tinggiBadan, beratBadan, usia, jenisKelaminLakiLaki) {
    const tbad = tinggiBadan / 100;
    let bmi = beratBadan / (tbad * tbad);
    bmi = bmi.toFixed(1);

    // Menampilkan hasil BMI dan klasifikasi
    document.getElementById('hasil-bmi').textContent = bmi;
    document.getElementById('kategori-bmi').textContent = klasifikasiBmi(parseFloat(bmi));
    document.querySelector('.data-user.usia').textContent = usia;
    document.querySelector('.data-user.jenis-kelamin').textContent = jenisKelaminLakiLaki ? 'Laki-Laki' : 'Perempuan';

    // Menampilkan bagian hasil BMI
    document.querySelector('.result-section').style.display = 'block';
}

// Klasifikasi BMI
function klasifikasiBmi(bmi) {
    if (bmi < 18.5) {
        return "Kekurangan Berat Badan";
    } else if (bmi < 25) {
        return "Normal (ideal)";
    } else if (bmi < 30) {
        return "Kelebihan Berat Badan";
    } else {
        return "Kegemukan (obesitas)";
    }
}

// Event Reset Form
document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('bmi-form').reset();
    document.querySelector('.result-section').style.display = 'none';
});
