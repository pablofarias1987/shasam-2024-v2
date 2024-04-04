//develop
import { Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./Components/Menu/Menu";
import Registro from "./paginas/registro/registro";
import Home from "./paginas/Home/Home";
import { Footer } from "./Components/footer/footer";
import AboutUs from "./paginas/AboutUs/AboutUs";

function App() {


  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/register" element={<Registro />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
