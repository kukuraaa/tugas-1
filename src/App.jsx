import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import Counter from "./components/Counter";
import Form from "./components/Form";

import flower from "./assets/Flowers Bouquet Building Set.jpg";
import japan from "./assets/japan LEGO.png";
import lego from "./assets/Olivia Rodrigo's LEGO sets.jpg";
import vant from "./assets/LEGO Van Gogh.jpg";
import way from "./assets/MilkyWay LEGO.png";
import baba from "./assets/barbie.png";

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
              nama="Princess Castle & Royal Pets"
              harga="Rp599.000"
              gambar={baba}
            />

               <ProductCard
              nama="Olivia Rodrigo's Dual Guitar"
              harga="Rp850.000"
              gambar={lego}
            />

            <ProductCard
              nama="Japanese Cherry Blossom"
              harga="Rp750.000"
              gambar={japan}
            />

            <ProductCard
              nama="The Starry Night"
              harga="Rp1.200.000"
              gambar={vant}
            />

            <ProductCard
              nama="The Milky Way Galaxy"
              harga="Rp420.000"
              gambar={way}
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