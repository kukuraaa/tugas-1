import ra from "./assets/ra.jpeg";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <div className="profile">
          <img src={ra} alt="Foto Profil" />
          <h2>Khumaera</h2>
          <p>Frontend Developer</p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;