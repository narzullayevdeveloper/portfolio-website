import Banner from "./components/Banner";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-full h-full">
        <section id="home">
          <Home />
        </section>
        <Banner />
        <section id="services">
          <Services />
        </section>
      </main>
    </>
  );
}

export default App;
