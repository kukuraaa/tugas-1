import ra from "../assets/ra.jpeg";

function Card() {
  return (
    <div className="card">
      <img src={ra} alt="Foto Profil" />

      <h2>Khumaera</h2>
      <p>Frontend Developer</p>
    </div>
  );
}

export default Card;