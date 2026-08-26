/**
 * Daftar kamar. Nanti file ini bisa dipindah ke CMS supaya
 * bisa diedit lewat halaman /admin tanpa menyentuh kode.
 *
 * hargaPerMalam masih harga sementara — ganti dengan harga asli.
 */

export interface Kamar {
  id: string;
  nama: string;
  deskripsi: string;
  hargaPerMalam: number;
  kapasitas: number;
  ukuran: string;
  tipeKasur: string;
  fasilitas: string[];
  /** Taruh file gambar di folder public/kamar/ */
  gambar: string;
  tersedia: boolean;
}

export const daftarKamar: Kamar[] = [
  {
    id: 'ekonomi',
    nama: 'Kamar Ekonomi',
    deskripsi:
      'Kamar hemat dengan dua kasur double, kipas angin, dan kamar mandi di ' +
      'luar kamar — cocok untuk perjalanan singkat dengan bujet terbatas.',
    hargaPerMalam: 150000, // TODO: harga sementara — ganti dengan harga asli
    kapasitas: 2,
    ukuran: '8 m²',
    tipeKasur: '2 kasur double',
    fasilitas: ['Kipas angin', 'Kamar mandi luar'],
    gambar: '/kamar/ekonomi.jpg',
    tersedia: true,
  },
  {
    id: 'standar-single',
    nama: 'Kamar Standar Single',
    deskripsi:
      'Kamar dengan satu kasur king dan kamar mandi pribadi di dalam kamar, ' +
      'dilengkapi kipas angin untuk sirkulasi udara yang sejuk.',
    hargaPerMalam: 175000, // TODO: harga sementara — ganti dengan harga asli
    kapasitas: 2,
    ukuran: '8 m²',
    tipeKasur: '1 kasur king',
    fasilitas: ['Kipas angin', 'Kamar mandi dalam'],
    gambar: '/kamar/standar-single.jpg',
    tersedia: true,
  },
  {
    id: 'standar-double',
    nama: 'Kamar Standar Double',
    deskripsi:
      'Kamar dengan dua kasur double terpisah dan kamar mandi pribadi di ' +
      'dalam kamar — nyaman untuk tamu yang ingin tidur terpisah.',
    hargaPerMalam: 200000, // TODO: harga sementara — ganti dengan harga asli
    kapasitas: 2,
    ukuran: '8 m²',
    tipeKasur: '2 kasur double',
    fasilitas: ['Kipas angin', 'Kamar mandi dalam'],
    gambar: '/kamar/standar-double.jpg',
    tersedia: true,
  },
  {
    id: 'deluxe-single',
    nama: 'Kamar Deluxe Single',
    deskripsi:
      'Kamar ber-AC dengan satu kasur queen dan kamar mandi pribadi — lebih ' +
      'sejuk dan nyaman untuk menginap lebih lama.',
    hargaPerMalam: 250000, // TODO: harga sementara — ganti dengan harga asli
    kapasitas: 2,
    ukuran: '8 m²',
    tipeKasur: '1 kasur queen',
    fasilitas: ['AC', 'Kamar mandi dalam'],
    gambar: '/kamar/deluxe-single.jpg',
    tersedia: true,
  },
  {
    id: 'deluxe-double',
    nama: 'Kamar Deluxe Double',
    deskripsi:
      'Kamar ber-AC dengan dua kasur double dan kamar mandi pribadi — ' +
      'pilihan favorit untuk tamu yang bepergian berdua.',
    hargaPerMalam: 275000, // TODO: harga sementara — ganti dengan harga asli
    kapasitas: 2,
    ukuran: '8 m²',
    tipeKasur: '2 kasur double',
    fasilitas: ['AC', 'Kamar mandi dalam'],
    gambar: '/kamar/deluxe-double.jpg',
    tersedia: true,
  },
  {
    id: 'keluarga',
    nama: 'Kamar Keluarga',
    deskripsi:
      'Kamar ber-AC luas dengan kasur queen dan double — kamar favorit untuk keluarga kecil.',
    hargaPerMalam: 350000, // TODO: harga sementara — ganti dengan harga asli
    kapasitas: 3,
    ukuran: '10 m²',
    tipeKasur: '1 queen + 1 double',
    fasilitas: ['AC', 'Kamar mandi dalam'],
    gambar: '/kamar/keluarga.jpg',
    tersedia: true,
  },
];

/** Format 250000 menjadi "Rp 250.000" */
export function formatRupiah(nilai: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(nilai);
}
