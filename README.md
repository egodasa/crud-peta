# Aplikasi CRUD Peta 
Demo : https://simple-peta-crud-gfivtcarwo.now.sh

## Made with
1. NodeJS (AdonisJS framework)
2. Full VanilaJS (frontend)
3. LeafletJS with Mapbox tile server
4. PostgreSQL
5. W3CSS framework

## Fitur
1. CRUD Item Peta seperti polygon, polyline, marker dan circle
2. Import ke GeoJSON untuk setiap item
3. Informasi kustom bisa ditambahkan ke layer
4. Kustom style
5. Hide/Show layer (pojok kanan atas peta)

## Instalasi
1. Buat database bernama `dbgis`
2. Import file dbgis.sql
3. Konfigurasi database menggunakan `dotenv` untuk testing. Silahkan edit file `.env` untuk konfigurasi.

## Demo

1. Buka terminal dan jalankan perintah `node server.js`
2. Silahkan buka 127.0.0.1:3333 untuk lokal atau https://simple-peta-crud-gfivtcarwo.now.sh untuk demo online
