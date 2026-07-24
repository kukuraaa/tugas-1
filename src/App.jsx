import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import Counter from "./components/Counter";
import Form from "./components/Form";

import flower from "./assets/Flowers Bouquet Building Set.jpg";
import pixar from "./assets/LEGO Disney Pixar.jpg";
import lego from "./assets/Olivia Rodrigo's LEGO sets.jpg";
import vant from "./assets/LEGO Van Gogh.jpg";
import red from "./assets/LEGO Red London Telephone.jpg";
import hary from "./assets/LEGO Harry Potter Dobby.jpg";

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
              nama="LEGO Disney Pixar"
              harga="Rp750.000"
              gambar={pixar}
            />

            <ProductCard
              nama="LEGO Olivia Rodrigo"
              harga="Rp850.000"
              gambar={lego}
            />

            <ProductCard
              nama="LEGO Art Vant Gogh"
              harga="Rp1.200.000"
              gambar={vant}
            />

            <ProductCard
              nama="LEGO Red London Telephone"
              harga="Rp420.000"
              gambar={red}
            />

            <ProductCard
              nama="LEGO Harry Potter Dobby"
              harga="Rp599.000"
              gambar={hary}
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