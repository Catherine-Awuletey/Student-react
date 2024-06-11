import logo from "./logo.svg";
import "./App.css";
import Hero from "./Components/Hero";
import Video from "./Components/Video";
import Clients from "./Components/Clients";
import Packages from "./Components/Packages";
// import Quality from "./Components/Quality";
import Courses from "./Components/Courses";

function App() {
  return (
    <div className="bg-[#26335D] p-5">
      <Hero />
      <Video />
      <Clients />
      <Packages />
      {/* <Quality /> */}
      <Courses />
    </div>
  );
}

export default App;
