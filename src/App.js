import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";


function App() {
  return (
    <div className="cursor-progress">
      <Navbar/>
      <Hero />
      <Analytics/>
      <Newsletter />
    </div>
  );
}

export default App;
