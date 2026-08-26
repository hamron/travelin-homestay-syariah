/**
 * Paket wisata yang ditawarkan bersama menginap.
 * satuan menjelaskan cakupan harga (per orang, per rombongan, dst).
 */

export interface PaketWisata {
  id: string;
  nama: string;
  deskripsi: string;
  harga: number;
  satuan: string;
  /** Taruh file gambar di folder public/wisata/ */
  gambar: string;
}

export const daftarPaketWisata: PaketWisata[] = [
  {
    id: 'rafting-menginap',
    nama: 'Paket Rafting + Menginap',
    deskripsi:
      'Seru-seruan arung jeram lalu istirahat menginap di homestay — cocok ' +
      'untuk rombongan kecil.',
    harga: 850000,
    satuan: 'untuk 4 orang, sudah termasuk menginap',
    gambar: '/wisata/rafting.jpg',
  },
  {
    id: 'wisata-vw',
    nama: 'Wisata VW Borobudur',
    deskripsi:
      'Keliling kawasan Candi Borobudur dan sekitarnya naik mobil VW klasik.',
    harga: 400000,
    satuan: 'per mobil, maks. 4 orang',
    gambar: '/wisata/vw.jpg',
  },
];
