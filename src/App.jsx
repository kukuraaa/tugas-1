import ra from "./assets/ra.jpeg";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import Sidebar from "./components/sidebar";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Sidebar />
        <Card />
        
      </main>

      <Footer />
    </>
  );
}

export default App;