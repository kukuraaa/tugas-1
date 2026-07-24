import ra from "../assets/ra.jpeg";

function Card() {
  return (
    <div className="card">
      <img src={ra} alt="Foto Profil" />

      <h2>Siti Khumaera M.S</h2>
      <p>Frontend Developer</p>
      <p className="desc">
      Jelajahi berbagai koleksi LEGO mulai dari bunga, karakter, hingga karya seni yang cocok untuk koleksi maupun hadiah.
      </p>
    </div>
  );
}

export default Card;