/**
 * Pusat data Travelinn Homestay Syariah Borobudur.
 * Ganti nilai di file ini saja — seluruh website ikut berubah.
 *
 * Baris bertanda TODO masih perlu kamu isi.
 */

export const site = {
  nama: 'Travelinn Homestay Syariah Borobudur',
  namaPendek: 'Travelinn',
  tagline: 'Homestay syariah yang tenang di Borobudur',
  deskripsi:
    'Homestay syariah di kawasan Candi Borobudur, Magelang. Bersih, nyaman, ' +
    'dan ramah keluarga muslim — dilengkapi arah kiblat, perlengkapan salat, ' +
    'dan lingkungan yang tenang.',

  url: 'https://travelinhomestaysyariah.web.id',

  // 0812-3153-8282 dalam format internasional
  whatsapp: '6281231538282',

  telepon: '+62 812-3153-8282',
  email: 'arsbeyhomestay@gmail.com', // TODO: ganti kalau punya email khusus

  alamat: {
    jalan: 'Jl. Badrawati',           // TODO: alamat jalan lengkap + nomor
    kelurahan: 'Borobudur',           // TODO: nama dusun/kelurahan
    kota: 'Magelang',
    provinsi: 'Jawa Tengah',
    kodePos: '56553',                 // TODO: pastikan kode pos benar
    negara: 'ID',
  },

  koordinat: { lat: -7.604314285523657, lng: 110.2295699954562 },

  // TODO: Google Maps > Bagikan > Sematkan peta > salin isi src="..."
  petaEmbed: '',

  /** Membuka kotak bintang Google langsung, tamu tidak perlu cari-cari */
  linkReviewGoogle: 'https://g.page/r/Cb68j4IyVH_xEBM/review',

  sosial: {
    instagram: '', // TODO
    facebook: '',
    tiktok: '',
  },

  jamOperasional: {
    checkIn: '14:00',
    checkOut: '12:00',
    resepsionis: '24 jam',
  },
} as const;

/** Alamat satu baris, dipakai di footer dan schema.org */
export const alamatLengkap = [
  site.alamat.jalan,
  site.alamat.kelurahan,
  site.alamat.kota,
  site.alamat.provinsi,
  site.alamat.kodePos,
].join(', ');

/** Bikin link WhatsApp dengan pesan yang sudah terisi otomatis */
export function linkWhatsApp(pesan: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(pesan)}`;
}
