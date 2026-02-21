Nama : Muthia Anggraeni Rukmawan  
NPM : 247006111029

# LUXÉ Atelier - Premium Furniture Catalog

LUXÉ Atelier adalah aplikasi web katalog furnitur premium yang dibangun menggunakan **Next.js**. Dibuat untuk memenuhi tugas mata kuliah Pengembangan Aplikasi Berbasis Platform, dengan fokus pada implementasi berbagai teknik rendering modern dan manajemen state.

## Fitur Utama & Implementasi Teknis

aplikasi ini mengimplementasikan:

### 1. Teknik Rendering (Modern Rendering Patterns)
- **Static Site Generation (SSG):** Digunakan pada halaman beranda (`/`) untuk performa loading yang maksimal dan optimasi SEO.
- **Server-Side Rendering (SSR):** Diterapkan pada halaman Kategori dan Detail Produk untuk memastikan data yang diambil dari API selalu dinamis dan terbaru.
- **Client-Side Rendering (CSR):** Digunakan pada fitur interaktif seperti Wishlist dan Cart (Selection) untuk pengalaman pengguna yang *seamless*.

### 2. Integrasi Sumber Data
- Mengintegrasikan **DummyJSON API** (https://dummyjson.com/products) untuk menampilkan data produk secara dinamis (judul, harga, deskripsi, kategori, dan gambar).

### 3. State Management
- **Context API:** Digunakan sebagai Global State Management untuk menangani fitur Keranjang Belanja (Selection) dan Wishlist di seluruh aplikasi.
- **Local State (useState):** Digunakan untuk kontrol UI seperti dropdown menu dan interaksi tombol.

### 4. Fitur Tambahan (UI/UX & Optimization)
- **Responsive Design:** Tampilan adaptif untuk perangkat Mobile dan Desktop (Grid 2 kolom pada mobile).
- **Smart Back Button:** Navigasi pintar yang mengingat riwayat halaman pengguna.
- **Glassmorphism UI:** Desain modern menggunakan Tailwind CSS dengan efek backdrop-blur pada Navbar.

## 🛠️ Teknologi yang Digunakan
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **State:** React Context API
- **Deployment:** Vercel

## 📸 Demo Aplikasi
- **Live Demo:** https://luxe-atelier-furniture.vercel.app/

## 📝 Cara Menjalankan Secara Lokal
1. Clone repository ini.
2. Jalankan `npm install` untuk menginstall dependensi.
3. Jalankan `npm run dev` untuk memulai server pengembangan.
4. Buka `http://localhost:3000` di browser Anda.
