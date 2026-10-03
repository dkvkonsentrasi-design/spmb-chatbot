/*
  BASIS PENGETAHUAN SPMB
  SMK DIPONEGORO 1 PURWOKERTO
  -------------------------------------------
  Data di bawah berasal dari informasi yang diberikan pengguna.
  Jika ada data yang belum diberikan, chatbot diarahkan untuk menyatakan
  bahwa informasi tersebut belum tersedia dan tidak mengarang.
*/

const SPMB_KNOWLEDGE = [
  {
    id: "profil-sekolah",
    title: "Profil SMK Diponegoro 1 Purwokerto",
    keywords: [
      "profil", "sekolah", "nama sekolah", "smk", "diponegoro", "dipsa",
      "alamat", "lokasi", "website", "web", "elearning", "e learning",
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
Syarat umum yang tersedia pada data SPMB:
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

Belum ada persyaratan khusus lain yang tercatat pada data SPMB.
Jika pengguna bertanya tentang persyaratan yang tidak tercantum, jangan mengarang.
`
  },
  {
    id: "jalur",
    title: "Jalur penerimaan",
    keywords: [
      "jalur", "jalur penerimaan", "jalur masuk", "kategori", "masuk",
      "seleksi", "penerimaan"
    ],
    content: `
Data nama jalur penerimaan, ketentuan masing-masing jalur, dan persyaratan
per jalur belum diberikan. Jika ditanya tentang jalur tertentu, sampaikan
bahwa rincian jalur belum tersedia pada data SPMB dan arahkan pengguna
menghubungi 085173208512 untuk informasi lebih lanjut.
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

CATATAN PENTING:
Data yang diberikan menyebut "31 Juni". Juni tidak memiliki tanggal 31,
sehingga tanggal penutupan pendaftaran tersebut perlu dikonfirmasi kepada
sekolah sebelum dianggap sebagai tanggal resmi yang pasti.
Untuk konfirmasi, hubungi 085173208512.
`
  },
  {
    id: "program-keahlian",
    title: "Jurusan / program keahlian",
    keywords: [
      "jurusan", "program", "keahlian", "jurusan apa", "pilihan jurusan",
      "teknik sepeda motor", "tsm", "manajemen perkantoran", "perkantoran",
      "desain komunikasi visual", "dkv", "kuota", "daya tampung"
    ],
    content: `
Program keahlian yang tersedia beserta kuotanya:
1. Teknik Sepeda Motor — kuota 60 siswa.
   Fokus pembelajaran secara umum mencakup dasar perawatan, pemeriksaan,
   perbaikan, mesin, kelistrikan, dan komponen sepeda motor.
2. Manajemen Perkantoran — kuota 60 siswa.
   Fokus pembelajaran secara umum mencakup administrasi perkantoran,
   pengelolaan dokumen, komunikasi kerja, layanan administrasi, dan
   penggunaan aplikasi/peralatan perkantoran.
3. Desain Komunikasi Visual — kuota 60 siswa.
   Fokus pembelajaran secara umum mencakup komunikasi visual, desain grafis,
   pengolahan visual, identitas/branding, dan media digital.

Catatan: penjelasan fokus program di atas adalah penjelasan umum untuk
membantu pengguna memahami jurusan; bukan kutipan kurikulum resmi sekolah.
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
Kuota yang tersedia pada data SPMB:
- Teknik Sepeda Motor: 60 siswa.
- Manajemen Perkantoran: 60 siswa.
- Desain Komunikasi Visual: 60 siswa.
Total kuota berdasarkan data yang diberikan: 180 siswa.
`
  },
  {
    id: "hasil",
    title: "Hasil seleksi",
    keywords: [
      "hasil", "pengumuman", "lulus", "diterima", "seleksi",
      "cek hasil", "melihat hasil", "kelulusan", "pengumuman hasil"
    ],
    content: `
Pengumuman hasil seleksi dijadwalkan pada 1 Juli 2027.
Mekanisme atau tautan untuk melihat hasil seleksi belum diberikan.
Jika pengguna menanyakan cara atau website untuk melihat hasil,
arahkan untuk menghubungi 085173208512.
`
  },
  {
    id: "daftar-ulang",
    title: "Daftar ulang",
    keywords: [
      "daftar ulang", "registrasi ulang", "ulang", "setelah lulus",
      "setelah diterima", "konfirmasi", "cara daftar ulang"
    ],
    content: `
Daftar ulang dijadwalkan pada 2 Juli 2027.
Untuk informasi mengenai cara, dokumen, atau prosedur daftar ulang,
pengguna diarahkan langsung menghubungi nomor 085173208512.
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
tersedia pada data SPMB.
`
  },
  {
    id: "faq",
    title: "FAQ SPMB",
    keywords: [
      "faq", "kk", "belum punya kk", "luar kota", "dari luar kota",
      "bisa daftar", "ada tes", "kapan pengumuman", "daftar ulang"
    ],
    content: `
FAQ:
- Jika belum punya KK: belum ada ketentuan khusus pada data SPMB. Untuk
  kepastian, hubungi 085173208512.
- Apakah bisa daftar dari luar kota: belum ada informasi pada data SPMB.
  Untuk kepastian, hubungi 085173208512.
- Apakah ada tes: ya. Seleksi dilakukan dengan mengerjakan soal.
- Kapan pengumuman: 1 Juli 2027.
- Bagaimana cara daftar ulang: daftar ulang dijadwalkan 2 Juli 2027.
  Untuk cara dan ketentuannya, langsung hubungi 085173208512.
`
  },
  {
    id: "kontak",
    title: "Kontak informasi SPMB",
    keywords: [
      "kontak", "hubungi", "nomor", "telepon", "whatsapp", "wa", "email",
      "admin", "operator", "panitia", "nomor pendaftaran"
    ],
    content: `
Untuk informasi SPMB yang belum tercantum atau untuk konfirmasi data,
hubungi:
- WhatsApp/telepon: 085173208512
- Email: smkdiponegoro@gmail.com
- Website resmi: https://www.smkdiponegoro1purwokerto.sch.id/
- TikTok: smk_dipsa
- Instagram: smk_dipsa
`
  }
];
