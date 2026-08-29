/**
 * Fasilitas yang ditampilkan di halaman depan.
 * `ikon` adalah isi atribut d dari sebuah <path> SVG 24x24.
 */

export interface Fasilitas {
  nama: string;
  ket: string;
  ikon: string;
}

export const daftarFasilitas: Fasilitas[] = [
  {
    nama: 'Lingkungan syariah',
    ket: 'Tamu pasangan wajib menunjukkan salah satu: buku nikah, foto buku nikah, foto akad nikah, atau KTP kedua pasangan',
    ikon: 'M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z',
  },
  { nama: 'Wifi cepat', ket: 'Internet stabil di seluruh area', ikon: 'M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01M2 9a15 15 0 0 1 20 0' },
  { nama: 'AC di kamar tertentu', ket: 'Tersedia di kamar Deluxe & Keluarga', ikon: 'M12 2v20M4.9 7l14.2 8M4.9 17l14.2-8' },
  { nama: 'Dekat Candi Borobudur', ket: '5 menit berkendara', ikon: 'M3 21h18M5 21V10l7-5 7 5v11M10 21v-5h4v5' },
  { nama: 'Parkir luas', ket: 'Cukup untuk 6 mobil pribadi', ikon: 'M5 17h14M5 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 17V10l2-5h10l2 5v7M5 10h14' },
  { nama: 'Teh & kopi gratis', ket: 'Tersedia di area bersama', ikon: 'M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3' },
];
