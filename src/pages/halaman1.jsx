import React from "react";
import "../components/halaman1.css";

function Home() {
  return (
    <main className="cv-container">
      <header className="header">
        <h1 className="site-title">Andrean Valdy</h1>
        <p className="tagline">"Bekerjalah sebaik mungkin sampai berhasil. Jangan ada kata menyerah."</p>
      </header>
      <nav className="navigation">
        <ul className="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>Hi! Saya Andrean Valdy, seorang individu kreatif dari Gresik. Saya memiliki passion dalam dunia teknologi, desain grafis, dan olahraga, khususnya sepak bola. Saya suka mengeksplorasi ide-ide baru dan menciptakan solusi yang inovatif.</p>
      </section>
      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul>
          <li>Design Grafis (Adobe Photoshop, CorelDRAW)</li>
          <li>Content Writing</li>
          <li>Ngoding (React, JavaScript)</li>
          <li>Adobe Photoshop & CorelDRAW</li>
        </ul>
      </section>
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>Hubungi saya melalui:</p>
        <ul>
          <li><strong>Nomor HP:</strong> 083294348843</li>
          <li><strong>Email:</strong> andrean.valdy@example.com</li>
        </ul>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Andrean Valdy. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default Home;
