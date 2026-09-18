/**
 * Data untuk halaman katalog tersembunyi (/katalog) — dikirim ke calon tamu
 * lewat link WhatsApp langsung, TIDAK ditautkan dari mana pun di situs.
 * Sengaja tanpa harga; harga dibicarakan lewat WhatsApp.
 *
 * Nomor katalog TIDAK sama urutannya dengan kamar.ts — ini daftar kamar
 * fisik (beberapa kamar bisa berbagi tipe/foto yang sama di kamar.ts, mis.
 * Kamar 2 dan Kamar 3 sama-sama tipe Standar Double).
 *
 * kamarId diisi kalau tipenya sudah ada di kamar.ts (foto & deskripsi ambil
 * dari sana otomatis). Kosongkan untuk kamar yang belum ada di kamar.ts dan
 * isi field di bawah manual.
 *
 * videoYoutubeId: ambil dari URL video, bagian setelah "v=" (atau setelah
 * "youtu.be/"). Contoh https://youtu.be/AbCdEfGhIjK → isi "AbCdEfGhIjK".
 * Kosongkan ('') kalau videonya belum ada — halaman akan melewati bagian
 * video untuk kamar itu, tidak akan error.
 */

export interface KamarKatalog {
  nomor: number;
  /** Isi kalau kamar ini sudah ada di kamar.ts — foto & deskripsi diambil dari sana. */
  kamarId?: string;
  /** Wajib diisi manual kalau `kamarId` kosong (kamar yang belum ada di kamar.ts). */
  nama?: string;
  deskripsi?: string;
  /** Taruh file di public/katalog/ — TODO: foto Kamar 6 belum ada, menyusul dari pemilik. */
  foto?: string[];
  kapasitas?: number;
  tipeKasur?: string;
  ukuran?: string;
  videoYoutubeId: string;
}

export const daftarKamarKatalog: KamarKatalog[] = [
  { nomor: 1, kamarId: 'standar-single', videoYoutubeId: 'BfLLBfYLOtg' },
  { nomor: 2, kamarId: 'standar-double', videoYoutubeId: 'WqAAbSib0KA' },
  // Kamar fisik terpisah, tipe sama dengan Kamar 2 — pakai foto yang sama
  // dulu sampai pemilik kirim foto asli kamar ini.
  { nomor: 3, kamarId: 'standar-double', videoYoutubeId: 'rwly7r4pCPY' },
  { nomor: 4, kamarId: 'deluxe-single', videoYoutubeId: '-RtE45sWVcc' },
  { nomor: 5, kamarId: 'deluxe-double', videoYoutubeId: 'UegAXXV3WlE' },
  {
    nomor: 6,
    nama: 'Kamar 6',
    deskripsi: 'Kamar dengan dua kasur ukuran 120x200, kipas angin, dan kamar mandi di luar kamar.',
    tipeKasur: '2 kasur 120x200',
    ukuran: '12 m² (3 x 4 m)',
    foto: [], // TODO: menyusul dari pemilik
    videoYoutubeId: 'RYG3iiMICgo',
  },
  { nomor: 7, kamarId: 'keluarga', videoYoutubeId: 'l29Mb9GskAw' },
];

/** Video umum properti (tampak luar) — dipakai di bagian atas halaman /katalog. */
export const videoYoutubeHalaman = 'forpxLsyvHo';
