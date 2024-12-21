import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Kami senang mendengar dari Anda! Silakan hubungi kami melalui informasi di bawah ini:
      </p>
      <ul>
        <li>Email: support@mywebsite.com</li>
        <li>Telepon: +62 812 3456 7890</li>
        <li>Alamat: Jl. Teknologi No. 10, Jakarta</li>
      </ul>
      <p>
        Anda juga dapat mengisi formulir kontak kami untuk pertanyaan atau umpan balik.
      </p>
      <form>
        <div>
          <label htmlFor="name">Nama:</label>
          <input type="text" id="name" name="name" placeholder="Masukkan nama Anda" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Masukkan email Anda" />
        </div>
        <div>
          <label htmlFor="message">Pesan:</label>
          <textarea id="message" name="message" placeholder="Tulis pesan Anda di sini"></textarea>
        </div>
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

export default Contact;
