import React from "react";
import footer from "../components/footer.jsx";
import { Link } from "react-router-dom";


function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        Selamat datang di halaman About! Ini adalah halaman sederhana untuk menjelaskan tentang website ini.
      </p>
      <ul>
        <li>Fitur 1: Navigasi antar halaman</li>
        <li>Fitur 2: Desain sederhana</li>
        <li>Fitur 3: Berbasis React</li>
      </ul>
    </div>
  );
}

export default About;
