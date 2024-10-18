import "./App.css";
import Info from "./components/info/Info.jsx";
import About from "./components/about/About.jsx";
import Interests from "./components/interests/Interests.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div className="component-container">
      <div className="component-subcontainer">
        <Info />
        <div className="about-interests">
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
