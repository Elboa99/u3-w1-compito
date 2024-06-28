import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import Gallery from "./components/Gallery";
import GalleryContainer from "./components/GalleyContainer";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Gallery />
      <GalleryContainer />
      <CustomFooter />
    </div>
  );
}

export default App;
