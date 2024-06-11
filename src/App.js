
import "./App.css";
import Hero from "./Components/Hero";
import Video from "./Components/Video";
import Clients from "./Components/Clients";
import Packages from "./Components/Packages";
import Quality from "./Components/Quality";
import Courses from "./Components/Courses";
import Reviews from "./Components/Reviews";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-[#26335D]">
      <Hero />
      <Video />
      <Clients />
      <Packages />
      <Quality />
      <Courses />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
