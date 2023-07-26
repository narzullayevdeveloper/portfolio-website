import Banner from "./components/Banner";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-full h-full">
        <section id="home">
          <Home />
        </section>
        <Banner />
      </main>
    </>
  );
}

export default App;
