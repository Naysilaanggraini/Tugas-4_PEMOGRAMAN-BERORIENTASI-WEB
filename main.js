// Superclass Kapal
class Kapal {
  constructor(nama, jenis, kapasitas, panjang, lebar) {
    this.nama = nama;
    this.jenis = jenis;
    this.kapasitas = kapasitas; // tetap publik
    this.panjang = panjang;
    this.lebar = lebar;
  }

  infoKapal() {
    return `Kapal ini bernama ${this.nama} yang berjenis ${this.jenis} dengan kapasitas ${this.kapasitas} ton, memiliki dimensi ${this.panjang} x ${this.lebar} meter.`;
  }
}

// Subclass pertama
class YachtTraveling extends Kapal {
  constructor(nama, jenis, kapasitas, panjang, lebar, tujuanPelayaran, fasilitas, lamaPerjalanan) {
    super(nama, jenis, kapasitas, panjang, lebar);
    this.tujuanPelayaran = tujuanPelayaran;
    this.fasilitas = fasilitas; // array
    this.lamaPerjalanan = lamaPerjalanan; // hari
  }

  infoPelayaran() {
    return `Ini adalah paket Traveling Pelayaran dengan tujuan ${this.tujuanPelayaran} yang berlangsung selama ${this.lamaPerjalanan} hari dengan menggunakan yacht ${this.nama} yang merupakan jenis ${this.jenis}, memiliki dimensi ${this.panjang} x ${this.lebar} meter dengan kapasitas ${this.kapasitas} penumpang. Pelayaran ini memiliki fasilitas unggul yang mencakup ${this.fasilitas.join(', ')}.`;
  }
}

// Subclass kedua
class PengirimanJalurLaut extends Kapal {
  constructor(nama, jenis, kapasitas, panjang, lebar, muatan, biayaPerTon) {
    super(nama, jenis, kapasitas, panjang, lebar);
    this._muatan = muatan; // Enkapsulasi
    this.biayaPerTon = biayaPerTon; // tetap publik
  }

  get muatan() {
    return this._muatan;
  }

  set muatan(value) {
    if (value > this.kapasitas) {
      console.log(`Muatan melebihi kapasitas kapal! Kapasitas maksimum: ${this.kapasitas} ton.`);
    } else {
      this._muatan = value;
      console.log(`Muatan telah diperbarui menjadi ${this._muatan} ton.`);
    }
  }

  infoPengiriman() {
    return `Pengiriman ini menggunakan ${this.nama} yang merupakan kapal ${this.jenis} dengan kapasitas ${this.kapasitas} ton, memiliki dimensi ${this.panjang} x ${this.lebar} meter. Saat ini kapal sedang mengangkut ${this._muatan} ton barang.`;
  }
}

// Superclass ketiga
class KapalFerry extends Kapal {
  constructor(nama, kapasitas, panjang, lebar) {
    super(nama, 'Ferry', kapasitas, panjang, lebar);
  }

  infoKapal() {
    return `Kapal Ferry ini bernama ${this.nama} dengan kapasitas ${this.kapasitas} ton dan memiliki dimensi ${this.panjang} x ${this.lebar} meter.`;
  }
}

// Superclass keempat
class KapalKargo extends Kapal {
  constructor(nama, kapasitas, panjang, lebar) {
    super(nama, 'Kargo', kapasitas, panjang, lebar);
  }

  infoKapal() {
    return `Kapal Kargo ini bernama ${this.nama} dengan kapasitas ${this.kapasitas} ton dan memiliki dimensi ${this.panjang} x ${this.lebar} meter.`;
  }
}

// Superclass kelima
class KapalOseanografi extends Kapal {
  constructor(nama, kapasitas, panjang, lebar) {
    super(nama, 'Oseanografi', kapasitas, panjang, lebar);
  }

  infoKapal() {
    return `Kapal Riset ini bernama ${this.nama}, berjenis ${this.jenis}, memiliki kapasitas ${this.kapasitas} ton, dan panjang ${this.panjang} meter, lebar ${this.lebar} meter.`;
  }
}

// Superclass keenam
class KapalTankerMinyak extends Kapal {
  constructor(nama, kapasitas, panjang, lebar) {
    super(nama, 'Tanker Minyak', kapasitas, panjang, lebar);
  }

  infoKapal() {
    return `Kapal Tanker Minyak ini bernama ${this.nama}, berkapasitas ${this.kapasitas} ton dan memiliki dimensi ${this.panjang} x ${this.lebar} meter.`;
  }
}

// Untuk memanggil class dan method
let kapalPenumpang = new Kapal("Budiono Siregar", "Ferry", 500, 200, 100);
console.log(kapalPenumpang.infoKapal());

let yacht = new YachtTraveling("Oceanic", "Luxury Yacht", 10, 100, 18, "Raja Ampat", ['Kamar Suite Mewah', 'Water Sport Equipment', 'Kolam Renang', 'Restaurant'], 5);
console.log(yacht.infoPelayaran());

let kapalKargo = new PengirimanJalurLaut("Evergreen", "Kargo", 200000, 400, 50, 300000, 3000000);
console.log(kapalKargo.infoPengiriman());

// Cek muatan yang diperbolehkan
kapalKargo.muatan = 250000; // Mengatur muatan melebihi kapasitas
console.log(kapalKargo.infoPengiriman());

kapalKargo.muatan = 30000; // Mengatur muatan yang sah
console.log(kapalKargo.infoPengiriman());

// Membuat objek baru dari subclass tambahan
let ferry = new KapalFerry("Ferry Laut Indah", 300, 100, 20);
let kargo = new KapalKargo("Kontainer Sejahtera", 200000, 400, 50);
let oseanografi = new KapalOseanografi("Riset Laut", 100, 50, 15);
let tanker = new KapalTankerMinyak("Tanker Minyak Sejahtera", 100000, 300, 50);

// Menyimpan objek dalam array untuk menunjukkan polimorfisme
let armada = [yacht, kapalKargo, ferry, kargo, oseanografi, tanker];

// Menggunakan polimorfisme
for (let kapal of armada) {
  console.log(kapal.infoKapal()); // Memanggil metode infoKapal() sesuai tipe kapal
}

// Agar hasilnya tampil sekaligus di laman HTML
document.getElementById("objek").innerHTML = `
  <p>${kapalPenumpang.infoKapal()}</p>
  <p>${yacht.infoPelayaran()}</p>
  <p>${kapalKargo.infoPengiriman()}</p>
  <p>${ferry.infoKapal()}</p>
  <p>${kargo.infoKapal()}</p>
  <p>${oseanografi.infoKapal()}</p>
  <p>${tanker.infoKapal()}</p>
`;
