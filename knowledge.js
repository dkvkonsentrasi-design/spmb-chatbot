/*
  BASIS PENGETAHUAN SPMB
  -------------------------------------------
  Edit bagian ini untuk memasukkan data resmi sekolah/daerah Anda.

  Saran:
  - Satu item = satu topik/informasi.
  - "keywords" berisi berbagai cara orang menanyakan topik tersebut.
  - "content" berisi fakta resmi, bukan jawaban yang sudah jadi.
  - Jangan memasukkan data yang belum dikonfirmasi.
*/

const SPMB_KNOWLEDGE = [
  {
    id: "syarat",
    title: "Persyaratan pendaftaran",
    keywords: [
      "syarat", "persyaratan", "dokumen", "berkas", "siap", "daftar",
      "pendaftaran", "administrasi", "akta", "kk", "kartu keluarga",
      "ijazah", "rapor", "surat keterangan"
    ],
    content: "Persyaratan pendaftaran SPMB perlu mengikuti ketentuan resmi sekolah atau daerah penyelenggara. Masukkan daftar dokumen yang benar-benar diwajibkan pada bagian ini."
  },
  {
    id: "alur",
    title: "Alur pendaftaran",
    keywords: [
      "alur", "cara daftar", "bagaimana daftar", "mulai dari mana",
      "langkah", "prosedur", "pendaftaran online", "registrasi"
    ],
    content: "Alur pendaftaran sebaiknya ditulis berurutan, misalnya pembuatan akun, pengisian data, unggah dokumen, pemilihan jalur/sekolah, pemeriksaan data, lalu pengiriman pendaftaran. Sesuaikan urutan ini dengan prosedur resmi yang berlaku."
  },
  {
    id: "jalur",
    title: "Jalur penerimaan",
    keywords: [
      "jalur", "zonasi", "domisili", "afirmasi", "prestasi",
      "mutasi", "perpindahan", "jalur masuk", "kategori"
    ],
    content: "Jalur penerimaan mengikuti ketentuan SPMB yang berlaku di wilayah penyelenggara. Masukkan nama jalur, persyaratan, dan ketentuan masing-masing jalur pada basis pengetahuan ini."
  },
  {
    id: "jadwal",
    title: "Jadwal SPMB",
    keywords: [
      "jadwal", "tanggal", "kapan", "dibuka", "ditutup", "pendaftaran",
      "seleksi", "pengumuman", "daftar ulang", "verifikasi"
    ],
    content: "Jadwal SPMB harus mengikuti kalender resmi penyelenggara. Masukkan tanggal pembukaan pendaftaran, penutupan, verifikasi, seleksi, pengumuman, dan daftar ulang jika tersedia."
  },
  {
    id: "kuota",
    title: "Kuota penerimaan",
    keywords: [
      "kuota", "daya tampung", "jumlah siswa", "berapa orang",
      "kapasitas", "diterima"
    ],
    content: "Kuota penerimaan berbeda menurut sekolah, jalur, dan ketentuan penyelenggara. Masukkan angka kuota resmi pada bagian ini jika sudah ditetapkan."
  },
  {
    id: "hasil",
    title: "Hasil seleksi",
    keywords: [
      "hasil", "pengumuman", "lulus", "diterima", "seleksi",
      "cek hasil", "melihat hasil", "kelulusan"
    ],
    content: "Hasil seleksi dapat dilihat melalui kanal pengumuman resmi yang ditetapkan penyelenggara. Masukkan alamat halaman atau mekanisme pengecekan hasil yang resmi jika tersedia."
  },
  {
    id: "daftar-ulang",
    title: "Daftar ulang",
    keywords: [
      "daftar ulang", "registrasi ulang", "ulang", "setelah lulus",
      "setelah diterima", "konfirmasi"
    ],
    content: "Peserta yang dinyatakan diterima perlu mengikuti ketentuan daftar ulang sesuai jadwal dan mekanisme resmi. Masukkan dokumen dan langkah daftar ulang yang benar di sini."
  },
  {
    id: "kontak",
    title: "Kontak informasi",
    keywords: [
      "kontak", "hubungi", "nomor", "telepon", "whatsapp", "wa",
      "email", "admin", "operator", "panitia"
    ],
    content: "Informasi kontak panitia/operator SPMB perlu menggunakan kontak resmi. Masukkan nomor telepon, WhatsApp, email, atau alamat layanan yang benar di bagian ini."
  }
];
