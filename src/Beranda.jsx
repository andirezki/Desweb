import { Link } from "react-router-dom";
import "./Beranda.css"
import {useRef} from 'react';

function Beranda() {
  const layananRef = useRef(null);

  const handleClickLayanan = () => {
    layananRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <>
      <header className="wreper">
        <div className="header">
          <nav className="Navigation">
            <div>
              <img src="assets/Icons/Logo.svg" alt="logo" />
            </div>
            <ul>
              <li>
                <a href="#">BERANDA</a>
              </li>

              <li onClick={handleClickLayanan}>
                <a href="#">LAYANAN</a>
              </li>

              <li>
                <a href="#">KONTAK</a>
              </li>

              <li>
                <a href="#" className="Navigation_Daftar">
                  DAFTAR
                </a>
              </li>
            </ul>
            <a href="#" className="Navigation_Masuk">
              MASUK
            </a>
          </nav>
        </div>
      </header>

      <div className="wreper">
        <section className="Tagline-section">
          <div className="Tagline">
            <img
              className="tagline-polkadot"
              src="assets/Icons/Polkadot.svg"
              alt=""
            />

            <div className="Tagline-kiri">
              <span className="Clean">Clean And Earn it</span>
              <span className="moto">
                Membersihkan Sepatu, Merawat Sepatu Dan Jual Beli Sepatu{" "}
              </span>
            </div>
            <div className="Tagline-kanan">
              <img
                className="tagline-sepatu"
                src="assets/Icons/Sepatu.svg"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>

      <div className="wreper">
        <section className="layanan-section" ref={layananRef}>
          <h1>LAYANAN KAMI</h1>

          <div className="btn-layanan">
            <div className="btn_sepatu">
              <a href="#">
                <div className="Perawatan_Sepatu">
                  <img src="assets/Icons/Perawatan Sepatu.svg" alt="" />
                  <br /><br />
                  <span>
                    Perawatan
                    <br /><br />
                    Sepatu
                  </span>
                </div>
              </a>
            </div>

            <div className="btn_sepatu">
              <a href="#">
                <div className="Jual_Sepatu">
                  <img src="assets/Icons/Jual Sepatu.svg" alt="" />
                  <br /><br />
                  <span>Jual Sepatu</span>
                </div>
              </a>
            </div>

            <div className="btn_sepatu">
              <a href="#">
                <div className="beli_sepatu">
                  <img src="assets/Icons/Beli Sepatu.svg" alt="" />
                  <br /><br />
                  <span>
                    Beli <br /><br />
                    Sepatu
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="wreper">
        <section class="Pengunjung-section">
          <div className="Pengunjung">
            <ul>
              <li>
                1000+
                <br /><br />
                Pengunjung
              </li>
              <li>
                100+
                <br /><br />
                Sepatu Terjual
              </li>
              <li>
                200+
                <br /><br />
                Sepatu
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="wreper">
        <section class="cara-section">
          <div class="cara">
            <img src="assets/Icons/Cara Kerja.svg" alt="" />
          </div>
        </section>
      </div>\
      <div class="wreper">
        <section class="perawatan-section">
            <div class="perawatan">
                <img src="assets/Icons/perawatan.svg" alt="" />
            </div>
        </section>
    </div>
      <footer class="wreper">
        <div class="ingfo-section">
            <div class="ingfo">
                <img src="assets/Icons/ingfo.svg" alt="" />
            </div>
        </div>
    </footer>
    </>
  );
}

export default Beranda;
