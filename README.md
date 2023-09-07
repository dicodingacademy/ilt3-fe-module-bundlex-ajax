# SIB Front-End (FE) ILT 3 Demo
Repositori ini digunakan untuk keperluan ILT di program SIB, khususnya pembelajaran Front-end. Instruktur dapat menggunakan repo ini untuk keperluan mengajar seperti live demo.

## Aplikasi Restaurant Catalogue
Live demo ini terdiri dari dua topik. Berikut adalah rincian mengenai dua project untuk keduanya.

### Restaurant Catalogue Webpack
Latihan untuk topik AJAX dapat dimulai dengan `restaurant-catalogue-webpack-starter-project`. Project ini sudah tersedia kode yang lengkap kecuali packages yang dibutuhkan.

#### Instruktur perlu memasang packages yang diperlukan (dev):

* copy-webpack-plugin
* css-loader
* html-webpack-plugin
* style-loader
* webpack
* webpack-cli
* webpack-dev-server
* webpack-merge 

#### Melakukan konfigurasi webpack

* Membagi konfigurasi menjadi tiga environment
  * Development
  * Production
* Menerapkan style-loader dan css-loader untuk memproses `.css`. Loader memungkinkan kita memproses berkas lain dalam JavaScript.
* Menerapkan dua plugin plugin
  * CopyWebpackPlugin: melakukan copy-paste seluruh berkas (isi folder) dari folder yang diincar ke folder yang dituju.
  * HtmlWebpackPlugin: memproses berkas HTML agar diproses oleh webpack sebagai template web. Ini sangat bermanfaat jika menggunakan dev-server. 

#### Membuat script package.json

* `npm run start:dev`/`npm run preview`: menjalankan webpack dev server untuk menjalankan project dalam mode development dan membuat local server.
* `npm run build`:  melakukan kompilasi project dalam mode production
* `npm run start`: menjalankan local server dari hasil kompilasi

Jika ingin melihat hasil akhir untuk topik webpack, instruktur dapat menilik folder `restaurant-catalogue-webpack-finish`.

### Restaurant Catalogue Ajax

Latihan untuk topik AJAX dapat dimulai dengan `restaurant-catalogue-ajax-starter-project`. Project ini merupakan hasil akhir dari `restaurant-catalogue-webpack-finish`, tetapi ada perubahan pada beberapa berkas. Selain itu, kode untuk melakukan teknik Ajax telah tersedia sebetulnya. Namun, masih menggunakan Browser API yang lama, yaitu `XMLHttpRequest`.

Beberapa hal yang instruktur lakukan untuk live demo ini.

* Mempelajari dokumentasi REST API: [restaurant-api.dicoding.dev](https://restaurant-api.dicoding.dev/#/).
* Melakukan migrasi dari penerapan [XMLHttpRequest](https://javascript.info/xmlhttprequest) menjadi [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).


Jika ingin melihat hasil akhir untuk topik Ajax, instruktur dapat menilik folder `restaurant-catalogue-ajax-finish`.
