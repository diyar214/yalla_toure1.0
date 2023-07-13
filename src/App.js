import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Places from "./pages/Places";
import AddPlace from "./pages/AddPlace";
import Restaurants from "./pages/Restaurants";
import "./style/App.css";
import "./pages/pages.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/About" Component={About} />
          <Route path="/Places" Component={Places} />
          <Route path="/Restaurants" Component={Restaurants} />
          <Route path="/CreatePlace" Component={AddPlace} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
