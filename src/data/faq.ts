/**
 * Tanya-jawab di beranda. Jawaban harus cocok dengan data asli (jam di
 * config.ts, parkir & AC di fasilitas.ts/kamar.ts) — kalau data berubah,
 * perbarui di sini juga.
 */

export interface Faq {
  tanya: string;
  jawab: string;
}

export const daftarFaq: Faq[] = [
  {
    tanya: 'Jam berapa check-in dan check-out?',
    jawab: 'Check-in mulai pukul 14.00 dan check-out pukul 12.00. Resepsionis siap melayani 24 jam.',
  },
  {
    tanya: 'Seberapa jauh homestay dari Candi Borobudur?',
    jawab:
      'Sekitar 5 menit berkendara. Homestay berada di belakang Musholla Candi Mendut, Mungkid, Magelang — ' +
      'Candi Mendut ada di kawasan yang sama.',
  },
  {
    tanya: 'Apa aturan untuk tamu pasangan?',
    jawab:
      'Tamu pasangan wajib menunjukkan salah satu: buku nikah, foto buku nikah, foto akad nikah, ' +
      'atau KTP kedua pasangan.',
  },
  {
    tanya: 'Apakah semua kamar ber-AC?',
    jawab:
      'Tidak. AC tersedia di kamar Deluxe dan Kamar Keluarga. Kamar Ekonomi dan Standar memakai kipas angin.',
  },
  {
    tanya: 'Apakah ada parkir?',
    jawab: 'Ada, parkir luas dan cukup untuk 6 mobil pribadi.',
  },
  {
    tanya: 'Berapa harga kamar?',
    jawab: 'Harga dan ketersediaan kamar dibicarakan langsung lewat WhatsApp supaya selalu yang terbaru.',
  },
  {
    tanya: 'Bagaimana cara memesan?',
    jawab: 'Isi formulir booking di halaman ini atau chat langsung lewat WhatsApp — tanpa perlu telepon dulu.',
  },
];
