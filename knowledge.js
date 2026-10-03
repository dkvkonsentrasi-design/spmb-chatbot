/*
  BASIS PENGETAHUAN SPMB
  SMK DIPONEGORO 1 PURWOKERTO

  Sumber data:
  Informasi yang diberikan pengguna dalam percakapan.
  Jangan menganggap bagian yang belum tersedia sebagai fakta resmi.
*/

const SPMB_KNOWLEDGE = [
  {
    id: "profil-sekolah",
    title: "Profil SMK Diponegoro 1 Purwokerto",
    keywords: [
      "profil", "sekolah", "nama sekolah", "smk", "diponegoro", "dipsa",
      "alamat", "lokasi", "website", "web", "elearning", "e-learning",
      "nomor", "telepon", "whatsapp", "wa", "email", "tiktok", "instagram",
      "kontak", "hubungi"
    ],
    content: `
Nama resmi sekolah: SMK DIPONEGORO 1 PURWOKERTO.
Alamat: JALAN KARANGBENDA RAYA, BERKOH, PURWOKERTO SELATAN, BANYUMAS.
Website resmi: https://www.smkdiponegoro1purwokerto.sch.id/
Website e-learning: https://dkvkonsentrasi-design.github.io/ELLS.SMK.DIPSA.PURWOKERTO.V1/
Nomor telepon/WhatsApp: 085173208512.
Email: smkdiponegoro@gmail.com.
TikTok: smk_dipsa.
Instagram: smk_dipsa.
`
  },
  {
    id: "syarat",
    title: "Persyaratan pendaftaran",
    keywords: [
      "syarat", "persyaratan", "dokumen", "berkas", "daftar", "pendaftaran",
      "administrasi", "kk", "kartu keluarga", "ktp", "orang tua", "ortu",
      "akte", "akta", "kelahiran", "kip", "skl", "surat keterangan lulus",
      "umur", "usia", "ijazah", "lulus"
    ],
    content: `
Syarat umum:
- Fotokopi Kartu Keluarga (KK).
- Fotokopi KTP orang tua.
- Fotokopi akte/akta kelahiran.
- Fotokopi KIP jika memiliki.

Dokumen yang perlu disiapkan:
- Surat Keterangan Lulus (SKL).

Ketentuan umur:
- 15 sampai 21 tahun.

Ketentuan ijazah/SKL:
- Lulus.

Persyaratan khusus tambahan belum tersedia pada data yang diberikan.
`
  },
  {
    id: "jalur",
    title: "Jalur penerimaan",
    keywords: [
      "jalur", "jalur penerimaan", "jalur masuk", "kategori", "penerimaan"
    ],
    content: `
Nama jalur penerimaan, ketentuan masing-masing jalur, dan persyaratan
per jalur belum tersedia pada data yang diberikan.
Untuk informasi jalur, hubungi 085173208512.
`
  },
  {
    id: "jadwal",
    title: "Jadwal SPMB",
    keywords: [
      "jadwal", "tanggal", "kapan", "pendaftaran", "dibuka", "ditutup",
      "seleksi", "tes", "soal", "pengumuman", "daftar ulang", "verifikasi"
    ],
    content: `
Data jadwal yang diberikan:
- Pendaftaran: 1 November sampai 31 Juni.
- Seleksi: mengerjakan soal.
- Pengumuman: 1 Juli 2027.
- Daftar ulang: 2 Juli 2027.

Catatan: "31 Juni" perlu dikonfirmasi karena Juni tidak memiliki tanggal 31.
Untuk konfirmasi tanggal pendaftaran, hubungi 085173208512.
`
  },
  {
    id: "program-keahlian",
    title: "Jurusan / program keahlian",
    keywords: [
      "jurusan", "program", "keahlian", "pilihan jurusan",
      "teknik sepeda motor", "tsm", "manajemen perkantoran", "perkantoran",
      "desain komunikasi visual", "dkv", "kuota", "daya tampung"
    ],
    content: `
Program keahlian:
1. Teknik Sepeda Motor — kuota 60 siswa.
   Penjelasan umum: pembelajaran berkaitan dengan perawatan, pemeriksaan,
   perbaikan, mesin, kelistrikan, dan komponen sepeda motor.

2. Manajemen Perkantoran — kuota 60 siswa.
   Penjelasan umum: pembelajaran berkaitan dengan administrasi perkantoran,
   pengelolaan dokumen, komunikasi kerja, layanan administrasi, dan
   penggunaan aplikasi/peralatan perkantoran.

3. Desain Komunikasi Visual — kuota 60 siswa.
   Penjelasan umum: pembelajaran berkaitan dengan komunikasi visual,
   desain grafis, pengolahan visual, identitas/branding, dan media digital.

Penjelasan program di atas bersifat umum untuk membantu memahami jurusan,
bukan kutipan kurikulum resmi sekolah.
`
  },
  {
    id: "kuota",
    title: "Kuota penerimaan",
    keywords: [
      "kuota", "daya tampung", "jumlah siswa", "berapa orang", "kapasitas",
      "diterima", "teknik sepeda motor", "manajemen perkantoran",
      "desain komunikasi visual", "dkv"
    ],
    content: `
Kuota berdasarkan data yang diberikan:
- Teknik Sepeda Motor: 60 siswa.
- Manajemen Perkantoran: 60 siswa.
- Desain Komunikasi Visual: 60 siswa.
Total kuota berdasarkan data tersebut: 180 siswa.
`
  },
  {
    id: "seleksi",
    title: "Seleksi",
    keywords: [
      "tes", "ujian", "seleksi", "soal", "mengerjakan soal", "ada tes",
      "apakah ada tes", "tes masuk"
    ],
    content: `
Seleksi dilakukan dengan mengerjakan soal.
Rincian jenis soal, jumlah soal, durasi, lokasi, dan materi seleksi belum
tersedia pada data yang diberikan.
`
  },
  {
    id: "hasil",
    title: "Hasil seleksi",
    keywords: [
      "hasil", "pengumuman", "lulus", "diterima", "seleksi",
      "cek hasil", "melihat hasil", "kelulusan"
    ],
    content: `
Pengumuman hasil seleksi dijadwalkan pada 1 Juli 2027.
Mekanisme atau tautan untuk melihat hasil seleksi belum diberikan.
Untuk informasi cara melihat hasil, hubungi 085173208512.
`
  },
  {
    id: "daftar-ulang",
    title: "Daftar ulang",
    keywords: [
      "daftar ulang", "registrasi ulang", "setelah lulus",
      "setelah diterima", "konfirmasi", "cara daftar ulang"
    ],
    content: `
Daftar ulang dijadwalkan pada 2 Juli 2027.
Untuk cara, dokumen, atau prosedur daftar ulang, langsung hubungi
085173208512.
`
  },
  {
    id: "faq",
    title: "FAQ SPMB",
    keywords: [
      "faq", "belum punya kk", "luar kota", "dari luar kota",
      "bisa daftar", "ada tes", "kapan pengumuman", "daftar ulang"
    ],
    content: `
FAQ:
- Kalau belum punya KK: ketentuan khusus belum tersedia. Untuk kepastian,
  hubungi 085173208512.
- Apakah bisa daftar dari luar kota: belum ada informasi pada data yang
  diberikan. Untuk kepastian, hubungi 085173208512.
- Apakah ada tes: ya, seleksi dilakukan dengan mengerjakan soal.
- Kapan pengumuman: 1 Juli 2027.
- Bagaimana cara daftar ulang: daftar ulang 2 Juli 2027; untuk prosedurnya,
  langsung hubungi 085173208512.
`
  },
  {
    id: "kontak",
    title: "Kontak SPMB",
    keywords: [
      "kontak", "hubungi", "nomor", "telepon", "whatsapp", "wa", "email",
      "admin", "operator", "panitia", "website resmi"
    ],
    content: `
Kontak:
- WhatsApp/telepon: 085173208512
- Email: smkdiponegoro@gmail.com
- Website resmi: https://www.smkdiponegoro1purwokerto.sch.id/
- Website e-learning: https://dkvkonsentrasi-design.github.io/ELLS.SMK.DIPSA.PURWOKERTO.V1/
- TikTok: smk_dipsa
- Instagram: smk_dipsa
`
  }
];
