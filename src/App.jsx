import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import Counter from "./components/Counter";
import Form from "./components/Form";

import flower from "./assets/Flowers Bouquet Building Set.jpg";
import keychain from "./assets/keychain illit.jpg";
import lego from "./assets/Olivia Rodrigo's LEGO sets.jpg";
import shoes from "./assets/puma shoes.jpg";
import mug from "./assets/kyto mug japan.jpg";
import utan from "./assets/ikea bunny.jpg";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Sidebar />

        <div className="content">
          <Card />

          <div className="products">
            <ProductCard
              nama="Flower Bouquet Building Set"
              harga="Rp450.000"
              gambar={flower}
            />

            <ProductCard
              nama="Keychain ILLIT"
              harga="Rp75.000"
              gambar={keychain}
            />

            <ProductCard
              nama="LEGO Olivia Rodrigo"
              harga="Rp850.000"
              gambar={lego}
            />

            <ProductCard
              nama="Puma Shoes"
              harga="Rp1.200.000"
              gambar={shoes}
            />

            <ProductCard
              nama="Kyoto Mug Japan"
              harga="Rp120.000"
              gambar={mug}
            />

            <ProductCard
              nama="IKEA Bunny"
              harga="Rp199.000"
              gambar={utan}
            />
            <Counter />
            <Form />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;