import "./App.css"

import React from 'react'

function Blog() {
  return (
    <>
    <div>Blog</div>
    <h1
        style={{ fontFamily: "sans-serif", textAlign: "center", color: "red" }}
      >
        BLOG PRIBADI
      </h1>
      <p
        style={{ fontFamily: "sans-serif", textAlign: "center", color: "gray" }}
      >
        M Aji Putra Prijaya (11.05 WIB 19/05/2025)
      </p>
      <hr style={{ marginLeft: "20px", marginRight: "20px" }} />
      <div className="text-center">
        <img src="src\assets\Boboiboy Api.jpg" alt="Boboiboy Api" width={300} />
      </div>
      <hr style={{ marginLeft: "20px", marginRight: "20px" }} />
      <p
        style={{
          textAlign: "justify",
          marginLeft: "20px",
          marginRight: "20px",
          fontFamily: "sans-serif",
        }}
      >
        <strong>BoBoiBoy Api</strong> adalah salah satu bentuk elemental dari
        BoBoiBoy yang memiliki kekuatan untuk mengendalikan dan menciptakan api.
        Ia muncul saat BoBoiBoy memecah dirinya menjadi beberapa versi
        berdasarkan elemen. Dalam wujud ini, BoBoiBoy menjadi lebih agresif dan
        berani, mencerminkan sifat panas dari api itu sendiri. Dengan kostum
        berwarna merah-oranye, BoBoiBoy Api menggunakan serangan berbasis api
        seperti tembakan bola api dan ledakan panas untuk mengalahkan musuh.
        Wujud ini pertama kali muncul dalam musim kedua serial *BoBoiBoy* dan
        menjadi salah satu elemen andalannya dalam pertarungan.
      </p>
      </>
  );
}

export default Blog